/*

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

Example 1:


Input: board = [
["A","B","C","E"],
["S","F","C","S"],
["A","D","E","E"]
], word = "ABCCED"
Output: true
Example 2:


Input: board = [
["A","B","C","E"],
["S","F","C","S"],
["A","D","E","E"]
], word = "SEE"
Output: true
Example 3:


Input: board = [
["A","B","C","E"],
["S","F","C","S"],
["A","D","E","E"]
], word = "ABCB"
Output: false
 

Constraints:

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.
 

Follow up: Could you use search pruning to make your solution faster with a larger board?

*/

const exist = function(board, word) {
  let result = false;
  
  const traverse = function(curBoard, curWord, idx, y, x) {
    
    const checkBounds = function(y, x) {
      if (curBoard[y] !== undefined && curBoard[y][x] !== undefined) {
        return true;
      }
      return false;
    }
    if (curWord === word) {
      result = true;
      return;
    }
    
    if (curBoard[y][x] === word[idx] && result === false) {
      const temp = curBoard[y][x];
      curBoard[y][x] = undefined;
      
      if (checkBounds(y + 1, x)) {
        traverse(curBoard, curWord + curBoard[y+1][x], idx + 1, y + 1, x);
      };
      
      if (checkBounds(y - 1, x)) {
        traverse(curBoard, curWord + curBoard[y-1][x], idx + 1, y - 1, x);
      };
      
      if (checkBounds(y, x + 1)) {
        traverse(curBoard, curWord + curBoard[y][x+1], idx + 1, y, x + 1);
      };
      
      if (checkBounds(y, x - 1)) {
        traverse(curBoard, curWord + curBoard[y][x-1], idx + 1, y, x - 1);
      };
      
      curBoard[y][x] = temp;
    }   
  }
  
  for (let i = 0; i < board.length; i += 1) {
    if (result === true) {
      break;
    }
    for (let j = 0; j < board[i].length; j += 1) {
      if (board[i][j] === word[0]) {
        traverse(board, board[i][j], 0, i, j);
      }
      if (result === true) {
        break;
      }
    }
  }
  
  return result;
};