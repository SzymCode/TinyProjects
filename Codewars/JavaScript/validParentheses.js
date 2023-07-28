/*
  https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript
*/

function validParentheses(parens){
  if (parens.length%2!=0) return false;
  let str=parens.slice();
  for(let i=0;i<=str.length;i++){
  str=str.replace(/\(\)/g,'');
  }
  return str.replace(/\(\)/g,'')===''
}