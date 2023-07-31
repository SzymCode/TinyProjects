/*
  https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
*/

function findAverage(array) {
  if (array.length > 0) {
    let average = array.reduce((a, b) => a + b) / array.length;
    return average;
  } else {
    return 0;
  };
}