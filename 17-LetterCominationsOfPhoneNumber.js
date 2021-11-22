/*

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



 

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].

*/

const letterCombinations = function(digits) {
  if (digits.length < 1) {
    return [];
  }
  
  const numpad = {
    '2' : ['a', 'b', 'c'], 
    '3' : ['d', 'e', 'f'], 
    '4' : ['g', 'h', 'i'], 
    '5' : ['j', 'k', 'l'], 
    '6' : ['m', 'n', 'o'], 
    '7' : ['p', 'q', 'r', 's'], 
    '8' : ['t', 'u', 'v'], 
    '9' : ['w', 'x', 'y', 'z']
  }
  
  const result = [];
  
  const findCombinations = function(curStr, i) {
    // Once index surpasses input string length, push curStr to results array
    if (i === digits.length) {
      result.push(curStr);
      return;
    }
    // Create new invocations of findCombinations based on current number, one for each letter associated with the current number. Increment index counter as well. 
    for (let j = 0; j < numpad[digits[i]].length; j += 1) {
      findCombinations(curStr + numpad[digits[i]][j], i + 1)
    }
  }
  // Start first invocation of findCombinations with empty string and index 0 as arguments
  findCombinations('', 0);
  // Return result array of all letter combinations
  return result;
};