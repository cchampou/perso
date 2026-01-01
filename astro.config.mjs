import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://clement.champouillon.com",
  outDir: "docs",
  build: {
    assets: "assets",
  },
  integrations: [
    sitemap({
      lastmod: new Date(),
    })
  ],
  image: {
    responsiveStyles: true,
    layout: "full-width",
    objectFit: "cover",
    objectPosition: "center",
  }
});
