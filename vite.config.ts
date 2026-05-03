import { defineConfig } from 'vite';

export default defineConfig({
  // Base path — change to '/your-repo-name/' if deploying to GitHub Pages
  base: '/',

  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
