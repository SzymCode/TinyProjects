/*
  https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
*/

function count(str) {
  var a = str.split("");
  var obj = {};
  a.forEach(function(s){
    var count = 0;
    for(var j = 0; j < a.length; j++){
      if(s==a[j]){
        count += 1;
      }
      obj[s] = count;
    }
  });
  return obj;
}