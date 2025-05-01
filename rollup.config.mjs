import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import copy from 'rollup-plugin-copy';

/** @type {import('rollup').RollupOptions[]} */
export default [
  // 1. 코드 빌드 (CJS + ESM)
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.cjs',
        format: 'cjs',
        sourcemap: false,
      },
      {
        file: 'dist/index.mjs',
        format: 'es',
        sourcemap: false,
      }
    ],
    external: [
      './adjectives.js',
      './animals.js'
    ],
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationDir: null
      }),
      copy({
        targets: [
          { src: 'src/adjectives.ts', dest: 'dist', rename: 'adjectives.js' },
          { src: 'src/animals.ts', dest: 'dist', rename: 'animals.js' },
        ],
        verbose: true,
        hook: 'writeBundle'
      })
    ]
  },

  // 2. 타입 정의 병합
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es',
    },
    plugins: [dts()],
  }
];
