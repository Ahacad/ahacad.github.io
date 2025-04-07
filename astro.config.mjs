import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://ahacad.github.io',
  integrations: [
    mdx(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: 'static',
  // Add support for dynamic routes
  trailingSlash: 'never',
});
