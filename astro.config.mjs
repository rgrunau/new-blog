import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://robertgrunau.website",
  integrations: [mdx(), solidJs(), sitemap()],
  output: "server",
  adapter: vercel()
});