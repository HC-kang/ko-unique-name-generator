import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

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
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationDir: null
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
