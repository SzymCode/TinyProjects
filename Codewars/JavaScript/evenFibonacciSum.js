/*
  https://www.codewars.com/kata/55688b4e725f41d1e9000065/train/javascript
*/

function fibonacci(max) {
    let fib = [0, 1]
    for (let i = 1; fib[i-1] + fib[i] < max; i++){
      fib.push(fib[i-1]+fib[i])
    }
    return fib.reduce((a, b)=> a + (b % 2 == 0 ? b: 0), 0)
}