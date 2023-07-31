/*
  https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/typescript
*/

export function multiplicationTable(size: number): number[][] {
  let result: number[][] = []
  for (let i = 1; i <= size; i++) {
    let tempArr: number[] = []
    for (let j = 1; j <= size; j++) {
      tempArr.push(j * i)
    }
    result.push(tempArr)
  }
  return result
}