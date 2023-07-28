/*
  https://www.codewars.com/kata/51e04f6b544cf3f6550000c1/train/javascript
*/

var beeramid = function(bonus, price) {

  let i = 1,
    sum = 0;
  while (sum <= (bonus - (bonus % price)) / price) {
    sum += i ** 2;
    i++;
  }
  return i - 2;
};