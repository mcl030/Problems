/*

Given a string s, return the longest palindromic substring in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
Example 3:

Input: s = "a"
Output: "a"
Example 4:

Input: s = "ac"
Output: "a"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.

*/

const longestPalindrome = function(s) {
  let longestSubstring = '';
  
  const findLongest = function(i, j) {
    // While our argument indexes are still in-bounds and characters at argument indexes are equal to each other, expand outwards
    while (i >= 0 && j < s.length && s[i] === s[j]) {
          i -= 1;
          j += 1;
      }
      // Once the indexes are no longer in-bounds or characters do not match, return a slice of characters from previous while loop iteration
      return s.slice(i + 1, j);
  }
  // Iterate through input string
  for (let i = 0; i < s.length; i += 1) {
      // Invoke two variations of findLongest on each character of input string
        // One looking for odd palindromes and one for even palindromes
      const oddPalin = findLongest(i, i);
      const evenPalin = findLongest(i, i + 1);
      // Compare odd and even invocation lengths
      const curLongestSubstring = oddPalin.length > evenPalin.length ? oddPalin : evenPalin;
      // Reassign longestSubstring to curLongestSubstring if curLongest is longer
      longestSubstring = curLongestSubstring.length > longestSubstring.length ? curLongestSubstring : longestSubstring;
  }
  return longestSubstring;
};