/* eslint-disable @typescript-eslint/no-unused-vars */

import { defineConfig, devices } from '@playwright/test';

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	reporter: [['html', { outputFolder: 'my-report' }]],
	webServer: {
		command: 'pnpm run build && pnpm run preview',
		port: 4399
	},
	testDir: 'tests',
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] }
		},
		{
			name: 'firefox',
			use: { ...devices['Desktop Firefox'] }
		},
		{
			name: 'webkit',
			use: { ...devices['Desktop Safari'] }
		}
	]
};

export default config;
