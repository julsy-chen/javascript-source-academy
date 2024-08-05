10; // 10
5 + 3 + 4; // 12
9 - 1; // 8
6 / 2; // 3
2 * 4 + (4 - 6); // 6
const a = 3; // 3
const b = a + 1; // b = 4
a + b + a * b; // 40
a === b; // false
b > a && b < a * b ? b : a; // returns b which is 4
a === 4
? 6
: b === 4 
? 6 + 7 + a // returns 16
: 25; 
2 + (b > a ? b : a); // returns b which is 4, plus two = 6
(a > b
 ? a
 : a < b
 ? b 
 : -1)
*
(a + 1); // returns 16