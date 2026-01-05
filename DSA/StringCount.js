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
// charCount("Hello")


// const charCount = (str) =>{
//     var obj = {};
//     for(let char of str){
//         char.toLowerCase()
//         if(/[a-z0-9]/.test(char)){
//             if(obj[char] > 0){
//                 obj[char]++
//             }else{
//                 obj[char] = 1;
//             }
//         }
//     }
//     return obj;
// }
// charCount("Anurag @ Gupta")

const charCount = (str) =>{
    var obj = {};
    for(let char of str){
        char = char.toLowerCase()
        if(/[a-z0-9]/.test(char)){
            obj[char] = ++obj[char] || 1
        }
    }
    return obj;
}
console.log(charCount("Anurag"));


// function isAlphaNumeric(char) {
//     var code = char.charCodeAt(0);
//     if (!(code > 47 && code < 58) && // numeric (0-9)
//         !(code > 64 && code < 91) && // upper alpha (A-Z)
//         !(code > 96 && code < 123)) { // lower alpha (a-z)
//         return false;
//     }
//     return true;
// };
// function charCount(str) {
//     var obj = {};
//     for (let char of str) {
//         if (isAlphaNumeric(char)) {
//             char = char.toLowerCase();
//             obj[char] = ++obj[char] || 1;
//         };
//     };
//     return obj;
// }
// console.log(charCount("Anurag @ Gupta"));




