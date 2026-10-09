// @ts-check
import { defineConfig } from 'astro/config';

// User site (devinb98.github.io) → served at the root, so no `base`.
// https://astro.build/config
export default defineConfig({
  site: 'https://devinb98.github.io',
  trailingSlash: 'ignore',
});
