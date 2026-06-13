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
});
