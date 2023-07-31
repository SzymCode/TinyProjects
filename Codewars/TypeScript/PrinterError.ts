/*
  https://www.codewars.com/kata/56541980fa08ab47a0000040/train/typescript
*/

export function printerError(word: string): string {
  const regex = /[a-m]/g
  const proper_num_of_matches = ((word || '').match(regex) || []).length
  return `${word.length - proper_num_of_matches}/${word.length}`
}