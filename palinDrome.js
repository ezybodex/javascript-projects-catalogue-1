// look at the first and last letter and see if they're the same
   // If not, then it is not a palindrome
   // If they are the same, then look at the 2nd and 2nd-to-last letter
   // If those are the same, then look at the 3rd and 3rd-to-last letter


   function isPalindrome(word) {
    let start = 0;
    let end = word.length - 1;
  
    // keep going until "start" index meets/passes "end" index
    while (start < end) {
      // console.log("start is", start, "and end is", end);
      if (word[start] === word[end]) {
        start += 1;
        end -= 1;
      }
      else {
        return false;
      }
    }
    return true;
  }
  
  console.log(isPalindrome("radar")); // true
  console.log(isPalindrome("hello")); // false
  console.log(isPalindrome("Ola")); // false
  console.log(isPalindrome("mom")); // true