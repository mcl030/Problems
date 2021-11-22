/*



*/

// This solution works because Roman numerals are ordered from largest to smallest
const romanToInt = function(s) {
  // Create key/value pairs of Roman numerals and integers associated with
  const values = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50, 
    'C' : 100,
    'D' : 500,
    'M' : 1000
  };
  // Create integer value that will change based on current Roman numeral
  let integer = 0;
  // Iterate through Roman numeral string
  for (let i = 0; i < s.length; i += 1) {
    // If value of current Roman numeral is less than the value of the next Roman numeral, decrease integer by Roman numeral value
    if (values[s[i]] < values[s[i + 1]]) {
      integer -= values[s[i]];
    // Else, increase integer by Roman numeral value
    } else {
      integer += values[s[i]];
    }
  }
  // Return integer
  return integer;
};