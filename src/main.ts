import './style.css';
import { fetchAlphaTex, fetchManifest } from './dataSource';
import { LocalMedia } from './media';
import { DrumPlayer, type TrackInfo } from './player';
import { downloadBlob, renderMixToWav } from './recorder';
import { formatReference } from './references';
import type { ManifestItem, Reference } from './types';
import { parseYouTubeId, YouTubePlayer } from './youtube';

function el<T extends HTMLElement>(id: string): T {
  const found = document.getElementById(id);
  if (!found) throw new Error(`Missing #${id} element`);
  return found as T;
}

const statusEl = el('status');
const songList = el<HTMLUListElement>('song-list');
const texInput = el<HTMLTextAreaElement>('tex-input');
const loadTexBtn = el<HTMLButtonElement>('load-tex');
const playBtn = el<HTMLButtonElement>('play');
const stopBtn = el<HTMLButtonElement>('stop');
const tempoInput = el<HTMLInputElement>('tempo');
const tempoNumInput = el<HTMLInputElement>('tempo-num');
const tempoOut = el<HTMLOutputElement>('tempo-out');
const loopInput = el<HTMLInputElement>('loop');
const masterInput = el<HTMLInputElement>('master');
const masterOut = el<HTMLOutputElement>('master-out');
const mixerSection = el('mixer');
const mixerTracks = el('mixer-tracks');
const refsSection = el('refs');
const refsList = el<HTMLUListElement>('refs-list');

const mediaFileInput = el<HTMLInputElement>('media-file');
const mediaClearBtn = el<HTMLButtonElement>('media-clear');
const ytUrlInput = el<HTMLInputElement>('yt-url');
const ytLoadBtn = el<HTMLButtonElement>('yt-load');
const ytClearBtn = el<HTMLButtonElement>('yt-clear');
const recordBtn = el<HTMLButtonElement>('record');
const recordStatus = el('record-status');

const player = new DrumPlayer(el('at-main'), el('at-wrap'));
const media = new LocalMedia(el('media-host'));
const youtube = new YouTubePlayer(el('yt-host'));

/** Latest known transport position (ms), used to align play-along media on play. */
let positionMs = 0;
/** Current tempo factor (1 = original), applied to backing media too. */
let tempoFactor = 1;
/** The loaded score's authored BPM; the tempo controls are expressed in BPM. */
let originalBpm = 120;
let scoreReady = false;

const TEMPO_MIN = Number(tempoInput.min);
const TEMPO_MAX = Number(tempoInput.max);

/** Drives the synth + backing media from an absolute target BPM and syncs the UI. */
function applyTempoBpm(bpm: number): void {
  const clamped = Math.min(TEMPO_MAX, Math.max(TEMPO_MIN, Math.round(bpm)));
  tempoFactor = originalBpm > 0 ? clamped / originalBpm : 1;
  tempoInput.value = String(clamped);
  tempoNumInput.value = String(clamped);
  tempoOut.textContent = `${Math.round(tempoFactor * 100)}%`;
  player.setTempo(tempoFactor);
  media.setRate(tempoFactor);
}

function setStatus(message: string, isError = false): void {
  statusEl.textContent = message;
  statusEl.classList.toggle('status--error', isError);
}

function setTransportEnabled(enabled: boolean): void {
  for (const control of [playBtn, stopBtn, tempoInput, tempoNumInput, loopInput, masterInput]) {
    control.disabled = !enabled;
  }
  recordBtn.disabled = !enabled;
}

function renderMixer(tracks: TrackInfo[]): void {
  mixerTracks.replaceChildren();
  for (const track of tracks) {
    const row = document.createElement('div');
    row.className = 'mixer-row';

    const name = document.createElement('span');
    name.className = 'mixer-name';
    name.textContent = track.name || `Track ${track.index + 1}`;

    const volume = document.createElement('input');
    volume.type = 'range';
    volume.min = '0';
    volume.max = '2';
    volume.step = '0.05';
    volume.value = '1';
    volume.addEventListener('input', () => {
      player.setTrackVolume(track.index, Number(volume.value));
    });

    const mute = document.createElement('label');
    const muteBox = document.createElement('input');
    muteBox.type = 'checkbox';
    muteBox.addEventListener('change', () => player.setTrackMute(track.index, muteBox.checked));
    mute.append(muteBox, document.createTextNode(' M'));

    const solo = document.createElement('label');
    const soloBox = document.createElement('input');
    soloBox.type = 'checkbox';
    soloBox.addEventListener('change', () => player.setTrackSolo(track.index, soloBox.checked));
    solo.append(soloBox, document.createTextNode(' S'));

    row.append(name, volume, mute, solo);
    mixerTracks.append(row);
  }
  mixerSection.hidden = tracks.length === 0;
}

/** Shows whose phrases a generated solo recognizably borrows from (read-only). */
function renderReferences(references: Reference[] | undefined): void {
  refsList.replaceChildren();
  const items = references ?? [];
  for (const ref of items) {
    const li = document.createElement('li');
    li.className = 'refs-item';

    const text = document.createElement('span');
    text.textContent = formatReference(ref);
    li.append(text);

    for (const url of ref.refs ?? []) {
      const link = document.createElement('a');
      link.className = 'refs-link';
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = '出典';
      li.append(document.createTextNode(' '), link);
    }
    refsList.append(li);
  }
  refsSection.hidden = items.length === 0;
}

async function selectSong(item: ManifestItem, button: HTMLButtonElement): Promise<void> {
  for (const active of songList.querySelectorAll('.is-active')) {
    active.classList.remove('is-active');
  }
  button.classList.add('is-active');
  renderReferences(item.references);
  setStatus(`「${item.title}」を読み込み中…`);
  try {
    player.loadTex(await fetchAlphaTex(item.file));
  } catch (error) {
    setStatus(`読み込み失敗: ${(error as Error).message}`, true);
  }
}

function renderSongList(items: ManifestItem[]): void {
  songList.replaceChildren();
  if (items.length === 0) {
    const empty = document.createElement('li');
    empty.className = 'song-empty';
    empty.textContent = 'まだソロがありません。ターミナルの Claude が data/ に生成します。';
    songList.append(empty);
    return;
  }
  for (const item of items) {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'song-button';
    button.textContent = item.title;
    button.addEventListener('click', () => void selectSong(item, button));
    li.append(button);
    songList.append(li);
  }
}

function wireTransport(): void {
  playBtn.addEventListener('click', () => player.playPause());
  stopBtn.addEventListener('click', () => player.stop());
  tempoInput.addEventListener('input', () => applyTempoBpm(Number(tempoInput.value)));
  tempoNumInput.addEventListener('change', () => applyTempoBpm(Number(tempoNumInput.value)));
  loopInput.addEventListener('change', () => player.setLooping(loopInput.checked));
  masterInput.addEventListener('input', () => {
    const percent = Number(masterInput.value);
    masterOut.textContent = `${percent}%`;
    player.setMasterVolume(percent / 100);
  });
  loadTexBtn.addEventListener('click', () => {
    const tex = texInput.value.trim();
    if (tex) player.loadTex(tex);
  });
}

function wirePlayAlong(): void {
  mediaFileInput.addEventListener('change', () => {
    const file = mediaFileInput.files?.[0];
    if (!file) return;
    media.load(file);
    media.setRate(tempoFactor);
    mediaClearBtn.disabled = false;
  });
  mediaClearBtn.addEventListener('click', () => {
    media.clear();
    mediaFileInput.value = '';
    mediaClearBtn.disabled = true;
  });

  ytLoadBtn.addEventListener('click', () => {
    const id = parseYouTubeId(ytUrlInput.value);
    if (!id) {
      setStatus('YouTube URL を認識できませんでした。', true);
      return;
    }
    void youtube.load(id);
    ytClearBtn.disabled = false;
  });
  ytClearBtn.addEventListener('click', () => {
    youtube.clear();
    ytUrlInput.value = '';
    ytClearBtn.disabled = true;
  });
}

/** The drum transport is the master clock; media + YouTube follow it. */
function wireSync(): void {
  player.onPositionChanged((pos) => {
    positionMs = pos.currentTime;
  });
  player.onStateChanged((playing) => {
    playBtn.textContent = playing ? '⏸ 一時停止' : '▶ 再生 / 一時停止';
    const seconds = positionMs / 1000;
    if (playing) {
      media.seek(seconds);
      void media.play().catch(() => undefined);
      youtube.seek(seconds);
      youtube.play();
    } else {
      media.pause();
      youtube.pause();
    }
  });
}

function wireRecording(): void {
  recordBtn.addEventListener('click', () => {
    if (!scoreReady) return;
    void runRecording();
  });
}

async function runRecording(): Promise<void> {
  recordBtn.disabled = true;
  recordStatus.textContent = '書き出し中…（曲の長さぶん処理します）';
  try {
    const synth = await player.exportSynthAudio();
    const blob = await renderMixToWav(synth, media.file);
    const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    downloadBlob(blob, `drum-mix-${stamp}.wav`);
    recordStatus.textContent = '完了。WAV をダウンロードしました。';
  } catch (error) {
    recordStatus.textContent = `録音失敗: ${(error as Error).message}`;
  } finally {
    recordBtn.disabled = !scoreReady;
  }
}

player.onScoreLoaded((tracks) => {
  scoreReady = true;
  positionMs = 0;
  originalBpm = player.originalTempo || 120;
  applyTempoBpm(originalBpm);
  renderMixer(tracks);
  setStatus('準備完了。再生できます。');
});
player.onPlayerReady(() => setTransportEnabled(true));
player.onError((error) => setStatus(`エラー: ${error.message}`, true));

wireTransport();
wirePlayAlong();
wireSync();
wireRecording();

async function init(): Promise<void> {
  try {
    const manifest = await fetchManifest();
    renderSongList(manifest.items);
    const first = manifest.items[0];
    if (first) {
      const firstButton = songList.querySelector<HTMLButtonElement>('.song-button');
      if (firstButton) void selectSong(first, firstButton);
    } else {
      setStatus('ソロ一覧が空です。');
    }
  } catch (error) {
    setStatus(`マニフェスト取得失敗: ${(error as Error).message}`, true);
    renderSongList([]);
  }
}

void init();
