// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify"; // 👈 Agregado

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter:netlify(), // 👈 Necesario para usar SSR en Netlify
  vite: {
    plugins: [tailwindcss()],
  },
});
