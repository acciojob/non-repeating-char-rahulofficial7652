function firstNonRepeatedChar(str) {
 // Write your code here
	 const count = {};

  // Count frequency of each character
  for (let ch of str) {
    count[ch] = (count[ch] || 0) + 1;
  }

  // Find the first character with frequency 1
  for (let ch of str) {
    if (count[ch] === 1) {
      return ch;
    }
  }

  return null; // If all characters repeat
}

const input = prompt("Enter a string");
(firstNonRepeatedChar(input)); 
