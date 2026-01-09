// Given a string s, find the length of the longest substring without duplicate characters.



//     Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
//     Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


//     Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.




/**
 * @param {string} s
 * @return {number}
 */

// var printUniqueSubstring = function (s) {
//     let set = new Set(), l = 0, max = 0, start = 0;

//     for (let r = 0; r < s.length; r++) {
//         while (set.has(s[r])) set.delete(s[l++]);
//         set.add(s[r]);
//         if (r - l + 1 > max) {
//             max = r - l + 1;
//             start = l;
//         }
//     }
//     console.log(s.substring(start, start + max));
// };

// printUniqueSubstring("abcabcbb"); // abc
// printUniqueSubstring("pwwkew");   // wke



var printUniqueSubstring = function (s) {
    let map = new Map(), l = 0, max = 0, start = 0;
    for (let r = 0; r < s.length; r++) {
        if (map.has(s[r])) l = Math.max(l, map.get(s[r]) + 1)
        map.set(s[r], r);
        if (r - l + 1 > max) max = r - (start = l) + 1
    }
    console.log(s.slice(start, start + max));
}
printUniqueSubstring("abcabcbb"); // abc
printUniqueSubstring("pwwkew");   // wke




// var lengthOfLongestSubstring = function (s) {
//     let idx = Array(128).fill(-1), l = 0, max = 0;

//     for (let r = 0; r < s.length; r++) {
//         l = Math.max(l, idx[s.charCodeAt(r)] + 1);
//         idx[s.charCodeAt(r)] = r;
//         max = Math.max(max, r - l + 1);
//     }
//     return max;
// };

var lengthOfLongestSubstring = function (s) {
    let set = new Set(), l = 0, max = 0;

    for (let r = 0; r < s.length; r++) {
        while (set.has(s[r])) set.delete(s[l++]);
        set.add(s[r]);
        max = Math.max(max, r - l + 1);
    }
    return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));