import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
// PAGES_SITE / PAGES_BASE are injected by the GitHub Pages workflow so the
// preview build resolves asset paths under /<repo>/. Local and production
// builds fall back to the real domain at the site root.
export default defineConfig({
  site: process.env.PAGES_SITE || 'https://www.manninghamgp.com.au',
  base: process.env.PAGES_BASE || '/',
  integrations: [icon()],
});
