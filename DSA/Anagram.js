// function validAnagram(first, second) {
//     if (first.length !== second.length) return false;

//     const lookup = {};
//     for (let i = 0; i < first.length; i++) {
//         let letter = first[i].toLowerCase();
//         lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
//     }

//     for (let i = 0; i < second.length; i++) {
//         let letter = second[i].toLowerCase();

//         if (!lookup[letter])
//             return false
//         else
//             lookup[letter] -= 1
//     }
//     return true;
// }
// console.log(validAnagram('Anurag', 'garunA'));

// function valid_anagram(first, second){
//     if(first.length !== second.length) return false
//     const lookup = {};
//     for(const letter of first.toLowerCase()){
//         lookup[letter] = (lookup[letter] || 0)+ 1
//     }
//     for(const letter of second.toLowerCase()){
//         if(!lookup[letter]) return false;
//         lookup[letter]--;
//     }
//     return true;
// }
// console.log(valid_anagram('Anurag', 'garunA'))


// function charCount(str){
//     let result = {};
//         for (let i = 0; i < str.length; i++) {
//             let char = str[i].toLowerCase() ;
//             if(result[char] > 0){
//                 result[char]++
//             }
//             else{
//             result[char] = 1
//             }
//         }
//     return result;
// }
// console.log(charCount("Hello"));

function charCount(str) {
  let result = {};
  for (const i of str.toLowerCase()) {
    if (result[i] > 0)
      result[i]++;
    else
      result[i] = 1;
  }
  return result;
}
console.log(charCount("HellO"));


// function charCount(str) {
//   let result = {};
//   for (const i of str.toLowerCase()) {
//     if (result[i] > 0) result[i]++;
//     else result[i] = 1;
//   }
//   return result;
// }

// console.log(charCount("HellO"));

// const charCount = (str)=>{
// let result = {};
// for(let i of str.toLowerCase()){
//   result[i] = (result[i] || 0) + 1;
// }
// return result
// }
// console.log(charCount("HelLo"))

