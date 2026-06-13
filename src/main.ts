import './style.css';
import { fetchAlphaTex, fetchManifest } from './dataSource';
import { DrumPlayer, type TrackInfo } from './player';
import type { ManifestItem } from './types';

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
const tempoOut = el<HTMLOutputElement>('tempo-out');
const loopInput = el<HTMLInputElement>('loop');
const mixerSection = el('mixer');
const mixerTracks = el('mixer-tracks');

const player = new DrumPlayer(el('at-main'), el('at-wrap'));

function setStatus(message: string, isError = false): void {
  statusEl.textContent = message;
  statusEl.classList.toggle('status--error', isError);
}

function setTransportEnabled(enabled: boolean): void {
  for (const control of [playBtn, stopBtn, tempoInput, loopInput]) {
    control.disabled = !enabled;
  }
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

async function selectSong(item: ManifestItem, button: HTMLButtonElement): Promise<void> {
  for (const active of songList.querySelectorAll('.is-active')) {
    active.classList.remove('is-active');
  }
  button.classList.add('is-active');
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
  tempoInput.addEventListener('input', () => {
    const percent = Number(tempoInput.value);
    tempoOut.textContent = `${percent}%`;
    player.setTempo(percent / 100);
  });
  loopInput.addEventListener('change', () => player.setLooping(loopInput.checked));
  loadTexBtn.addEventListener('click', () => {
    const tex = texInput.value.trim();
    if (tex) player.loadTex(tex);
  });
}

player.onScoreLoaded((tracks) => {
  renderMixer(tracks);
  setStatus('準備完了。再生できます。');
});
player.onPlayerReady(() => setTransportEnabled(true));
player.onError((error) => setStatus(`エラー: ${error.message}`, true));

wireTransport();

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
