/** Whether a picked file should play through an `<audio>` or `<video>` element. */
export type MediaKind = 'audio' | 'video';

const VIDEO_EXTENSIONS = ['mp4', 'webm', 'ogv', 'mov', 'm4v', 'mkv'];

/**
 * Decides which element type to use for a local media file. Prefers the MIME
 * type when the browser provides one, falling back to the file extension. Pure
 * + testable — the DOM wiring lives in {@link LocalMedia}.
 */
export function mediaKind(name: string, mimeType = ''): MediaKind {
  if (mimeType.startsWith('video/')) return 'video';
  if (mimeType.startsWith('audio/')) return 'audio';
  const ext = name.split('.').pop()?.toLowerCase() ?? '';
  return VIDEO_EXTENSIONS.includes(ext) ? 'video' : 'audio';
}

/**
 * Controls a single local media file (a backing track or play-along video) that
 * the user plays alongside the drum synth. The drum transport is the master
 * clock; this element follows its play/pause/seek. Audio is also decoded by the
 * recorder for offline mixing, so {@link file} is kept for that purpose.
 */
export class LocalMedia {
  private element: HTMLMediaElement | null = null;
  private objectUrl: string | null = null;
  private currentFile: File | null = null;
  private readonly container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  /** The currently loaded file, or `null`. The recorder decodes this for mixing. */
  get file(): File | null {
    return this.currentFile;
  }

  get kind(): MediaKind | null {
    return this.currentFile ? mediaKind(this.currentFile.name, this.currentFile.type) : null;
  }

  /** Loads a file into a fresh `<audio>`/`<video>` element, replacing any prior one. */
  load(file: File): void {
    this.clear();
    this.currentFile = file;
    this.objectUrl = URL.createObjectURL(file);
    const kind = mediaKind(file.name, file.type);
    const element = document.createElement(kind);
    element.src = this.objectUrl;
    element.controls = true;
    element.preload = 'auto';
    element.className = 'media-element';
    this.element = element;
    this.container.replaceChildren(element);
  }

  /** Removes the element and releases the object URL. */
  clear(): void {
    if (this.element) {
      this.element.pause();
      this.element.removeAttribute('src');
      this.element.load();
    }
    if (this.objectUrl) {
      URL.revokeObjectURL(this.objectUrl);
      this.objectUrl = null;
    }
    this.element = null;
    this.currentFile = null;
    this.container.replaceChildren();
  }

  /** Starts playback. Returns a promise that may reject if autoplay is blocked. */
  async play(): Promise<void> {
    if (this.element) await this.element.play();
  }

  pause(): void {
    this.element?.pause();
  }

  /** Seeks the media element to an absolute position in seconds. */
  seek(seconds: number): void {
    if (this.element && Number.isFinite(seconds)) {
      this.element.currentTime = Math.max(0, seconds);
    }
  }

  /** Matches the drum tempo factor so a backing track stays roughly aligned. */
  setRate(rate: number): void {
    if (this.element && Number.isFinite(rate) && rate > 0) {
      this.element.playbackRate = rate;
    }
  }
}
