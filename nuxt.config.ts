import { defineNuxtConfig } from 'nuxt3';
import {join} from "pathe";

export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        }
      }
    },
  },

  home: {
    hello: 'there',
  },

  modules: [
    '~/modules/blog/index.ts',
    '~/modules/home/index.ts',
  ],
});
