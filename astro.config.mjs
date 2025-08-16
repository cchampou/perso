import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://clement.champouillon.com",
  outDir: "docs",
  integrations: [
    sitemap({
      lastmod: new Date(),
    })
  ],
});
