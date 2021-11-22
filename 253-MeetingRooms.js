/*

Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

 

Example 1:

Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2
Example 2:

Input: intervals = [[7,10],[2,4]]
Output: 1
 

Constraints:

1 <= intervals.length <= 104
0 <= starti < endi <= 106

*/


const minMeetingRooms = function(intervals) {
  if (!intervals || intervals.length < 1) {
    return 0;
  }
  let rooms = 0;
  let curEnd = 0;
  const starts = intervals.map(a => a[0]).sort((a, b) => a-b);
  const ends = intervals.map(a => a[1]).sort((a, b) => a-b);
  for(let curStart = 0; curStart < intervals.length; curStart++) {
    if(starts[curStart] < ends[curEnd]) {
      rooms += 1;
    } else {
      curEnd += 1;
    }
  }
  return rooms;
};

/* Ex.
      starts  =>  [0, 5, 15]
      ends    =>  [10, 20, 30]
      rooms = 0, end = 0;

      starts[0] = 0 compared to ends[0] = 10;
      rooms = 1, end = 0;
      starts[1] = 5 compared to ends[0] = 10;
      rooms = 2, end = 0;
      starts[2] = 15 compared to ends[0] = 10;
      rooms = 2, end = 1;
*/