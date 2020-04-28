'use stict';

// var number = 5;         // Число
// var string = 'Hello';   // Строка
// var sym = Symbol();     // Символ
// var boolean = true;     // Логический тип
// null                    // Не существует
// undefined               // Существует, но не присвоен
// var obj = {};           // Объект

// console.log(4/0);
// console.log('string'*9);

// let something;
// console.log(something);

// let persone = {
//     name: 'john',
//     age: 25,
//     isMarried: false
// };

// console.log(persone.name);
// console.log(persone['name']);

// let arr = ['plum.png','orange.jpg','apple.bmp'];

// console.log(arr[2]);

// let arrr = {
//     testing:[],
//     testing2:{},
// };

// arrr.testing = prompt('testing massive');
// arrr.testing2 = prompt('testing object')
// alert(arrr.testing*2);
// alert(arrr.testing2*4);

// let answer = confirm('Есть ли вам 18?');
// if (answer === true){
//     alert('Можете проходить');
// } else {
//     alert('Возвращайтесь, когда вам будет 18!');
// }
// console.log(answer);

// let answer = +prompt('Есть ли вам 18?','Да, или Нет');
// console.log(typeof(answer));

// let answer = prompt('Есть ли вам 18?','Да, или Нет');
// console.log(typeof(answer));

// console.log('Привет,' + ' Мир!'); // Конкатенация
// console.log(4 + ' Мир!'); // Конкатенация

// let incr = 10,
//     decr = 10;

//     incr++;       // Инкремент
//     decr--;       // Декремент

// console.log(incr);
// console.log(decr);

// console.log(++incr); // префиксная форма возвращает новое значение
// console.log(--decr);

// console.log(incr++);    // постфиксная форма возвращает старое значение
// console.log(decr--);

// let nya = 'cute'; // = присваивание // == равенство // === строгая проверка по типам данных

// console.log(9%4);
// console.log('2' == 2);
// console.log('2' === 2);

// let isCheked = true,
//     isClose = true;

// console.log(isCheked && isClose); // Оператор "и"

// let isCheked = false,                // Оператор "или"
//     isClose = false;

// console.log(isCheked || isClose);

// let isCheked = false,                // Оператор восклицания
//     isClose = false;

// console.log(isCheked || !isClose);

// if (2*4 == 8) {                 // if преобразует значение в логический тип данных
//     console.log('Верно!');
// } else {
//     console.log('Неверно');
// }

// let num = 50;                   // num меньше 49
// if (num < 49) {                 
//     console.log('Неверно!');
// } else if (num > 100) {
//     console.log('Много!');
// } else {
//     console.log('Верно!');
// }

// let num = 50;

// (num == 51) ? console.log('Верно!') : console.log('Неверно!');

// let num = 50;

// switch (num) {
//     case num < 49:
//         console.log('Неверно!');
//         break;
//     case num > 100:
//         console.log('Много');
//         break;
//     case num > 80:
//         console.log('Все еще много!');
//         break;
//     case 50:
//         console.log('Верно!');
//         break;
//     default:
//         console.log('Что-то пошло не так!');
//         break;
// }

// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// let num = 50;

// do {                    // сделай что-то и проверь
//     console.log(num);
//     num++;
// } while (num < 55);

// for (let i = 1; i < 8; i++){  // с чего начинается; на чем должно остановиться; что будет происходить
//     console.log(i);
// }

// for (let i = 1; i < 8; i++){
//     if (i == 6) {
//         break;
//     }
//     console.log(i);
// }

// for (let i = 1; i < 8; i++){
//     if (i == 6) {
//         continue;
//     }
//     console.log(i);
// }

// function showFirstMessage(text) {
//     alert(text);
// }

// showFirstMessage('Hello, World!');

// let num = 20;

// function showFirstMessage(text) {
//   //  num = 10;                       
//     console.log(text);
//     let num = 10;                 // локальная переменная
//     console.log(num);
// }

// showFirstMessage('Hello, World!');
// console.log(num);

// let calc = function(a,b) {
//     return (a + b);
// }

// function calc(a,b) {
//     return (a + b);
// }

// let calc = (a,b) => a+b; // стрлочная функция

// console.log(calc(3,4));
// console.log(calc(8,4));

// function retVar() {
//     let num = 50;
//     return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);

// let str = 'test';
// console.log(str.length); // длина строки
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let twelve = '12.2';
// console.log(Math.round(twelve));

// let twelve = '12.2px';
// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));

