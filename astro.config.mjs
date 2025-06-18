// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify"; // 👈 Agregado

// https://astro.build/config
export default defineConfig({
  output: 'server',

  // 👈 Necesario para usar SSR en Netlify
  adapter:netlify(),

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});