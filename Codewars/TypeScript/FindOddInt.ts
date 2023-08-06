/*
  https://www.codewars.com/kata/54da5a58ea159efa38000836/train/typescript
*/

export function findOdd(A: number[]): number | undefined {
  let count: number
  const arr: number[] = A.slice().sort((a, b) => a - b)

  for (let i = 0; i < arr.length; i++) {
    count = 0
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++
      }
    }
    if (count % 2 !== 0) {
      return arr[i]
    }
  }

  return undefined
}