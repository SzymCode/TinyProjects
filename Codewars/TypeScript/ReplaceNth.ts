/*
  https://www.codewars.com/kata/57fcaed83206fb15fd00027a/train/typescript
*/

export const replaceNth = (text: string, n: number, oldValue: string, newValue: string): string => {
  if (n <= 0) return text

  const chars: string[] = text.split('')

  let count: number = 1
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === oldValue) {
      if (count % n === 0) chars[i] = newValue
      count++
    }
  }

  return chars.join('')
}