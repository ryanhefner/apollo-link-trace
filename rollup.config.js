import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json' assert { type: 'json' }

const config = {
  input: 'src/index.js',
  output: {
    name: pkg.name,
    file: './index.cjs',
    format: 'umd',
    exports: 'named',
    globals: {
      '@apollo/client': 'ApolloClient',
    },
    banner: `/*! ${pkg.name} !*/`,
    footer: `/* Copyright ${new Date().getFullYear()} - ${pkg.author} */`,
  },
  external: ['@apollo/client'],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
    }),
    resolve(),
    commonjs({
      include: /node_modules/,
    }),
    json(),
  ],
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(terser())
}

export default config
