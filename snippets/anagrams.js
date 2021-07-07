/*
  Given two strings, write a function to determine if the second string
  is an anagram fo the first.  An anagram is a word, phrase, or name formed
  by rearranging the letters of another, such as cinema, formed from iceman.
*/

// using frequency counter pattern
// O(n) time
function validAnagram(str1, str2) {
  // quick check
  if (str1.length !== str2.length) {
    return false;
  }
  // counters
  let counter1 = {};
  let counter2 = {};
  // loops
  for (const char of str1) {
    counter1[char] = (counter1[char] || 0) + 1;
  }
  for (const char of str2) {
    counter2[char] = (counter2[char] || 0) + 1;
  }
  // loop and compare
  for (const key in counter1) {
    if (counter1[key] !== counter2[key]) {
      return false;
    }
  }
  // return true if not false
  return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
