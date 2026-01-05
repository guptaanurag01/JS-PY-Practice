// // Even Odd
// function isEven(num) {
//     return (num & 1) === 0;
// }
// console.log(isEven(9))
// console.log(isEven(8))

// //  Formatting Numbers with Units (K, M, B) in JavaScript
// function formatNumber(num) {
//     return num >= 1e9 ? (num / 1e9).toFixed(1) + "B" :
//         num >= 1e6 ? (num / 1e6).toFixed(1) + "M" :
//             num >= 1e3 ? (num / 1e3).toFixed(1) + "K" : num;
// }
// console.log(formatNumber(21000))
// console.log(formatNumber(23000000))
// console.log(formatNumber(29000000000))

// // OTP Generator
// const getOtp = (length = 6) => {
//     let otp = ''
//     for (let i = 0; i < length; i++) {
//         otp += Math.floor(Math.random() * 10)
//     }
//     return otp;
// }
// console.log("OTP:", getOtp())

// let array = [1, 2, 3]
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }

// function generateToken() {
//     return `${Math.random().toString(36).substring(2)}`;
// }
// const token = generateToken()
// console.log("Generated Token:", token)

// const token = () => {
//     return `${Math.random().toString(36).substring(2)}`
// }
// console.log("Generated Token:", token());


// let arr = [1, 2, 3, 4, 5];
// let res =[];
// for (let i = arr.length - 1; j = 0; i >= 0 ; i--, j++) {
//     //   res.push(arr[i]);
//     res[j] += arr[i]
// }
// console.log(res);


// let arr = [1, 2, 3, 4, 5];
// let res = [];
// for (let i = arr.length - 1, j = 0; i >= 0; i--, j++) {
//   res[j] = arr[i];
// }
// console.log(res);


// function flattenArrayModern(arr) {
//   return arr.flat(Infinity);
// }
// const nestedArr = [1, [2, [3, 4]], 5, [6, 7]];
// console.log(flattenArrayModern(nestedArr)); // Output: [1, 2, 3, 4, 5, 6, 7]


// function flattenArrayRecursive(arr) {
//   let flattened = [];

//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];

//     if (Array.isArray(element)) {
//       // If the element is an array, recursively call the function
//       flattened = flattened.concat(flattenArrayRecursive(element));
//     } else {
//       // If it's not an array, just push it to the result
//       flattened.push(element);
//     }
//   }

//   return flattened;
// }

// // // Example usage:
// const nestedArr = [1, [2, [3, 4]], 5, [6, 7]];
// console.log(flattenArrayRecursive(nestedArr)); // Output: [1, 2, 3, 4, 5, 6, 7]





// setTimeout(() => {
//   console.log("setTimeout called After 1 Second");
// }, 1000);



setInterval(() => {
  console.log("setInterval called After 1 Second");
}, 1000);



// function repeat() {
//   setTimeout(() => {
//     console.log("Safe Loop");
//     repeat();
//   }, 1000);
// }
// repeat();
