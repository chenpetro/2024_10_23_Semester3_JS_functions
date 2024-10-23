// const add = function(a, b, c) { 
//     return console.log(a + b + c);
//   };

//   add('today',' is a nice',' day')

//   const sumNum = function(a,b,c){
//     return console.log(a+b+c);
//   }
//   sumNum(10,20,30)
//   sumNum(330,240,550)
//   sumNum(370,240,550)

//   const hello1 = function(){
//     return console.log('Hello JavaScript');
//   }

//   hello1()

//   const count = function(countFrom = 0, countTo = 10, step = 1) {
//         console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`); 
//     for (let i = countFrom; i <= countTo; i += step) {      console.log(i);
//     }
//   }; 
//   count(1, 5); // countFrom = 1, countTo = 5, step = 1  count(2); // countFrom = 2, countTo = 10, step = 1
//   count(undefined, 5, 2); // countFrom = 0, countTo = 5, step = 2  count(); // countFrom = 0, countTo = 10, step = 1


// const sumNums = function(a,b,c){
//     const i = 10
//     const bc = 30
// }

// const manyNumbers = function(...arg){
//     let result = 0
//     for (let index = 0; index < arg.length; index++) {
//         result = result + arg[index];
        
//     }
//     return console.log(result);
   
// }

// manyNumbers(1,2,3,4)
// manyNumbers(10,22,43,434,4343,564)
// manyNumbers(123,98)


// console.log(a)
// const a = 22
// names(22)
// function names(params) {
//     return alert(params)
// }

// function hello2() {
//     let name = 'Vasyl'
//     console.log(`hello ${name}`);
    
// }

// hello2()

// const hello2 = function (names) {
//     console.log(`hello ${names}`);
    
// }

// hello2('Vasyl')


// 3. Напишіть функцію mul(n, m), яка приймає два аргументи і повертає добуток, суму і різницю цих аргументів. Перевірте її роботу.  
// 4. Напиши функцію myAverageScore , яка у якості аргументу отримує масив з оцінками, і виводить користувачу його середній результат у наступному форматі:
// Myaveragescore: A (якщо середня оцінка від 91 до 100)
// My average score: B (якщо середня оцінка від 81 до 90)
// My average score: C (якщо середня оцінка від 71 до 80)
// My average score: D (якщо середня оцінка від 70 і менше)
// Для перевірки:
// console.log(myAverageScore([100, 75, 81, 96]));
// console.log(myAverageScore([45, 63, 85, 70]));
// console.log(myAverageScore([77, 82, 60, 58]));
// console.log(myAverageScore([93, 99, 93, 96]));

// const mull = function (n, m) {
// let mul = n*m
// let sum = n+m
// let div = n/m
//  return console.log(mul,sum,div);        
// }    
// mull(5,2)

const myAverageScore = function(...arg) {
    let average = 0
    let sum = 0
    for (let index = 0; index < arg.length; index++) {
   sum = sum + arg[index];
}
average = sum/arg.length
// return console.log(average);
let message = 0
if (average >=91 && average<=100){
    message ='Myaveragescore: A'
}
else if (average >=81 && average<=90){
    message ='Myaveragescore: B'
}
else if (average >=71 && average<=80){
    message ='Myaveragescore: C'
}
else if (average <=70){
    message ='Myaveragescore: D'
}
return console.log(message);
}
myAverageScore (100, 75, 81, 96)
myAverageScore (45, 63, 85, 70)
myAverageScore (77, 82, 60, 58)
myAverageScore (93, 99, 93, 96)