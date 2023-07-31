/*
  https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/typescript
*/

export function expressionsMatter(a: number, b: number, c: number): number {
  let combination: number[] = [
    a * (b + c),
    a * b * c,
    a + b * c,
    (a + b) * c,
    a + b + c,
  ]
  return Math.max(...combination)
}