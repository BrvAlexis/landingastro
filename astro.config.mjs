// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import shield from '@kindspells/astro-shield';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://avocats-cugnaux.fr',
  env: {
    validateSecrets: false, // Valide les secrets au démarrage
  },

  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    shield({ sri: { enableStatic: true } }),
  ],

  adapter: netlify(),
});