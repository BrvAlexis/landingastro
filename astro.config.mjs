// @ts-check
import { defineConfig, envField } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import sentry from '@sentry/astro';
import spotlightjs from '@spotlightjs/astro';
import shield from '@kindspells/astro-shield';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  env: {
    schema: {
      // Variables publiques (client + serveur)
      PUBLIC_SITE_URL: envField.string({ context: "client", access: "public" }),
      PUBLIC_SITE_TITLE: envField.string({ context: "client", access: "public" }),
      PUBLIC_SITE_DESCRIPTION: envField.string({ context: "client", access: "public" }),
      PUBLIC_CONTACT_EMAIL: envField.string({ context: "client", access: "public" }),
      PUBLIC_CONTACT_PHONE: envField.string({ context: "client", access: "public" }),
      PUBLIC_CONTACT_ADDRESS: envField.string({ context: "client", access: "public" }),
      PUBLIC_GA_ID: envField.string({
        context: "client",
        access: "public",
        optional: true
      }),
      PUBLIC_SENTRY_DSN: envField.string({
        context: "client",
        access: "public",
        optional: true
      }),

      // Variables secrètes (serveur uniquement)
      API_SECRET_KEY: envField.string({
        context: "server",
        access: "secret"
      }),
      DATABASE_URL: envField.string({
        context: "server",
        access: "secret",
        optional: true
      })
    },
    validateSecrets: true // Valide les secrets au démarrage
  },

  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sentry(),
    spotlightjs(),
    shield({ sri: { enableStatic: true } }),
  ],

  adapter: netlify(),
});