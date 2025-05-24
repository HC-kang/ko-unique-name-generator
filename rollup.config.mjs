import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

/** @type {import('rollup').RollupOptions[]} */
export default [
  // 1. 모든 것을 ESM으로 빌드 (데이터 + 메인)
  {
    input: {
      index: 'src/index.ts',
      adjectives: 'src/adjectives.ts',
      animals: 'src/animals.ts'
    },
    output: {
      dir: 'dist',
      format: 'es',
      entryFileNames: (chunkInfo) => {
        return chunkInfo.name === 'index' ? 'index.mjs' : '[name].js';
      },
      sourcemap: false,
    },
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationDir: null
      })
    ]
  },

  // 2. 모든 것을 CJS로 빌드 (데이터 + 메인)
  {
    input: {
      index: 'src/index.ts',
      adjectives: 'src/adjectives.ts',
      animals: 'src/animals.ts'
    },
    output: {
      dir: 'dist',
      format: 'cjs',
      entryFileNames: '[name].cjs',
      sourcemap: false,
      exports: 'named'
    },
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationDir: null
      })
    ]
  },

  // 3. 타입 정의 생성
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es',
    },
    plugins: [dts()],
  }
];
