/*
  https://www.codewars.com/kata/57fae964d80daa229d000126/train/typescript
*/

export function remove(s: string): string {
  return s[s.length - 1] === '!' ? s.slice(0, s.length - 1) : s
}