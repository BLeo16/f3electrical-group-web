// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` 
    : 'https://f3electrical-group-web.vercel.app',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});