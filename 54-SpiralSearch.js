/*

Given an m x n matrix, return all elements of the matrix in spiral order.

 

Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:


Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100

*/

const spiralOrder = function(matrix) {
  const result = [];
  let direction = 1;

  const traverse = function(i, j) {
    if (checkBounds(i, j)) {
      result.push(matrix[i][j]);
      matrix[i][j] = undefined;
      if (direction === 0) {
        traverse(i - 1, j);
        direction += 1;
      }
      if (direction === 1) {
        traverse(i, j + 1);
        direction += 1;
      }
      if (direction === 2) {
        traverse(i + 1, j);
        direction += 1;
      }
      if (direction === 3) {
        traverse(i, j - 1);
        direction = 0;
        traverse(i - 1, j);
      }
    } else {
      return;
    }
  }

  const checkBounds = function(i, j) {
    if (matrix[i] !== undefined && matrix[i][j] !== undefined) {
      return true;
    } else {
      return false;
    }
  }
  
  traverse(0, 0);
  
  return result;
};
