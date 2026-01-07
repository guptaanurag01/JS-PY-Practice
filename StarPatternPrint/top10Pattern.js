// // 01_pyramid.js
// function pyramid(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = '';
//         for (let s = 1; s <= n - i; s++) row += ' ';
//         for (let j = 1; j <= i; j++) row += '* ';
//         console.log(row);
//     }
// }
// pyramid(5);

// // 02_inverted_pyramid.js
// function invertedPyramid(n) {
//     console.log("invertedPyramid");
//     for (let i = n; i >= 1; i--) {
//         let row = '';
//         for (let s = 1; s <= n - i; s++) row += ' ';
//         for (let j = 1; j <= i; j++) row += '* ';
//         console.log(row);
//     }
// }
// invertedPyramid(5);

// // 03_number_pyramid.js
// function numberPyramid(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = '';
//         for (let s = 1; s <= n - i; s++) row += ' ';
//         for (let j = 1; j <= i; j++) row += j + ' ';
//         console.log(row);
//     }
// }
// numberPyramid(5);

// // 04_palindromic_triangle.js
// function palindromicTriangle(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = '';
//         for (let s = 1; s <= n - i; s++) row += '  ';
//         for (let j = i; j >= 1; j--) row += j + ' ';
//         for (let j = 2; j <= i; j++) row += j + ' ';
//         console.log(row);
//     }
// }
// palindromicTriangle(5);



// // 05_butterfly_pattern.js
// function butterflyPattern(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = '';
//         for (let j = 1; j <= i; j++) row += '* ';
//         for (let s = 1; s <= 2 * (n - i); s++) row += '  ';
//         for (let j = 1; j <= i; j++) row += '* ';
//         console.log(row);
//     }
//     for (let i = n; i >= 1; i--) {
//         let row = ""
//         for (let j = 1; j <= i; j++)  row += "* "
//         for (let s = 1; s <= 2 * (n - i); s++)  row += "  "
//         for (let j = 1; j <= i; j++)  row += "* "
//         console.log(row);
//     }
// }
// butterflyPattern(4);



// // 06_diamond_pattern.js
// function diamond(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = '';
//         for (let s = 1; s <= n - i; s++) row += ' ';
//         for (let j = 1; j <= 2 * i - 1; j++) row += '*';
//         console.log(row);
//     }
//     for (let i = n - 1; i >= 1; i--) {
//         let row = '';
//         for (let s = 1; s <= n - i; s++) row += ' ';
//         for (let j = 1; j <= 2 * i - 1; j++) row += '*';
//         console.log(row);
//     }
// }
// diamond(5);


// // 07_hollow_square.js
// function hollowSquare(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = '';
//         for (let j = 1; j <= n; j++) {
//             if (i === 1 || i === n || j === 1 || j === n) {
//                 row += j + ' ';
//             } else {
//                 row += '  ';
//             }
//         }
//         console.log(row);
//     }
// }
// hollowSquare(5);

// // 08_pascals_triangle.js
// function pascalTriangle(n) {
//     for (let line = 0; line < n; line++) {
//         let row = '';
//         let num = 1;
//         for (let s = 1; s <= n - line; s++) row += ' ';
//         for (let i = 0; i <= line; i++) {
//             row += num + ' ';
//             num = num * (line - i) / (i + 1);
//         }
//         console.log(row);
//     }
// }
// pascalTriangle(5);

// // 09_zigzag_pattern.js
// function zigZag(n) {
//     for (let i = 1; i <= 3; i++) {
//         let row = '';
//         for (let j = 1; j <= n; j++) {
//             if (
//                 (i === 1 && j % 4 === 2) ||
//                 (i === 2 && j % 2 === 1) ||
//                 (i === 3 && j % 4 === 0)
//             ) {
//                 row += '*';
//             } else {
//                 row += ' ';
//             }
//         }
//         console.log(row);
//     }
// }
// zigZag(15);

// // 10_spiral_matrix.js

// function spiralMatrix(n) {
//     let matrix = Array.from({ length: n }, () => Array(n).fill(0));
//     let val = 1, top = 0, bottom = n - 1, left = 0, right = n - 1;

//     while (val <= n * n) {
//         for (let i = left; i <= right; i++) matrix[top][i] = val++;
//         top++;
//         for (let i = top; i <= bottom; i++) matrix[i][right] = val++;
//         right--;
//         for (let i = right; i >= left; i--) matrix[bottom][i] = val++;
//         bottom--;
//         for (let i = bottom; i >= top; i--) matrix[i][left] = val++;
//         left++;
//     }

//     for (let i = 0; i < n; i++) {
//         let row = '';
//         for (let j = 0; j < n; j++) {
//             row += matrix[i][j].toString().padStart(3, ' ') + ' ';
//         }
//         console.log(row);
//     }
// }
// spiralMatrix(4);
