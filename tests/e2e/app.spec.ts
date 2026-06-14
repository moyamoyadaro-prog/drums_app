import { expect, test } from '@playwright/test';

test('loads the sample solo, renders notation, and becomes playable', async ({ page }) => {
  await page.goto('/');

  // The sample solo appears in the song list.
  await expect(page.locator('.song-button').first()).toContainText('サンプル');

  // alphaTab renders the score as SVG into the viewport.
  await expect(page.locator('#at-main svg').first()).toBeVisible({ timeout: 30_000 });

  // Once the synthesizer + soundfont are ready, transport is enabled.
  await expect(page.locator('#play')).toBeEnabled({ timeout: 30_000 });
  await expect(page.locator('#status')).toContainText('準備完了', { timeout: 30_000 });

  // The per-instrument mixer shows the drum track.
  await expect(page.locator('.mixer-row')).toHaveCount(1);

  // Phase 2: play-along + recording controls are present, and recording is
  // enabled once the score is ready.
  await expect(page.locator('#media-file')).toBeVisible();
  await expect(page.locator('#yt-url')).toBeVisible();
  await expect(page.locator('#record')).toBeEnabled({ timeout: 30_000 });
});

test('exports a mixed recording as a downloadable WAV', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#record')).toBeEnabled({ timeout: 30_000 });

  const downloadPromise = page.waitForEvent('download', { timeout: 60_000 });
  await page.locator('#record').click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toMatch(/^drum-mix-.*\.wav$/);
  await expect(page.locator('#record-status')).toContainText('完了', { timeout: 60_000 });
});

test('rejects an unrecognized YouTube URL', async ({ page }) => {
  await page.goto('/');
  await page.locator('#yt-url').fill('https://example.com/not-a-video');
  await page.locator('#yt-load').click();
  await expect(page.locator('#status')).toContainText('YouTube');
});
