// You are given two non - empty linked lists representing two non - negative integers.The digits are stored in reverse order, and each of their nodes contains a single digit.Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.



//     Example 1:


// Input: l1 = [2, 4, 3], l2 = [5, 6, 4]
// Output: [7, 0, 8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9, 9, 9, 9, 9, 9, 9], l2 = [9, 9, 9, 9]
// Output: [8, 9, 9, 9, 0, 0, 0, 1]


// Constraints:

// The number of nodes in each linked list is in the range[1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Linked List Node
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Add Two Numbers Logic
var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode(0);
    let cur = dummy;
    let carry = 0;

    while (l1 || l2 || carry) {
        let sum = carry + (l1?.val || 0) + (l2?.val || 0);
        carry = Math.floor(sum / 10);
        cur = cur.next = new ListNode(sum % 10);
        l1 = l1?.next || null;
        l2 = l2?.next || null;
    }
    return dummy.next;
};

// Array → Linked List
function arrayToList(arr) {
    let dummy = new ListNode(0);
    let cur = dummy;
    for (let val of arr) {
        cur.next = new ListNode(val);
        cur = cur.next;
    }
    return dummy.next;
}

// Linked List → Array (for output)
function listToArray(node) {
    let res = [];
    while (node) {
        res.push(node.val);
        node = node.next;
    }
    return res;
}

// Test
let l1 = arrayToList([2, 4, 3]);
let l2 = arrayToList([5, 6, 4]);

let result = addTwoNumbers(l1, l2);
console.log(listToArray(result));








function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

const addTwoNumbers1 = (l1, l2) => {
    let d = new ListNode(0), c = d, carry = 0;
    while (l1 || l2 || carry) {
        let s = carry + (l1?.val || 0) + (l2?.val || 0);
        carry = s > 9;
        c = c.next = new ListNode(s % 10);
        l1 = l1?.next;
        l2 = l2?.next;
    }
    return d.next;
};

// helpers (sirf local test ke liye)
const arrToList = a => a.reduceRight((n, v) => new ListNode(v, n), null);
const listToArr = n => n ? [n.val, ...listToArr(n.next)] : [];

console.log(listToArr(addTwoNumbers1(
    arrToList([2, 4, 3]),
    arrToList([5, 6, 4])
))); // [7,0,8]
