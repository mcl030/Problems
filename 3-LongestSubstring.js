/*

Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.

*/

const lengthOfLongestSubstring = function(s) {
  // declare variables to keep track of: 
  // longest substring length with no repeating chars
  // current string with no repeating chars
  // current position of first occurence of letter in substring
  let max = 0, curStr = "", pos;  

  // loop through original string
  for (let i = 0; i < s.length; i += 1) {
      // reassign position to result of .indexOf current character on current substring
      pos = curStr.indexOf(s[i]);
      // pos will be -1 if current character is not found in substring, skipping if conditional
      // if conditional will trigger if current character is already in substring, causing curStr to remove all characters before and including the first mention of the character
      if (pos !== -1) {
        curStr = curStr.slice(pos + 1);
      }
      // add current char to current string
      curStr += s[i];
      // compare current string length to max
      max = Math.max(max, curStr.length);
  }
  return max;
};