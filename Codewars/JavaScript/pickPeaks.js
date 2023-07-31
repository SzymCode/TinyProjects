/*
  https://www.codewars.com/kata/5279f6fe5ab7f447890006a7/train/javascript
*/

function pickPeaks(arr) {
  let result = { pos: [], peaks: [] };
  let pos = -1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      pos = i;
    } else if (arr[i] < arr[i - 1] && pos !== -1) {
      result.pos.push(pos);
      result.peaks.push(arr[pos]);
      pos = -1;
    };
  };

  return result;
}