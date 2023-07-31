/*
  https://www.codewars.com/kata/57a429e253ba3381850000fb/train/typescript
*/

export function bmi(weight: number, height: number): string {
  let bmi: number = weight / Math.pow(height, 2)
  return bmi <= 18.5
    ? "Underweight" : bmi <= 25.0
    ? "Normal" : bmi <= 30.0
    ? "Overweight" : "Obese"
}