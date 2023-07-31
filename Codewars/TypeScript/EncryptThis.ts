/*
  https://www.codewars.com/kata/5848565e273af816fb000449/train/typescript
*/

export function encryptThis(str: string): string {
  if (str === "") return str
  if (str.length === 1) return str.charCodeAt(0).toString()

  let strArr: string[] = str.split(" ")
  let result: string[] = strArr.map((e) => {
    if (e.length === 1) {
      return e.charCodeAt(0).toString()
    } else if (e.length === 2) {
      return e.substring(0, 1).charCodeAt(0).toString() + e[1]
    } else {
      return e.substring(0, 1).charCodeAt(0).toString() + swap(e.slice(1))
    }
  })
  return result.join(" ")
}

export const swap = (str: string): string => {
  let result: string[] = str.split("");
  [result[0], result[str.length - 1]] = [result[str.length - 1], result[0]]
  return result.join("")
}