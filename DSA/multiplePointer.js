// function countUniqueValues(arr) {
//     var i = 0;
//     for (var j = 1; j < arr.length; j++) {
//         if(arr[i] !==arr[j]){  
//             i++;
//             arr[i] = arr[j]
//         }
//     }
//     return i + 1
// }


const valueUniqe = (str)=>{
    let i = 0;
    for(let a of str){
        if(str[i] !== str[a]){
            i++;
            str[i] = str[a]
        }
    }
    return i + 1
}
console.log(valueUniqe([1,2,3,4,5,5,6,7]));


// function countUniqueValues(arr) {
//     return new Set(arr).size;  // using new Set which is not return Duplicate
// }
// console.log(countUniqueValues([1,2,3,4,5,5,6,7]));

