// // // // console.log("hello world!");

// // // // let lastName = 'Xzy';


// // // // let firstname = new String('Abc');

// // // // let message =
// // // //     `The is ${lastName}
// // // //      my first 
// // // //      message`;
// // // // console.log(message);


// // // // let words = message.split(' ').join(' ');
// // // // console.log(words);


// // // // let date = new Date();

// // // // let date2 = new Date();
// // // // console.log(date);


// // // let arr = [10, 12, 13, 14, 15, 16, 17, 18];

// // // arr.sort();
// // // console.log(arr);

// // // arr.reverse();
// // // console.log(arr);


// // let number = [1, 2, -1, -4];

// // let filtered = number.filter(function(value) { return value >= 1; });
// // console.log(filtered);


// let number = [5, 6, 7, 8];

// let items = number.map(function(value) {
//     return 'student ' + value;
// })

// console.log(items);


// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren);


// const d = new Date();
// console.log(d.getMinutes());

// let text = "";
// let i = 0;
// while (i < 10) {
//     text += " <br> the number so " + i;
//     i++;
// }
// console.log(text);


// const numbers = [1, 2, 3, 4, 5];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// // Create an Object
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50
// };

// // Destructuring
// let { firstName, lastName } = person;
// // Display Primitive Values
// console.log(

//     firstName + " " + lastName
// );



// run();
// let stand = function run() {
//     console.log("i'm running");
// }
// stand();

// // Anonymous function assignment function
// let run = function() {
//     console.log("object created");
// }

// run();


// console.log("1st one passed");

// function arr() {
//     console.log("object created");
// }

// setTimeout(arr, 2000);
// console.log("2nd one passed");

// let age = 9;
// if (age >= 18) {
//     if (age >= 18) {
//         console.log("senior");
//     } else {
//         console.log("middle");
//     }
// } else {
//     console.log("child");
// }


// function sum(a, b) {
//     let total = 0;
//     for (let value of arguments)
//         total = total + value;
//     return total;
// }
// let ans = sum(1, 2, 3);
// console.log(ans);



// function sum(num, ...arg) {
//     console.log(args);
// }
// sum(1, 2, 3);


// const person = {
//     fname: 'John',
//     lname: 'Doe',
//     age: 30,
//     get ag() {
//         return this.age;
//     }
// }

// console.log(person.age);




// let person = {
//     fname: 'Anurag',
//     lname: 'Gupta',
//     get fullName() {
//         return `${person.fname} ${person.lname}`;
//     },
//     set fullName(value) {
//         let parts = value.split('');
//         this.fname = parts[0];
//         this.lname = parts[1];
//     }
// };

// try {
//     person.fullName = true;
// } catch (e) {
//     alert(e.message);
// }
// console.log(person.fullName);


// for (var i = 0; i < 10; i++) {}
// console.log(i);


// let arr = [1, 2, 3, 4];

// let total = 0;

// for (let value in arr)
//     total = total + value;
// console.log(total);

// let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(totalSum);

// function arr() {

// }


// let fruits = ["apple", "banana"];
// fruits.push("orange"); // ["apple", "banana", "orange"]
// fruits.pop(); // ["apple", "banana"]

// let colors = ["r", "g", "b"];
// i = 1;
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// colors.forEach(function(color) {
//     console.log(color);
// });


// colors.forEach(function(color) {
//     console.log(color);
// });

// let upperColors = colors.map(function(color) {
//     return color.toUpperCase();
// });
// console.log(upperColors);


// i = 1;
// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }


// while (i <= 5);
// i++; {
//     console.log(i)
// }


// do {
//     i++;
//     console.log(i);
// } while (i <= 5);


// let arguments = "javascript";
// for (let i of arguments) {
//     console.log(" this is js:-  ", i)
// }


// let a = "anurag";
// for (let i of a) {
//     console.log(i);    
// }

// let std = {
//     name: "nha",
//     age: 12
// }

// for (let i in std) {
//     console.log(std.name)
// }


// for (let num = 5; num <= 10; num++) {
//     if (num % 2 == 0) {
//         console.log("even")
//     } else {
//         console.log("odd")
//     }
// }
