import type { UserConfig } from 'vite';
import css from 'unocss/vite';
import { join as pathJoin } from 'path';
import autoImport from 'unplugin-auto-import/vite';
import Inspect from 'vite-plugin-inspect';
import { sveltekit } from '@sveltejs/kit/vite';

export default {
  server: {
    port: 3333,
  },
  resolve: {
    alias: {
      '~/': `${pathJoin(__dirname, './src')}/`,
      $css: pathJoin(__dirname, './src/assets/style/index.ts'),
      $public: pathJoin(__dirname, './'),
    },
  },
  plugins: [
    sveltekit(),
    css(),
    autoImport({
      dts: 'src/auto-imports.d.ts',
      imports: [
        'svelte',
      ],
    }),
    Inspect(),
  ],
} as UserConfig;
