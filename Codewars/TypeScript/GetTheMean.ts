/*
  https://www.codewars.com/kata/563e320cee5dddcf77000158/train/typescript
*/

export function getAverage(marks: number[]): number {
  let total: number = 0
  for (let index = 0; index < marks.length; index++) {
    total += marks[index]
  }
  return Math.floor(total / marks.length)
}