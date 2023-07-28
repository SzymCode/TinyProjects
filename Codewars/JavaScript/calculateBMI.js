/*
  https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript
*/

const bmi = (w, h, bmi = w/h/h) => bmi <= 18.5 ? "Underweight" : bmi <= 25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";