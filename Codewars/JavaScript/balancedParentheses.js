/*
  https://www.codewars.com/kata/5426d7a2c2c7784365000783/train/javascript
*/

function balancedParens(n) {
  var all = [];

  function parens(left, right, str) {
    if (left === 0 && right === 0) {
      all.push(str);
    }

    if (left > 0) {
      parens(left - 1, right + 1, str + "(");
    }

    if (right > 0) {
      parens(left, right - 1, str + ")");
    }
  }

  parens(n, 0, "");
  return all;
}