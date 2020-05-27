import fs from 'fs';
import path from 'path';
import { terser } from 'rollup-plugin-terser';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import resolve from '@rollup/plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';

const production = !process.env.ROLLUP_WATCH;

const pagesDir = path.join(__dirname, 'src/pages');
const pages = fs.readdirSync(pagesDir).map((pageName) => {
  const pagePath = path.join(pagesDir, pageName);
  return { entryPath: pagePath, entryName: pageName };
});

export default pages.map(genConfig);

function genConfig({ entryPath, entryName }) {
  return {
    input: entryPath,
    output: {
      sourcemap: true,
      format: 'iife',
      name: 'app',
      file: `public/build/${entryName}.js`,
    },
    plugins: [
      alias({
        entries: [
          { find: 'components', replacement: path.join(__dirname, 'src/components') },
          { find: 'images', replacement: path.join(__dirname, 'src/images.js') },
        ],
      }),
      svelte({
        // enable run-time checks when not in production
        dev: !production,
        // we'll extract any component CSS out into
        // a separate file - better for performance
        css: (css) => {
          css.write(`public/build/${entryName}.css`);
        },
      }),

      // If you have external dependencies installed from
      // npm, you'll most likely need these plugins. In
      // some cases you'll need additional configuration -
      // consult the documentation for details:
      // https://github.com/rollup/plugins/tree/master/packages/commonjs
      resolve({
        browser: true,
        dedupe: ['svelte'],
      }),
      commonjs(),

      // In dev mode, call `npm run start` once
      // the bundle has been generated
      !production && serve(),

      // Watch the `public` directory and refresh the
      // browser on changes when not in production
      !production && livereload('public'),

      // If we're building for production (npm run build
      // instead of npm run dev), minify
      production && terser(),
    ],
    watch: {
      clearScreen: false,
    },
  };
}

function serve() {
  let started = false;

  return {
    writeBundle() {
      if (!started) {
        started = true;

        require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true,
        });
      }
    },
  };
}
