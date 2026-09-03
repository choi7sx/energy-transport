import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import editableRegions from "@cloudcannon/editable-regions/astro-integration";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

const site = process.env.SITE_URL ?? "https://tiny-jackal.cloudvent.net/";

export default defineConfig({
  site,
  integrations: [react(), editableRegions(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
