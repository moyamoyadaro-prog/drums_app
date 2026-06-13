/// <reference types="vitest/config" />
import { alphaTab } from '@coderline/alphatab-vite';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// On GitHub Pages a project site is served from /<repo>/. Set GITHUB_PAGES=1 in CI.
const base = process.env.GITHUB_PAGES ? '/drums_app/' : '/';

export default defineConfig({
  base,
  plugins: [
    // Copies alphaTab fonts (Bravura) and the default SoundFont into the build.
    alphaTab(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      workbox: {
        // alphaTab's worker/worklet bundles are ~2.3 MB each; allow precaching.
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
      },
      manifest: {
        name: 'Drum Solo Studio',
        short_name: 'DrumSolo',
        description: 'AI生成のドラムソロを楽譜表示＋再生する検討補助アプリ',
        theme_color: '#111111',
        background_color: '#111111',
        display: 'standalone',
        orientation: 'any',
        icons: [
          { src: 'favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' },
        ],
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'node',
    include: ['tests/unit/**/*.{test,spec}.ts'],
  },
});
