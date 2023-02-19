import { expect, test } from '@playwright/test';

test('test 1', async ({ page }) => {
	await page.goto('localhost:4399');
	await page.locator('section').allTextContents;
});

test('test 2', async ({ page }) => {
	await page.goto('/team');
	await page.locator('section').allTextContents;
});

test('test 3', async ({ page }) => {
	await page.goto('/about');
	await page.locator('section').allTextContents;
});
