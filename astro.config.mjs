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
  site: 'https://www.avocats-diane.fr',
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

  output: 'server',
  adapter: netlify({
    imageCDN: true, // Activer l'optimisation des images via Netlify Image CDN
    cacheOnDemandPages: true, // Mettre en cache les pages générées à la demande
  }),

  image: {
    domains: ['avocats-diane.fr'], // Autorise le domaine pour les images
    remotePatterns: [{ protocol: "https" }], // Autorise les images HTTPS
  },

  // Configuration des redirections via Astro
  redirects: {
    "/services": {
      status: 302,
      destination: "/expertise"
    }
  }
});