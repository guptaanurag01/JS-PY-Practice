// // 1. Simple Triangle Pattern
// function simpleTriangle(n) {
//   for (let i = 1; i <= n; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//       row += ' *';
//     }
//     console.log(row);
//   }
// }
// simpleTriangle(5);




// for (let i = 0; i < 5; i++) {
//   let row = ''
//   for (let j = 1; j <= i; j++) {
//     row += " *"
//   }
//   console.log(row)
// }


// for (let i = 5; i > 0; i--) {
//   let row = ''
//   for (let j = 1; j <= i; j++) {
//     row += " *"
//   }
//   console.log(row)
// }

// // 2. Inverted Triangle Pattern
// const invertedTriangle = () => {
//     for (let i = 5; i >= 1; i--) {
//         let row = "";
//         for (let j = 1; j <= i; j++) {
//             row += " *";
//         }
//         console.log(row);
//     }
// };
// invertedTriangle();


// // 3. Pyramid Pattern
// const pyramidPattern = (n) => {
//     for (let i = 1; i <= n; i++) {
//         let row = '';
//         for (let j = 1; j <= n - i; j++) {
//             row += ' ';
//         }
//         for (let k = 1; k <= (2 * i - 1); k++) {
//             row += '*'
//         }
//         console.log(row);
//     }
// }
// pyramidPattern(5);

// for (let i = 1; i <= 5; i++) {
//   let row = ''
//   for (let j = 1; j <= 5 - i; j++) {
//     row += ' '
//   }
//   for (let k = 1; k <= (2 * i - 1); k++) {
//     row += "*"
//   }
//   console.log(row)
// }
// for (let i = 5; i >= 0; i--) {
//   let row = ''
//   for (let j = 1; j <= 5 - i; j++) {
//     row += ' '
//   }
//   for (let k = 1; k <= (2 * i - 1); k++) {
//     row += "*"
//   }
//   console.log(row)
// }



// // 4. Diamond Pattern
// function diamondPattern() {
//   let n = 5;
//   for (let i = 1; i <= n; i++) {
//     let row = ' '.repeat(n - i) + '* '.repeat(i);
//     console.log(row);
//   }
//   for (let i = n - 1; i >= 1; i--) {
//     let row = ' '.repeat(n - i) + '* '.repeat(i);
//     console.log(row);
//   }
// }
// diamondPattern();


// // // 5. Number Triangle Pattern
// function numberTriangle() {
//   for (let i = 1; i <= 5; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//       row += j + ' ';
//     }
//     console.log(row);
//   }

//   for (let i = 5; i >= 1; i--){
//     let row = ''
//     for (let j = 1; j <= i; j++){
//       row += j + ' '
//     }
//     console.log(row)
//   }
// }
// numberTriangle();


// // 6. Alphabet Triangle Pattern
// function alphabetTriangle() {
//   let alphabet = 'A';
//   for (let i = 1; i <= 5; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//       row += alphabet + ' ';
//     }
//     alphabet = String.fromCharCode(alphabet.charCodeAt(0) + 1);
//     console.log(row);
//   }
// }
// alphabetTriangle();




// function invertedPyramid(rows) {
//   for (let i = rows; i >= 1; i--) {
//     let row = '';
//     for (let j = 1; j <= rows - i; j++) {
//       row += ' '
//     }
//     for (let k = 1; k <= (2 * i - 1); k++) {
//       row += '*'
//     }
//     console.log(row);
//   }
// }
// invertedPyramid(5)
// console.log();

// const pyramidPatterns = (rows) => {
//     for (let i = 1; i <= rows; i++) {
//         let row = '';
//         for (let j = 1; j <= rows - i; j++) {
//             row += ' ';
//         }
//         for (let k = 1; k <= (2 * i - 1); k++) {
//             row += '*'
//         }
//         console.log(row);
//     }

//     for (let i = rows; i >= 1; i--) {
//         let row = '';
//         for (let j = 1; j <= rows - i; j++) {
//             row += ' '
//         }
//         for (let k = 1; k <= (2 * i - 1); k++) {
//             row += '*'
//         }
//         console.log(row);
//     }
// }
// pyramidPatterns(5);



// function diamondNumberPattern(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = '';
//         for (let j = 1; j <= n - i; j++) {
//             row += ' '
//         }
//         for (let j = 1; j <= i; j++) {
//             row += j + ' ';
//         }
//         console.log(row);
//     }

//     for (let i = n - 1; i >= 1; i--) {
//         let row = '';
//         for (let j = 1; j <= n - i; j++) {
//             row += ' '
//         }
//         for (let j = 1; j <= i; j++) {
//             row += j + ' ';
//         }
//         console.log(row);
//     }
// }
// diamondNumberPattern(5)



// for (let i = 1; i <= 5; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += '*'
//     }
//     console.log(row);
// }


// for (let i = 5; i >= 1; i--) {
//   let row = ''
//   for (let j = 1; j <= i; j++) {
//     row += '*'
//   }
//   console.log(row);
// }

// function rightAlignedTriangle(rows) {
//   for (let i = 1; i <= rows; i++) {
//     let row = '';

//     for (let j = 1; j <= rows - i; j++) {
//       row += ' ';
//     }
//     for (let j = 1; j <= (2 * i - 1); j++) {
//       row += '*'
//     }
//     console.log(row);
//   }
// }
// rightAlignedTriangle(5)


// function invertedPyramid(rows) {
//   for (let i = 1; i <= rows; i++) {
//     let row = '';
//     for (let j = 1; j <= rows - i; j++) {
//       row += ' ';
//     }
//     for (let j = 1; j <= (2 * i - 1); j++) {
//       row += '*'
//     }
//     console.log(row);
//   }

//   for (let i = rows; i >= 1; i--) {
//     let row = '';
//     for (let j = 1; j <= rows - i; j++) {
//       row += ' ';
//     }
//     for (let j = 1; j <= (2 * i - 1); j++) {
//       row += '*'
//     }
//     console.log(row);
//   }
// }
// invertedPyramid(5)



// const hollowPyramid = (rows) => {
//     for (let i = 1; i <= rows; i++) {
//         let row = ''
//         for (let j = 1; j <= rows - i; j++) {
//             row += ' ';
//         }
//         for (let k = 1; k <= (2 * i - 1); k++) {
//             if (k === 1 || k === (2 * i - 1) || i === rows) {
//                 row += '*'
//             } else {
//                 row += ' '
//             }
//         }
//         console.log(row);
//     }

//   for (let i = rows; i >= 1; i--) {
//     let row = ''
//     for (let j = 1; j <= rows - i; j++) {
//       row += ' '
//     }
//     for (let k = 1; k <= (2 * i - 1); k++) {
//       if (k === 1 || k === (2 * i - 1) || i === rows) {
//         row += "*"
//       } else {
//         row += ' '
//       }
//     }
//     console.log(row);
//   }
// }
// hollowPyramid(5)




// const numberPyramid = (rows) => {
//   for (let i = 1; i <= rows; i++) {
//     let row = '';
//     for (let j = 1; j <= rows - i; j++) {
//       row += ' ';
//     }
//     for (let j = 1; j <= i; j++) {
//       row += j
//     }
//     for (let j = i - 1; j >= 1; j--) {
//       row += j
//     }
//     console.log(row);
//   }

//   for (let i = rows; i >= 1; i--) {
//     let row = '';
//     for (let j = 1; j <= rows - i; j++) {
//       row += ' '
//     }
//     for (let j = 1; j <= i; j++) {
//       row += j
//     }
//     for (let j = i - 1; j >= 1; j--) {
//       row += j
//     }
//     console.log(row);
//   }
// }
// numberPyramid(5);



// const butterflyPattern = (rows) => {
//   for (let i = 1; i <= rows; i++) {
//     let row = ''
//     for (let j = 1; j <= i; j++) {
//       row += "*"
//     }
//     for (let j = 1; j <= (2 * (rows - i)); j++) {
//       row += ' ';
//     }
//     for (let j = 1; j <= i; j++) {
//       row += "*"
//     }
//     console.log(row);
//   }

//   for (let i = rows; i >= 1; i--) {
//     let row = ''
//     for (let j = 1; j <= i; j++) {
//       row += '*'
//     }
//     for (let j = 1; j <= (2 * (rows - i)); j++) {
//       row += " "
//     }
//     for (let j = 1; j <= i; j++) {
//       row += "*"
//     }
//     console.log(row);
//   }
// }
// butterflyPattern(5)



// function printSquarepattern(n) {
//   for (let i = 0; i <= n; i++) {
//     let rows = ''
//     for (let j = 0; j <= n; j++) {
//       rows += '* '
//     }
//     console.log(
//       rows
//     );
//   }
// }
// printSquarepattern(5)



function crossPattern(n) {
  if (n % 2 === 0) { 
    return;
  }

  for (let i = 0; i <= n; i++) {
    let row = ''

    for (let j = 0; j < n; j++) {
      if (i === j || i + j === n - 1) {
        row += "*"
      } else {
        row += ' '
      }
    }
    console.log(row);
  }
}
crossPattern(7)

