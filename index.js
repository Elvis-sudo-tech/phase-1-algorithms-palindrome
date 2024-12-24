function isPalindrome(word) {
  // Reverse the string and compare it with the original string
  return word === word.split('').reverse().join('');
}

/* 
  Test cases:
  1. 'abba' => true (it's the same forwards and backwards)
  2. 'racecar' => true (it's the same forwards and backwards)
  3. 'a' => true (a single letter is always a palindrome)
  4. 'robot' => false (it's not the same forwards and backwards)
  5. 'ab' => false (it's not the same forwards and backwards)
*/

// Testing the function
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;

