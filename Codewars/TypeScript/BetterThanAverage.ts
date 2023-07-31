/*
  https://www.codewars.com/kata/5601409514fc93442500010b/train/typescript
*/

export function betterThanAverage(classPoints: number[], yourPoints: number): boolean {
  const avgScore = classPoints.reduce((acc, curr) => (acc += curr))
  return yourPoints > (yourPoints + avgScore) / (classPoints.length + 1)
}