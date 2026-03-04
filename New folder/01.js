// const a1 = {
//     name: "John",
//     age: 30,
//     city: "New York"
// }
// a1["friends"] = "there";
// console.log(a1);

// const a2 = {
//     appricate: "John",
//     appreciate: "Jane",
//     appricate: "Bob"
// }
// console.log(a2['appreciate']);

// <<-------------------------------------------------------------->>>>>

// let a = 10;
// let b = 10;
// console.log(a == b);
// console.log(a != b);
// console.log(a === b);
// console.log(a !== b);

// let x = 5;
// let y = 10;
// console.log(x < y && x < y);
// console.log(x == y && x != y);

//<<-------------------------------------------------------------->>>>>
// contitional function

// let a = prompt("hey ");
// a = Number.parseInt(a);
// if (a < 0) {
//     alert("Please enter a number");
// } else if (a < 9) {
//     alert("Your number is less than 9");
// } else if (a < 18 && a >= 9) {
//     alert("Your number is greater than or equal to 9");
// } else {
//     alert("Your number is greater than 18");
// }
// console.log("Done1");

// const day = 2;
// switch (day) {
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     case 7:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Invalid day");
// }

//<<-------------------------------------------------------------->>>>>

// let age = prompt("what is age");
// if (age > 10 && age < 20) {
//     console.log("age lies between 10 and 20");
// } else {
//     console.log("age is not lies between 10 and 20");
// }

//<<-------------------------------------------------------------->>>>>

// let age = prompt("what is age");
// switch (age) {
//     case '10':
//         console.log("age is 10");
//         break;
//     case '11':
//         console.log("age is 11");
//         break;
//     case '12':
//         console.log("age is 12");
//         break;
//     default:
//         console.log("age is not 10, 11 or 12");
// }

//<<-------------------------------------------------------------->>>>>

// let num = prompt("number");
// num = Number.parseInt(num);
// if (num % 2 == 0 && num % 3 == 0) {
//     console.log("number is divided by 2 and 3");
// } else {
//     console.log("object is not divided by");
// }

// let age = prompt("age");
// let a = age > 18 ? "You can drive" : "You can't drive"
// console.log(a);

//<<-------------------------------------------------------------->>\\

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }

// console.log(factorial(5));

// function factorial(n) {
//     return n === 0 ? 1 : n * factorial(n - 1);
// }
// console.log(factorial(5));
// console.log(factorial(4));
// console.log(factorial(3));
// console.log(factorial(2));

//<<-------------------------------------------------------------->>

// let n = prompt("Please enter");
// n = Number.parseInt(n);

//<<-------------------------------------------------------------->>fucntion

function greet(city) {
  console.log(this.name, city);
}
const user = { name: "Anurag" };

greet.call(user, "Delhi");
greet.apply(user, ["Mumbai"]);
const boundGreet = greet.bind(user, "Pune");
boundGreet();
