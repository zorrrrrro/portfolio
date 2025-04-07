import { defineConfig } from 'astro/config';
import github from '@astrojs/github-pages';

export default defineConfig({
  base: '/portfolio/',
  output: 'static',
  integrations: [github()],
});
