/*
  https://www.codewars.com/kata/529b418d533b76924600085d/train/javascript
*/

function toUnderscore(string) {
  let str = string.toString()
  if (str.length === 1) return str
  return str
    .split("")
    .map((e) => {
      if (e.toLowerCase() === e.toUpperCase()) return e;
      else if (e === e.toUpperCase()) return "_" + e.toLowerCase();
      else return e;
    })
    .join("")
    .slice(1);
}