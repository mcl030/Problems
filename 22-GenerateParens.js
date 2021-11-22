/*

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
 

Constraints:

1 <= n <= 8

*/

const generateParenthesis = function(n) {
  const result = [];
  const addParens = function(curCombination, numOpen, numClosed) {
    // If curCombination's length is double input number, push curCombination to reuslt array
    // curCombination will always be valid combination
    if (curCombination.length === n * 2) {
      result.push(curCombination);
      return;
    }
    // As long as we still have opening parentheses left, invoke addParens again with opening parens appended to curCombination and numOpen decremented
    if (numOpen > 0) {
      addParens(curCombination + '(', numOpen - 1, numClosed);
    }
    // If numOpen is less than numClosed, we can invoke addParens again with closing parens appended to curCombination and numClosed decremented
    if (numOpen < numClosed) {
      addParens(curCombination + ')', numOpen, numClosed - 1);
    }
  }
  // Start first invocation of addParens with empty string and numOpen and numClosed starting at input n
  addParens('', n, n)
  // Return result array
  return result;
};