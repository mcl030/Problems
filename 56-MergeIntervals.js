/*

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

*/

const merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const results = [intervals[0]];
  for (let i = 1; i < intervals.length; i += 1) {
      console.log('comparing', results[results.length - 1], intervals[i])
      if (results[results.length - 1][1] >= intervals[i][0]) {
          results[results.length - 1][1] = Math.max(results[results.length - 1][1], intervals[i][1]);
      }   else {
          results.push(intervals[i])
      }
  }
  return results;
};