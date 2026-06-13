import * as alphaTab from '@coderline/alphatab';

/** Minimal description of a score track, surfaced to the mixer UI. */
export interface TrackInfo {
  index: number;
  name: string;
}

/**
 * Thin wrapper around {@link alphaTab.AlphaTabApi} that exposes only what the
 * UI needs: load alphaTex, transport (play/stop), tempo, loop, and per-track
 * mixing. Keeping alphaTab behind this class keeps `main.ts` framework-free and
 * makes the surface easy to reason about.
 */
export class DrumPlayer {
  private readonly api: alphaTab.AlphaTabApi;

  constructor(element: HTMLElement, scrollElement: HTMLElement) {
    const base = import.meta.env.BASE_URL;
    this.api = new alphaTab.AlphaTabApi(element, {
      core: {
        tex: true,
        fontDirectory: `${base}font/`,
      },
      player: {
        enablePlayer: true,
        enableCursor: true,
        enableUserInteraction: true,
        soundFont: `${base}soundfont/sonivox.sf2`,
        scrollElement,
      },
    });
  }

  /** Fires once the synthesizer + soundfont are ready for playback. */
  onPlayerReady(callback: () => void): void {
    this.api.playerReady.on(callback);
  }

  /** Fires whenever a new score is parsed; provides the track list. */
  onScoreLoaded(callback: (tracks: TrackInfo[]) => void): void {
    this.api.scoreLoaded.on((score) => {
      callback(score.tracks.map((track) => ({ index: track.index, name: track.name })));
    });
  }

  /** Surfaces alphaTex parse / load errors to the caller. */
  onError(callback: (error: Error) => void): void {
    this.api.error.on(callback);
  }

  loadTex(tex: string): void {
    this.api.tex(tex);
  }

  playPause(): void {
    this.api.playPause();
  }

  stop(): void {
    this.api.stop();
  }

  /** @param factor playback speed where 1 = original tempo. */
  setTempo(factor: number): void {
    this.api.playbackSpeed = factor;
  }

  setLooping(looping: boolean): void {
    this.api.isLooping = looping;
  }

  private trackAt(index: number): alphaTab.model.Track | undefined {
    return this.api.score?.tracks[index];
  }

  /** @param volume gain multiplier where 1 = the track's authored volume. */
  setTrackVolume(index: number, volume: number): void {
    const track = this.trackAt(index);
    if (track) this.api.changeTrackVolume([track], volume);
  }

  setTrackMute(index: number, mute: boolean): void {
    const track = this.trackAt(index);
    if (track) this.api.changeTrackMute([track], mute);
  }

  setTrackSolo(index: number, solo: boolean): void {
    const track = this.trackAt(index);
    if (track) this.api.changeTrackSolo([track], solo);
  }
}
