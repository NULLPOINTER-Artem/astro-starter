import { defineConfig } from 'astro/config';
import serviceWorker from "astrojs-service-worker";
import sitemap from '@astrojs/sitemap';
import Critters from "astro-critters";
import Rome from "astro-rome";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  srcDir: './src',
  publicDir: './public',
  outDir: './dist', // e.x. ./docs for github-pages
  // site: '', //! set your deployment site url
  compressHTML: import.meta.env.MODE === 'production' ? true : false,
  prefetch: true,
  integrations: [
    import.meta.env.MODE === 'production' ? serviceWorker() : null, // for cache assets
    icon({
      iconDir: 'src/assets/images/icons',
    }),
    sitemap(),
    Critters(),
    Rome({ Logger: 1 }), // linter
  ]
});
