import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
// import json from '@rollup/plugin-json'
import Icons from 'unplugin-icons/vite';
import commonjs from '@rollup/plugin-commonjs';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    // json({
    //   compact: true
    // }),
    Icons({
      compiler: 'svelte',
      autoInstall: true,
    }),
    commonjs()
  ]
});
