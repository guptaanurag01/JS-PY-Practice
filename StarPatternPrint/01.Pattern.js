// function start(n) {
//     for (let i = 1; i <= n; i++) {
//         let data = ""
//         for (let j = 1; j <= i; j++) {
//             data += "*"
//         }
//         console.log(data);
//     }
// }
// start(5)
// console.log()


// //  ================== 5 BY 5 Square Pattern  ================
// function SquareStar(n) {
//   for(let i = 1; i <= n; i++) {
//         let data = ""
//         for (let j = 1; j <= n; j++) {
//             data += " *"
//         }
//         console.log(data);
//     }
// }
// SquareStar(5)
// console.log()


// // ================ Right-Angled Diamond Pattern  ================
// function RightAngled(n) {
//   for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += " *";
//     }
//     console.log(row);
//   }

//   for (let i = n - 1; i >= 1; i--) {
//     let row = "";
//     for (let j = i; j >= 1; j--) {
//       row += " *";
//     }
//     console.log(row);
//   }
// }
// RightAngled(5);


// // ================ Diamond Star Pattern ================
// function Diamond_Pattern(n) {
//     console.log("Diamond Pattern");
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let j = 1; j <= n - i; j++) {
//             row += " ";
//         }
//         for (let k = 1; k <= 2 * i - 1; k++) {
//             row += "*";
//         }
//         console.log(row);
//     }
//     for (let i = n - 1; i >= 1; i--) {
//         let row = "";
//         for (let j = 1; j <= n - i; j++) {
//             row += " ";
//         }
//         for (let k = 1; k <= 2 * i - 1; k++) {
//             row += "*";
//         }
//         console.log(row);
//     }
// }
// Diamond_Pattern(5)

// console.log("numberTriangle");
// function numberTriangle() {
//     for (let i = 1; i <= 5; i++) {
//         let row = '';
//         for (let j = 1; j <= i; j++) {
//             row += j + ' ';
//         }
//         console.log(row);
//     }
//     for (let i = 5 - 1; i >= 1; i--) {
//         let row = ''
//         for (let j = 1; j <= i; j++) {
//             row += j + ' '
//         }
//         console.log(row)
//     }
// }
// numberTriangle();


// function diamondNumberPattern(n) {
//     console.log("diamondNumberPattern");
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let j = 1; j <= n - i; j++) {
//             row += " ";
//         }
//         for (let j = 1; j <= i; j++) {
//             row += j + " ";
//         }
//         console.log(row);
//     }
//     for (let i = n - 1; i >= 1; i--) {
//         let row = "";
//         for (let j = 1; j <= n - i; j++) {
//             row += " ";
//         }
//         for (let j = 1; j <= i; j++) {
//             row += j + " ";
//         }
//         console.log(row);
//     }
// }
// diamondNumberPattern(5);


// function PalindromicPattern(n) {
//     console.log("PalindromicPattern");
//     for (let i = 1; i <= n; i++) {
//         let str = " ";
//         for (let j = 1; j <= n - i; j++) {
//             str += "  ";
//         }
//         for (let j = 1; j <= i; j++) {
//             str += j + " ";
//         }
//         for (let j = i - 1; j >= 1; j--) {
//             str += j + " ";
//         }
//         console.log(str);
//     }
//     for (let i = n - 1; i >= 1; i--) {
//         let row = " ";
//         for (let j = i; j <= 5 - 1; j++) {
//             row += "  ";
//         }
//         for (let k = 1; k <= i; k++) {
//             row += k + " ";
//         }
//         for (let l = i - 1; l >= 1; l--) {
//             row += l + " "
//         }
//         console.log(row);
//     }
// }
// PalindromicPattern(5);


// const hollowPyramid = (rows) => {
//     for (let i = 1; i <= rows; i++) {
//         let row = " ";
//         for (let j = 1; j <= rows - i; j++) {
//             row += " ";
//         }
//         for (let k = 1; k <= 2 * i - 1; k++) {
//             if (k === 1 || k === 2 * i - 1 || i === rows) {
//                 row += "*";
//             } else {
//                 row += " ";
//             }
//         }
//         console.log(row);
//     }
//     for (let i = rows - 1; i >= 1; i--) {
//         let row = " ";
//         for (let j = 1; j <= rows - i; j++) {
//             row += " ";
//         }
//         for (let k = 1; k <= 2 * i - 1; k++) {
//             if (k === 1 || k === 2 * i - 1 || i === rows) {
//                 row += "*";
//             } else {
//                 row += " ";
//             }
//         }
//         console.log(row);
//     }
// };
// hollowPyramid(5);

// const butterflyPattern = (rows) => {
//     console.log("I'm a Butterfly Pattern");
//     for (let i = 1; i <= rows; i++) {
//         let row = "";
//         for (let j = 1; j <= i; j++) {
//             row += "*";
//         }
//         for (let j = 1; j <= 2 * (rows - i); j++) {
//             row += " ";
//         }
//         for (let j = 1; j <= i; j++) {
//             row += "*";
//         }
//         console.log(row);
//     }
//     for (let i = rows - 1; i >= 1; i--) {
//         let row = "";
//         for (let j = 1; j <= i; j++) {
//             row += "*";
//         }
//         for (let j = 1; j <= 2 * (rows - i); j++) {
//             row += " ";
//         }
//         for (let j = 1; j <= i; j++) {
//             row += "*";
//         }
//         console.log(row);
//     }
// };
// butterflyPattern(5);

// function crossPattern(n) {
//     if (n % 2 === 0) {
//         return;
//     }
//     for (let i = 0; i < n; i++) {
//         let row = ''
//         for (let j = 0; j < n; j++) {
//             if (i === j || i + j === n - 1) {
//                 row += "*"
//             } else {
//                 row += ' '
//             }
//         }
//         console.log(row);
//     }
// }
// crossPattern(7)


// function zigZigPattern(n) {
//     console.log("This is Zig-Zag Pattern");
//     for (let i = 1; i <= 3; i++) {
//         let row = ""
//         for (let j = 0; j <= n; j++) {
//             if (
//                 (i === 1 && (j % 4 === 2)) ||
//                 (i === 2 && (j % 2 === 1)) ||
//                 (i === 3 && (j % 4 === 0))
//             ) {
//                 row += "*"
//             } else {
//                 row += " "
//             }
//         }
//         console.log(row);
//     }
// }
// zigZigPattern(15)


// function hollowNumberSquare(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = ""
//         for (let j = 1; j <= n; j++) {
//             if (i === 1 || i === n || j === 1 || j === n) {
//                 row += j + " "
//             } else {
//                 row += "  "
//             }
//         } 
//         console.log(row);
//     }
// }
// hollowNumberSquare(5)

// function hollowCenteredNumberPyramid ( n ) {
//     for ( let i = 1; i <= n; i++ )
//     {
//         let row = '';
//         for ( let s = 1; s <= n - i; s++ )
//         {
//             row += '  ';
//         }
//         row += '1';
//         if ( i > 1 && i < n )
//         {
//             for ( let k = 1; k <= 2 * ( i - 1 ) - 1; k++ )
//             {
//                 row += '  ';
//             }
//             row += i;
//         }
//         if ( i === n )
//         {
//             row = '';
//             for ( let j = 1; j <= n; j++ )
//             {
//                 row += j + ' ';
//             }
//             for ( let j = n - 1; j >= 1; j-- )
//             {
//                 row += j + ' ';
//             }
//         }
//         console.log( row );
//     }
// }
// hollowCenteredNumberPyramid( 5 );




