let firstname = "Adeleke"; console.log(typeof firstname);
let lastname = "Hassan"; console.log(typeof lastname);
let country = "Nigeria";  console.log(typeof country);
let city = "Ilorin";  console.log(typeof city);
let age = 50;  console.log(typeof age);
let isMarried = true;  console.log(typeof isMarried);
let year = 2022;  console.log(typeof year);

console.log(typeof '10' == typeof 10);

console.log(parseInt('9.8') == 10);

let num1 = console.log(5 > 1);
let num2 = console.log(6 > 3);
let num3 = console.log(6 > 4);

let fig1 = console.log(1 > 7);
let fig2 = console.log(5 < 2);
let fig3 = console.log(8 < 3);

4 > 3 == true
4 >= 3 == true
4 < 3 == false
4 <= 3 == false
4 == 4 == true
4 === 4 == true
4 != 4 == false
4 !== 4 == false
4 != '4' == true
4 == '4' == true
4 === '4' == false

let python = "python".length;
let jargon = "jargon".length;
console.log(python != jargon)

4 > 3 && 10 < 12 == true
4 > 3 && 10 > 12 == false
4 > 3 || 10 < 12 == true
4 > 3 || 10 > 12 == false
!(4 > 3) == false
!(4 < 3) == true
!(false) == true
!(4 > 3 && 10 < 12) ==false
!(4 > 3 && 10 > 12) == true
!(4 === '4') == true 

let he = "python";
let she = "dragon";
//There is no 'on' in both dragon and python == false

//et theyear = "What is the year today?";
let  month = "What is the month today as a number?"
//let date = "What is the date today?"
let  today = "What is the day today as a number?"
let  hours = "What is the hours now?"
let minutes = "What is the minutes now?"
//Find out the numbers of seconds elapsed from January 1, 1970 to now.t

const date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getTime());