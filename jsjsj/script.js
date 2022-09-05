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
 console.log(Object.keys(personalMovieDB).length);
//  console.log(personalMovieDB["actors"]["colors"]);
 for (let key in personalMovieDB) {
   if (typeof(personalMovieDB[key]) === 'object') {
      for (let i in personalMovieDB[key]) {
      console.log(`Asjhio ${i} asfjhasf ${personalMovieDB[key][i]}`);
    }
  }
    console.log(`Asjhio ${key} asfjhasf ${personalMovieDB[key]}`);
}
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

let a = 5,
    b = a;
    b = b + 5;
    console.log(b);

const obj = {
    a: 5,
    b: 1
};
// const copy = obj;
// copy.a = 10;
// console.log(copy);
// console.log(obj);
function copy(mainObj) {
  let objCopy = {};

  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }

  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4
  }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;
console.log(newNumbers);
console.log(numbers);

const add = {
  d: 17,
  e: 20
};

const clone = Object.assign({}, add);
clone.d = 16;

console.log(Object.assign(numbers, add));
console.log(add);
console.log(clone);


const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'afssaf';

console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'asdfas', 'asda'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
const numAr = [2, 5, 7];
log(...numAr);

const q = {
  one: 1,
  two: 2
};
const newQ = {...q};
console.log(newQ);





// const personalPlanPeter = {
//   name: "Peter",
//   age: "29",
//   skills: {
//       languages: ['ru', 'eng'],
//       programmingLangs: {
//           js: '20%',
//           php: '10%'
//       },
//       exp: '1 month'
//   }
// };

// function showExperience(plan) {
  
//   const {exp} = pla.skills;
//   console.log(exp);
// }
// console.log(showExperience(personalPlanPeter));

// console.log(Object.keys(personalMovieDB).length);
//  console.log(personalMovieDB["actors"]["colors"]);
 for (let key in personalMovieDB) {
   if (typeof(personalMovieDB[key]) === 'object') {
      for (let i in personalMovieDB[key]) {
      console.log(`Asjhio ${i} asfjhasf ${personalMovieDB[key][i]}`);
    }
  }
    console.log(`Asjhio ${key} asfjhasf ${personalMovieDB[key]}`);
}
personalMovieDB.genres.push('asd');
console.log(personalMovieDB.genres);

const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
      languages: ['ru', 'eng'],
      programmingLangs: {
          js: '20%',
          php: '10%'
      },
      exp: '1 month'
  },
  showAgeAndLangs: function(plan) {
    const {languages} = plan.skills;
    const {age} = plan;
    let str = `Мне ${age} и я владею языками: `;

    languages.forEach(function(lang) {
      str += `${lang.toUpperCase()} `;
    });

    return str;
  }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showProgrammingLangs(plan) {
  let str = '';
  const {programmingLangs} = plan.skills;
  for (let key in programmingLangs) {
    str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
  }
  return str;
}
console.log(showProgrammingLangs(personalPlanPeter));


const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
  let str = '';

  if (arr.length === 0) {
    str = 'Семья пуста';
  }else {
    str = 'Семья состоит из: ';
  }

  arr.forEach(function(name) {
    str += `${name} `;
  });
  return str;
}

console.log(showFamily(family));


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
favoriteCities.reverse();
function standardizeStrings(arr) {
    arr.forEach(function(city) {
      console.log(`${city.toLowerCase()}`);
    });
}
standardizeStrings(favoriteCities);


const someString = 'This is some strange string';

function reverse(str) {
  if (typeof(str) !== 'string') {
    return 'Ошибка!';
  }
  return str.split('').reverse().join('');
}
console.log(reverse(someString));



const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
  let str = '';
  arr.lenght === 0 ? str = 'Нет доступных валют' : str = "Достпуные валюты:\n";


  let str = '';
  arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

  arr.forEach(function(curr, i) {
      if (curr !== missingCurr) {
          str += `${curr}\n`;
      }
  });


  arr.forEach(function(curr) {
    if (curr !== missingCurr) {
        str += `${curr}\n`;
    }
  });

  return str;
}
console.log(availableCurr([...baseCurrencies, ...additionalCurrencies]));