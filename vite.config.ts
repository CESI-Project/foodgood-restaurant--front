import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), svgr()],
	// @ts-ignore
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/setupTest.ts',
		coverage: {
			reporter: 'lcov',
		},
	},
});
