/*
  https://www.codewars.com/kata/5aba780a6a176b029800041c/train/typescript
*/

export function maxMultiple(divisor: number, bound: number): number {
  return bound - (bound % divisor)
}