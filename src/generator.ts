import type { KoreanNameOptions } from './types/KoreanNameOptions';

import { adjectives } from './adjectives.js';
import { animals } from './animals.js';

const getRandom = <T>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];

const generateNumber = (digits: number): string =>
  Math.floor(Math.random() * 10 ** digits)
    .toString()
    .padStart(digits, '0');

export const generateKoreanName = (options?: KoreanNameOptions): string => {
  const { digits = 4, delimiter = '-' } = options || {};

  if (digits < 0) throw new Error('digits should be greater than 0');

  const parts = [
    getRandom(adjectives),
    getRandom(animals),
    ...(digits > 0 ? [generateNumber(digits)] : []),
  ];

  return parts.join(delimiter);
};
