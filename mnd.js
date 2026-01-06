// function myFunc(theObject) {
//   theObject.make = "Toyota";
// }

// const myCar = {
//   make: "Honda",
//   model: "Accord",
//   year: 1998,
// };

// console.log(myCar.make); // "Honda"
// myFunc(myCar);
// console.log(myCar.make); // "Toyota"

// function fact(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   return n * fact(n -1)
// }
// console.log('%cmnd.js:21 fact 5', 'color: #007acc;', fact(5));

// console.log(square(5))
// function square(n) {
//   return n * n;
// }



var twoSum = function (nums, target) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    let need = target - nums[i];

    if (map[need] !== undefined) {
      return [map[need], i]
    }

    map[nums[i]] = i;
  }
}
// console.log(twoSum([2, 7, 11, 15],9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));