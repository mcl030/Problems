/*

Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).

The replacement must be in place and use only constant extra memory.

 

Example 1:

Input: nums = [1,2,3]
Output: [1,3,2]
Example 2:

Input: nums = [3,2,1]
Output: [1,2,3]
Example 3:

Input: nums = [1,1,5]
Output: [1,5,1]
Example 4:

Input: nums = [1]
Output: [1]
 

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 100

*/

const nextPermutation = function(nums) {
  const findNextLargest = function(i, target) {
    while(nums[i + 1] > target) {
      i += 1;
    }
    return i;
  }
  // Create helper function to swap elements at indices i and j
  const swap = function(i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  // Iterate through nums starting from the end
  // Looking for the point in which the next element is less than the current element
  for (let i = nums.length - 1; i > 0; i -= 1) {
    if (nums[i] > nums[i - 1]) {
      const nextLargestIdx = findNextLargest(i, nums[i - 1]);
      swap(i - 1, nextLargestIdx);
      let start = i;
      let end = nums.length-1;
      while(start < end) {
        swap(start, end);
        start++;
        end--;
      }
      return;
    }
  }
  // If inflection point does not exist, sort nums
  nums.sort((a, b) => a - b);
  return;
};