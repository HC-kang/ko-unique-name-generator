import { adjectives } from './adjectives';
import { animals } from './animals';

function getRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateKoreanName(): string {
  return `${getRandom(adjectives)}-${getRandom(animals)}-${Math.floor(
    Math.random() * 1000
  )
    .toString()
    .padStart(3, '0')}`;
}
