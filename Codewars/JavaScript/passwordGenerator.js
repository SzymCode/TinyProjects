/*
  https://www.codewars.com/kata/58ade2233c9736b01d0000b3/train/javascript
*/

function passwordGen() {
  let password = '';
  while(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^\W_]{6,20}$/.test(password)) {
    password = gen();
  };
  return password;
}

function gen(){
  let length = ~~(Math.random()*(20)+6);
  let password = '';
  let low = 'qwertyuiopasdfghjklzxcvbnm';
  let upper = 'qwertyuiopasdfghjklzxcvbnm'.toUpperCase();
  let num = '0123456789';
  for (let i = 0; i < length; i++) {
    let get = (()=> ~~(Math.random() * 3))();
    if (get === 0) {
      password += low[~~(Math.random() * 26)];
    };
    if (get === 1) {
      password += upper[~~(Math.random() * 26)];
    };
    if (get === 2) {
      password += num[~~(Math.random() * 10)];
    };
  }
  return password;
}