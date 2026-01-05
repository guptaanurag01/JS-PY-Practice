// let person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };
// console.log(Object.keys(person));
// console.log(Object.values(person))
// console.log(Object.entries(person))

// let addInfo = { city: 'New', country: 'ind' }
// let merge = Object.assign({}, person, addInfo)
// console.log(merge)

// Object.freeze(person)
// person.age = 35;
// console.log(person.age)

// console.log(person.toString())

// let arr = [1, 2, 3]
// arr.push(4,5)
// arr.pop()
// arr.shift()
// arr.unshift()
// let arrs = [4, 5, 6]
// let merge = arr.concat(arrs)
// console.log(merge)
// let str = arr.join('-')
// console.log(str)

// let arr = [1, 2, 3, 4, 5]
// let slicedArr = arr.slice(1, 4)
// console.log(slicedArr)

// let arr = [1, 2, 3, 4]
// arr.reverse()
// console.log(arr)

// let str = "apple,banana,cherry";
// let arr = str.split(",");
// console.log(arr);

// var a = 10;
// let b = 20;
// if ( b )
//     {
//     console.log("a",a);
// }
// console.log("b",b);

// console.log(a);
// var a = 5;

// const b = 5;
// console.log("b", b);
// // let b = 5;

// if (true) {
//     let a = 19
// }
// console.log(a);

// function test() {
//   var a = 1;
//   if (true) {
//     var a = 2;
//     console.log(a);
//   }
//   console.log(a);
// }
// test();

// function demo() {
//   let a = 10;
//   if (a > 5) {
//     let a = 20;
//     console.log(a); //20
//   }
//   console.log(a); // 10
// }
// demo();

// const a = 10;
// a = 20;
// console.log(a);

// var a = 1;
// function foo() {
//   console.log(a)
//   var a = 2;
// }
// foo();

// let a = 5;
// {
//   let a = 10;
//   console.log(a);
// }
// console.log(a);

// const a;
// a = 5;

// {
//     var a = 1;
//     let b = 2;
// }
// console.log(a);
// console.log(b);

// let a = 3;
// function outer() {
//   console.log(a);
//   let a = 4;
// }
// outer();

// if (true) {
//   const x = 50;
// }
// console.log(x);

// var x = 3;
// function check() {
//   if (!x) {
//     var x = 2;
//   }
//   console.log(x);
// }
// check();

// let a = 1;
// let b = 2;
// if (a === 1) {
//   let a = 10;
//   b = 20;
//   console.log(a); // 10
// }
// console.log(b); //20

// var x = 5;
// {
//   var x = 10;
// }
// console.log(x);

// const obj = { name: "JS" };
// obj.name = "JavaScript";
// console.log(obj.name);

// let a = "hello";
// {
//   a = "world";sff
//   console.log(a);
// }
// console.log(a);

// function test() {
//   console.log(a);
//   var a = 5;
// }
// test();

// var a = 10;
// (function () {
//   console.log(a);
//   var a = 20;
// })();

// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     console.log(count);
//   };
// }
// const fn = outer();
// fn();
// fn();

// let a = 5;
// (function () {
//   console.log(a); // ??
//   let a = 10;
// })();

// const a = 1;
// {
//   const a = a + 1;
//   console.log(a);
// }

// function test() {
//     console.log(typeof x);
//     var x = 10;
// }
// test();

// let foo = function () {
//   console.log("first");
// };
// foo();

// function foo() {
//   console.log("second");
// }

// function foo(a = b, b = 2) {
//   console.log(a, b);
// }
// foo();

//  for (var i = 0; i < 3; i++) {
//     // console.log(i);
//    setTimeout(() => console.log(i), 1000);
// }

// function hello() {
//   result = new Promise((resolve) =>
//     setTimeout(() => {
//       resolve("promise resolved");
//     }, 1000)
//   );
//   //   result = "kuch";
//   return result;
// }

// async function start() {
//   console.log("hello world");
//   res = hello();
//   console.log(res);
// }
// start();


// var x = 21;
// var fun = function () {
//   console.log(x);
//   var x = 20;
// };
// fun();


// let a = 5;
// {
//   console.log(a);
//   let a = 10;
// }


// console.log("Start");
// setTimeout(() => {
//   console.log("Timeout");
// }, 0);
// Promise.resolve().then(() => {
//   console.log("Promise");
// });
// console.log("End");


// async function test() {
//   try {
//     return await Promise.reject("Error!");
//   } catch (e) {
//     console.log("Caught:", e);
//   }
// }
// test();


// setTimeout(() => {
//   console.log("1");
//   setTimeout(() => {
//     console.log("2");
//     setTimeout(() => {
//       console.log("3");
//     }, 1000);
//   }, 1000);
// }, 1000);


// async function chain() {
//   console.log("A");
//   await Promise.resolve();
//   console.log("B");
//   await Promise.resolve();
//   console.log("C");
// }
// chain();
// console.log("D");


// Promise.resolve()
//   .then(() => {
//     return Promise.resolve("A");
//   })
//   .then((data) => {
//     console.log(data);
//     throw new Error("Something went wrong");
//   })
//   .then(() => {
//     console.log("Never runs");
//   })
//   .catch((err) => {
//     console.error("Caught:", err.message);
//   });

// async function foo() {
//   return "hello";
// }
// foo().then(console.log);

// async function foo() {
//   console.log("1");
//   setTimeout(() => console.log("2"), 0);
//   await null;
//   console.log("3");
// }
// foo();
// console.log("4");


// const p1 = new Promise(res => setTimeout(() => res("one"), 500));
// const p2 = new Promise(res => setTimeout(() => res("two"), 100));
// Promise.race([p1, p2]).then(console.log); // ?
// Promise.all([p1, p2]).then(console.log);  // ?


// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
// async function run() {
//   console.log("Start");
//   await delay(1000);
//   console.log("End after 1 sec");
// }
// run();

// let p = new Promise((resolve, reject) => {
//   resolve("Resolved");
//   reject("Rejected");
// });
// p.then((res) => console.log(res))
//  .catch((err) => console.log(err));


