function hasMoreVowels(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let numVowels = 0;
    let numNonVowels = 0;
  
    for (let i = 0; i < word.length; i += 1) {
      if (vowels.includes(word[i].toLowerCase())) {
        numVowels += 1;
      }
      else {
        numNonVowels += 1;
      }
    }
  
    console.log(`${numVowels} vowels and ${numNonVowels} non-vowels`);
    if (numVowels > numNonVowels) {
      return true;
    }
    else {
      return false;
    }
    // one-line shorthand: return numVowels > numNonVowels;
  }

  console.log(hasMoreVowels('Vowels'));
  