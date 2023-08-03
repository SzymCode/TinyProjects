/*
  https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/typescript
*/

export function duplicateEncode(word: string): string {
  const chars: string[] = [...word.toLowerCase()]
  const duplicateList: string[] = chars.filter((char, index, chars) => chars.indexOf(char) !== index)
  const duplicateSet: Set<string> = new Set(duplicateList)
  const uniqueDuplicateList: string[] = [...duplicateSet]
  let resultString = ""
  for (let i = 0, n = chars.length; i < n; ++i) {
    if (uniqueDuplicateList.includes(chars[i])) {
      resultString += ")"
    } else {
      resultString += "("
    }
  }
  return resultString
}