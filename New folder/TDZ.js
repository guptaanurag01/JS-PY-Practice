// console.log("====== TDZ(Time Dead  Zone) =======")
// try{
//     console.log(x);
//     // var x = 5
//     // let x = 51
//     const x = 51
// }
// catch(err){
//     console.log(err.message);
// }

// // You can call it before declaration — works due to hoisting
// sayHello();
// function sayHello() {
//     console.log("👋 Hello from a function declaration!");
// };

// // ====== IIFE (Immediately Invoked Function Expression) ========
// (function(){
//     console.log(" IIFE executed imediately!");
// })();

// (function (name) {
//     console.log(`Hello, ${name}!`);
// })("Anurag");

// (() => {
//     console.log("ARROW FUNCTION ");
// })();



// // A closure is created when a function “remembers” its lexical scope even after that scope has finished executing.
// //     Simply:
// // 👉 Inner function apne outer function ke variables ko “yaad” rakhta hai — even after outer function has returned.
// function outer(){
//     let count = 0 ;
//     function inner(){
//         count++;
//         console.log("Count is:", count);
//     }
//     return inner
// }
// const counter = outer();
// counter();
// counter();
// counter();


// //  ======== Example 2: Data Privacy (Encapsulation)
// function createBankAccount(){
// let balance = 0;
// return{
//     desposit:(amount)=> balance+=amount,
//     getbalance:()=>balance
// }
// };
// const account = createBankAccount();
// account.desposit(1000);
// console.log(account.getbalance());
// console.log(account.balance);

// function greetUser(name, callback){
//     console.log("Hello,",name);
//     callback();
// };
// function sayBye(){
//     console.log("GoodBye!");
// }
// greetUser("Anurag", sayBye)


// const numbers = [1, 2, 3, 4, 5];
// const double = numbers.map(num => num * 2)
// console.log(double);

// const ages = [12, 18, 20, 10];
// const adults = ages.filter(age => age >= 18);
// console.log(adults); // [18, 20]

// const numbers = [1,2,3,4];
// const sum = numbers.reduce((acc, cur)=> acc +  cur)
// console.log(sum);


// const fruits = ["apple","banana","cherry"]
// const result = fruits.forEach(fruit => console.log(fruit.toUpperCase()))
// console.log(result);

// ============== Custom HOF ===============
// function repeat(fn, times){
//     for(let i=0; i<times; i++) fn();
// }
// repeat(()=>console.log("hi!"),3);


const obj = {
  name: "Anurag",
  greet: function () {
    setTimeout(()=> {
      console.log(this.name);
    }, 1000);
  },
};
obj.greet();


// const obj = {
//   name: "Anurag",
//   greet: function () {
//     setTimeout(() => {
//       console.log(this.name);
//     }, 1000);
//   },
// };
// obj.greet();


