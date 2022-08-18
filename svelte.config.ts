import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import type { Config } from '@sveltejs/kit';

const config: Config = {
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
    methodOverride: {
      allowed: ['PATCH', 'DELETE'],
    },
  },
};

export default config;
