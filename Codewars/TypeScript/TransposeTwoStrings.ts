/*
  https://www.codewars.com/kata/581f4ac139dc423f04000b99/train/typescript
*/

export function transposeTwoStrings(arr: string[]): string {
  const result: string[] = []
  const len: number = Math.max(arr[0].length, arr[1].length)

  for (let i = 0; i < len; i++) {
    const column: string = (arr[0][i] || " ") + " " + (arr[1][i] || " ")
    result.push(column)
  }

  return result.join("\n")
}