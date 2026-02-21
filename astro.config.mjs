// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

export default defineConfig({
  compressHTML: true,
  integrations: [svelte()],
});