/**
 * Extracts the 11-character video id from the common YouTube URL shapes
 * (`watch?v=`, `youtu.be/`, `/embed/`, `/shorts/`) or accepts a bare id. Returns
 * `null` when nothing usable is found. Pure + testable.
 */
export function parseYouTubeId(input: string): string | null {
  const text = input.trim();
  if (/^[\w-]{11}$/.test(text)) return text;
  let url: URL;
  try {
    url = new URL(text);
  } catch {
    return null;
  }
  const host = url.hostname.replace(/^www\./, '');
  if (host === 'youtu.be') {
    return cleanId(url.pathname.slice(1));
  }
  if (host === 'youtube.com' || host === 'm.youtube.com' || host === 'music.youtube.com') {
    const v = url.searchParams.get('v');
    if (v) return cleanId(v);
    const match = url.pathname.match(/\/(?:embed|shorts|v)\/([\w-]+)/);
    if (match?.[1]) return cleanId(match[1]);
  }
  return null;
}

function cleanId(raw: string): string | null {
  const id = raw.split(/[?&/]/)[0] ?? '';
  return /^[\w-]{11}$/.test(id) ? id : null;
}

/** The slice of the YouTube IFrame player API this app uses. */
interface YTPlayer {
  playVideo(): void;
  pauseVideo(): void;
  seekTo(seconds: number, allowSeekAhead: boolean): void;
  loadVideoById(id: string): void;
  destroy(): void;
}

interface YTNamespace {
  Player: new (
    el: HTMLElement,
    config: {
      videoId?: string;
      events?: { onReady?: () => void };
      playerVars?: Record<string, number>;
    },
  ) => YTPlayer;
}

declare global {
  interface Window {
    YT?: YTNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let apiPromise: Promise<YTNamespace> | null = null;

/** Loads the YouTube IFrame API script once and resolves with the `YT` namespace. */
function loadApi(): Promise<YTNamespace> {
  if (apiPromise) return apiPromise;
  apiPromise = new Promise<YTNamespace>((resolve) => {
    if (window.YT?.Player) {
      resolve(window.YT);
      return;
    }
    window.onYouTubeIframeAPIReady = () => {
      if (window.YT) resolve(window.YT);
    };
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.head.append(script);
  });
  return apiPromise;
}

/**
 * Wraps a YouTube IFrame player for play-along: the drum transport drives its
 * play/pause/seek. Audio cannot be captured for recording (browser sandbox +
 * DRM), so this is strictly for playing along by ear.
 */
export class YouTubePlayer {
  private player: YTPlayer | null = null;
  private ready = false;
  private pendingId: string | null = null;
  private readonly container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  /** Loads (or swaps to) a video by id, creating the player on first use. */
  async load(id: string): Promise<void> {
    if (this.player) {
      if (this.ready) this.player.loadVideoById(id);
      else this.pendingId = id;
      return;
    }
    const YT = await loadApi();
    const host = document.createElement('div');
    this.container.replaceChildren(host);
    this.player = new YT.Player(host, {
      videoId: id,
      playerVars: { playsinline: 1 },
      events: {
        onReady: () => {
          this.ready = true;
          if (this.pendingId) {
            this.player?.loadVideoById(this.pendingId);
            this.pendingId = null;
          }
        },
      },
    });
  }

  play(): void {
    if (this.ready) this.player?.playVideo();
  }

  pause(): void {
    if (this.ready) this.player?.pauseVideo();
  }

  /** Seeks to an absolute position in seconds. */
  seek(seconds: number): void {
    if (this.ready && Number.isFinite(seconds)) {
      this.player?.seekTo(Math.max(0, seconds), true);
    }
  }

  clear(): void {
    this.player?.destroy();
    this.player = null;
    this.ready = false;
    this.pendingId = null;
    this.container.replaceChildren();
  }
}
