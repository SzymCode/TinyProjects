/*
  https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript
*/

function cakes(recipe, available) {
  for (var key in recipe) {
    if (available.hasOwnProperty(key)) {
      continue;
    }
    else {
      return 0;
    };
  };

  var count = 0;
  var minimum = 999;
  for (key in recipe) {
    if (available.hasOwnProperty(key)) {
      var value = recipe[key];
      count = available[key] / value;
      count = Math.floor(count);
      if (count < minimum) {
        minimum = count;
      };
    };
  }
  return minimum;
}