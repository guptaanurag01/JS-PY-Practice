// let a = 5;
// let b = 10;

// a = a + b;
// b = a - b;
// a = a - b;

// // a = a ^ b;
// // b = a ^ b;
// // a = a ^ b;

// [a, b] = [b, a]
// console.log("::A::",a, b);

// function swap(a, b) {
// 	a = a + b;
// 	b = a - b;
// 	a = a - b;
// 	return [a, b];
// }

// let num1 = 5;
// let num2 = 10;

// [num1, num2] = swap(num1, num2);
// console.log(num1, num2);


// function swap(a, b) {
// 	return [b, a]
// }
// let num = 5;
// let nums = 10;
// [num, nums] = swap(num, nums);
// console.log("num", num, "nums", nums);




// const task1 = () => new Promise(resolve => {
//     setTimeout(() => {
//         resolve('Task 1 done')
//     }, 1000)
// });

// function task2() {
//     return new Promise(resolve =>
//         setTimeout(() => {
//             resolve("Task 2 Done!")
//         }, 1000)
//     )
// }

// const result = async async => {
//     console.log(await task1())
//     console.log(await task2())
// }
// result();

// const task1 = async () => {
//     await new Promise(resolve=> setTimeout(resolve,1000));
//     return "Task 1 Done!"
// };

// async function task2(){
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     return "Task 2 done!"
// }

// const result = async () =>{
//     console.log(await task1());
//     console.log(await task2());
// }
// result();

// ==============  Using a helper delay function =====================

// const delay = ms => new Promise(resolve => setTimeout(resolve,ms));
// const task1= async()=>{await delay(1000)
//     return "Task 1 Done!"
// };
// const task2= async()=>{await delay(1000);
//     return "Task 2 Done!"
// };
// const result = async ()=>{
//     console.log(await task1());
//     console.log(await task2());
// };
// result();










