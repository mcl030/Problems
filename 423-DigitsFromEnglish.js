/*

Given a string s containing an out-of-order English representation of digits 0-9, return the digits in ascending order.

 

Example 1:

Input: s = "owoztneoer"
Output: "012"
Example 2:

Input: s = "fviefuro"
Output: "45"
 

Constraints:

1 <= s.length <= 105
s[i] is one of the characters ["e","g","f","i","h","o","n","s","r","u","t","w","v","x","z"].
s is guaranteed to be valid.

*/

const originalDigits = function(s) {
  const count = new Array(10).fill(0);
  
  for (let i = 0; i < s.length; i += 1) {
    // unique DONE
    if (s[i] === 'z') {
      count[0] += 1;
    }
    // shares o with 0, 2, 4 DONE
    if (s[i] === 'o') {
      count[1] += 1;
    }
    // unique DONE
    if (s[i] === 'w') {
      count[2] += 1;
    }
    // shares h with 8 DONE
    if (s[i] === 'h') {
      count[3] += 1;
    }
    // unique DONE
    if (s[i] === 'u') {
      count[4] += 1;
    }
    // shares f with 4 DONE
    if (s[i] === 'f') {
      count[5] += 1;
    }
    // unique DONE
    if (s[i] === 'x') {
      count[6] += 1;
    }
    // shares v with 5 DONE
    if (s[i] === 'v') {
      count[7] += 1;
    }
    // unique DONE
    if (s[i] === 'g') {
      count[8] += 1;
    }
    // shares i with 5, 6, 8
    if (s[i] === 'i') {
      count[9] += 1;
    }
  }
  
  count[3] -= count[8];
  count[5] -= count[4];
  count[7] -= count[5];
  count[1] -= count[0] + count[2] + count[4];
  count[9] -= count[5] + count[6] + count[8];
  
  let result = '';
  for (let i = 0; i <= 9; i += 1) {
    for (let j = 0; j < count[i]; j += 1) {
      result += i;  
    }
  }
  return result;
};