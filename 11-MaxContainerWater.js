/*

Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.

 

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
Example 3:

Input: height = [4,3,2,1,4]
Output: 16
Example 4:

Input: height = [1,2,1]
Output: 2
 

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104

*/

const maxArea = function(height) {
  // Declare maxArea variable to keep track of maxArea of water
  let maxArea = 0;
  
  const findArea = function(start, end) {
    if (start > end) {
      return;
    }
    // Check to see if curArea with start and end points is larger than maxArea
    if (Math.min(height[start], height[end])*(end-start) > maxArea) {
      maxArea = Math.min(height[start], height[end])*(end-start);
    }
    // Move either starting or ending point based on their heights
    // Keep higher point, move other inwards
    if (height[start] < height[end]) {
      findArea(start + 1, end);
    } else {
      findArea(start, end - 1);
    }
  }
  // Start and end points initialize as outer-most points
  findArea(0, height.length - 1);
  // Return maxArea
  return maxArea;
};