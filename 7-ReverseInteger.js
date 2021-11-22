/*

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
Example 4:

Input: x = 0
Output: 0
 

Constraints:

-231 <= x <= 231 - 1

*/

const reverse = function(x) {
  // Keep track if original input number is positive or negative
  const isPos = (x === Math.abs(x));
  if (!isPos) {
    x = Math.abs(x);
  };
  // Convert number to string and reverse characters
  // Remove leading zeroes
  const reversed = Number(x.toString().split('').reverse().join('').replace(/\b0+/g, ''));
  // Check 32-bit bounds
  if (reversed < -2147483648 || reversed > 2147483647) {
    return 0;
  };
  // Return pos or negative versions based on isPos
  if (isPos) {
    return reversed;
  };
  return (0 - reversed);
};