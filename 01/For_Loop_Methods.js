const array = [10, 20, 30, 40, 50];

// 1. For Loop
// Traditionally, for loop ka use array ke elements ko access karne ke liye hota hai.

// for (let i = 0; i < array.length; i++) {
// 	const element = array[i];
//     console.log(array[i]);
// }


// 2. For...of Loop
// for...of loop se array ke elements ko directly access karte hain.

// for (const elm of array) {
// 	console.log(elm);
// }


// 3. ForEach Method
// forEach method ek callback function ke zariye array ke har element par iterate karta hai.

// array.forEach((value) => {
// 	console.log(value);
// });


// 4. For...in Loop
// for...in loop array ke indexes ko access karta hai.

// for (const index in array) {
// console.log(`Index: ${index}, Value: ${array[index]}`);
// }


// 7. Map Method
// map method ek naye array ko return karta hai, jo callback function ke operations ke result se banta hai.

// const newArr = array.map((value) => value * 2);
// console.log(newArr);


// 8. Filter Method
// filter method un elements ka ek naya array return karta hai jo condition satisfy karte hain.

// const filteredArr = array.filter((value) => value < 25);
// console.log(filteredArr);


// 9. Reduce Method
// reduce method array ke elements ko ek hi value mein reduce karta hai.

// const sum = array.reduce((a, b) => a + b)
// console.log(sum);


// 10. Every Method
// every method check karta hai ki kya array ke saare elements condition satisfy karte hain.

// const isEveryAbove5 = array.every((value) => value > 5);
// console.log(isEveryAbove5);


// 11. Some Method
// some method check karta hai ki kya array ke kuch elements condition satisfy karte hain.

// const arr = [10, 20, 30, 40, 50];
// const isSomeAbove40 = arr.some((value) => value > 20);
// console.log(isSomeAbove40); // Output: true


// 12. Find Method
// find method array ka pehla element return karta hai jo condition satisfy karta hai.

// const arr = [10,20,30,40,50];
// const foundValue = arr.find((value) => value > 25);
// console.log(foundValue);

// 13. FindIndex Method
// findIndex method array ka us element ka index return karta hai jo condition satisfy karta hai.

// const foundIndex = array.findIndex((value) => value > 15);
// console.log(foundIndex);


// 14. Keys Method
// keys method array ke indexes ko iterate karta hai

// for (const key of array.keys()) {
// 	console.log(key);
// }


// 15. Values Method
// values method array ke elements ko iterate karta hai.

// const arr = [10, 20, 30, 40, 50];
// for (const value of arr.values()) {
// 	console.log(value); // Outputs: 10, 20, 30, 40, 50
// }



// 16. Entries Method
// entries method array ke index aur value pairs ko iterate karta hai.

// const arr = [10, 20, 30, 40, 50];
// for (const [index, value] of arr.entries()) {
// 	console.log(`Index: ${index}, Value: ${value}`);
// }


// 17. Reverse Traversing
// Reverse order mein array ko traverse karne ke liye aap backward loop use kar sakte hain.

// for (let i = array.length - 1; i >= 0; i--) {
// 	// const element = array[i];
// 	console.log(array[i]);
// }


// 18. Recursion
// Recursion ka use karke bhi array traverse kar sakte hain.

// function traverseArray(index) {
// 	if (index >= array.length) return;
// 	console.log(array[index]);
// 	traverseArray(index + 1)
// }
// traverseArray(0)

// 19. Nested Array Traversing
// Multi-dimensional arrays ke liye nested loops ka use hota hai.

// const nestedArr = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9]
// ];

// for(const row of nestedArr){
// 	for(const value of row){
// 		console.log(value);
// 	}
// 	// console.log(row);
// }



// let myArr = Array.from("Hello")
// console.log(myArr);







