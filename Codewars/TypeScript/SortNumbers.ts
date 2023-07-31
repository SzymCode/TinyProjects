/*
 https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/typescript
*/

export function solution(nums: number[] | null): number[] {
  return nums !== null ? nums.sort((a, b) => a - b) : []
}