" use strict ";

function showText(x) {
  console.log(x);
}
showText('Hello world');
showText(12451);

function calc(a, b) {
  return (a + b);
}
console.log(calc(2, 7));
console.log(calc(1010, 2));

function ret() {
  let num = 50;


  return num;
}
const anotherNum = ret();
console.log(anotherNum);


function doNothing() {}
console.log(doNothing() === undefined);

function sayHello(name) {
  return `Привет, ${name}!`;
}
console.log(sayHello('Ivan'));

function getMathResult(num, times) {
  if(typeof(times) !== 'number' || times <= 0){
    return num;
  }
  let str = '';
  for (let i = 1;i <= times; i++) {
    if (i === times) {
      str += '${num * i}';
    }else {
      str += '${num * i}---';
    }
  }
  return str;
}
console.log(getMathResult(16, 2));


console.log('num' / 12);


const fruits = 'FruiTS';

console.log(fruits.toUpperCase());
console.log(fruits.toLowerCase());
console.log(fruits);

const Karl = 'Ashd sakd bd';
console.log(Karl.indexOf('bd'));
console.log(Karl.slice(6, 11));

console.log('asd123' == '5');

const cifra = 625.77;
console.log(Math.round(cifra));


function calculateVolumeAndArea(num) {
  if(typeof(num) !== 'number' || num < 0 || !Number.isInteger(num)) {
    return 'При вычислении произошла ошибка';
  }else {
    return `Объем куба: ${num * num * num}, площадь всей поверхности: ${6 * (num * num)}`;
  }
}
console.log(calculateVolumeAndArea(10));


function getMathResult(num, times) {
  if(typeof(times) !== 'number' || times <= 0){
    return num;
  }
  let str = '';
  for (let i = 1;i <= times; i++) {
    if (i === times) {
      str += '${num * i}';
    }else {
      str += '${num * i}---';
    }
  }
  return str;
}
console.log(getMathResult(16, 2));

function getCoupeNumber(num) {
  if (num === 0 || num > 36) {
    return 'Таких мест в вагоне не существует';
  }else if (typeof(num) !== 'number' || num < 0 || !Number.isInteger(num)) {
    return 'Ошибка. Проверьте правильность введенного номера места';
  }

  for (let i = 4; i <= 36; i = i + 4) {
    if (num <= i) {
        return Math.ceil(i / 4);
    }   
}
}

console.log(getCoupeNumber(5));

function getTimeFromMinutes(minutesTotal) {
  if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
      return "Ошибка, проверьте данные";
      } 
      const hours = Math.floor(minutesTotal / 60);
      const minutes = minutesTotal % 60;
      let hoursStr = '';
      if (hours < 1) {
        hoursStr = 'часов';
      }
      if (hours === 1) {
        hoursStr = 'час';
      }
      if (hours > 1 && hours < 5) {
        hoursStr = 'часа';
      }
      if (hours >= 5) {
        hoursStr = 'часов';
      }
      return `Это ${hours} ${hoursStr} и ${minutes} минут`;
    }
console.log(getTimeFromMinutes(68));


function findMaxNumber(a, b ,c, d) {
  // Самое простое - это использовать Math.max :)
  // А оптимизировать такую проверку мы научимся совсем скоро
  if (typeof(a) !== 'number' ||
      typeof(b) !== 'number' ||
      typeof(c) !== 'number' ||
      typeof(d) !== 'number') {
      return 0;
      }else if (a > b && a > c && a > d) {
        return a;
      }
      else if (b > a && b > c && b > d) {
        return b;
      }
      else if (c > a && c > b && c > d) {
        return c;
      }
      else if (d > a && d > b && d > c) {
        return d;
      }
}
console.log(findMaxNumber(1, 4, 12, 2));
console.log(findMaxNumber(1.2, 2.3, 1, 1.5));


const personalMovieDB = {
  count: 'numberOfFilms',
  movies: {},
  actors: {
    colors: 'red'
  },
  genres: [],
  privat: false
 };
//  console.log(Object.keys(personalMovieDB).length);
// //  console.log(personalMovieDB["actors"]["colors"]);
//  for (let key in personalMovieDB) {
//    if (typeof(personalMovieDB[key]) === 'object') {
//       for (let i in personalMovieDB[key]) {
//       console.log(`Asjhio ${i} asfjhasf ${personalMovieDB[key][i]}`);
//     }
//   }
//     console.log(`Asjhio ${key} asfjhasf ${personalMovieDB[key]}`);
// }
personalMovieDB.genres.push('asd');
console.log(personalMovieDB.genres);


const arr = [1, 2, 3, 4, 8, 12];

arr.forEach(function(item, i, arr) {
  console.log(`${i}: ${item} внутри массива ${arr}`);
});


// arr.pop();
// console.log(arr);
// arr.push(12);
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// for (let value of arr) {
//   console.log(value);
// }