function* fibonacci(count) {
  let a = 1;
  let b = 1;
  let i = 0;

  while (i < count) {
    yield a;
    const c = a + b;
    a = b;
    b = c;
    i++;
  }
}

const count = parseInt(prompt("How many Fibonacci numbers do you want to generate? "));
const iterator = fibonacci(count);
for (const num of iterator) {
  console.log(num);
}
