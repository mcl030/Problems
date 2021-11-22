/*

On an infinite plane, a robot initially stands at (0, 0) and faces north. The robot can receive one of three instructions:

"G": go straight 1 unit;
"L": turn 90 degrees to the left;
"R": turn 90 degrees to the right.
The robot performs the instructions given in order, and repeats them forever.

Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.

 

Example 1:

Input: instructions = "GGLLGG"
Output: true
Explanation: The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0).
When repeating these instructions, the robot remains in the circle of radius 2 centered at the origin.
Example 2:

Input: instructions = "GG"
Output: false
Explanation: The robot moves north indefinitely.
Example 3:

Input: instructions = "GL"
Output: true
Explanation: The robot moves from (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ...
 

Constraints:

1 <= instructions.length <= 100
instructions[i] is 'G', 'L' or, 'R'.

*/

const isRobotBounded = function(instructions) {
  const position = [0,0];
  // direction is either 0, 1, 2, 3 => 0 is North, 1 is East, 2 is South, 3 is West
  let direction = 0;
  
  // create function to execute all instructions once
  const executeInstructions = function() {
    for (let i = 0; i < instructions.length; i += 1) {
      // turn 90 degrees left
      if (instructions[i] === 'L') {
        direction -= 1;
        if (direction < 0) {
          direction = 3;
        }
      }
      // turn 90 degrees right
      if (instructions[i] === 'R') {
        direction += 1;
        if (direction > 3) {
          direction = 0;
        }
      }
      // go straight in current direction
      if (instructions[i] === 'G') {
        if (direction === 0) {
          position[1] += 1;
        }
        if (direction === 1) {
          position[0] += 1;
        }
        if (direction === 2) {
          position[1] -= 1;
        }
        if (direction === 3) {
          position[0] -= 1;
        }
      }
    }
  }
  
  // run executeInstructions four times
  for (let i = 0; i < 4; i += 1) {
    executeInstructions();
  }
  
  // if position is back at start, return true => otherwise, return false
  if (position[0] === 0 && position[1] === 0) {
    return true;
  } else {
    return false;
  }
};