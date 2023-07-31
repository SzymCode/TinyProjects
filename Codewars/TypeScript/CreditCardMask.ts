/*
  https://www.codewars.com/kata/5412509bd436bd33920011bc/train/typescript
*/

export function maskify(creditCardNumber: string): string {
  if (creditCardNumber.length > 4) {
    let maskedResult = ''
    return creditCardNumber.split('').reduce((accumulator, currentCharacter, index) => {
      if (creditCardNumber.length - index > 4) {
        maskedResult += '#'
      } else {
        maskedResult += currentCharacter
      }
      return maskedResult
    }, '')
  } else {
    return creditCardNumber
  }
}