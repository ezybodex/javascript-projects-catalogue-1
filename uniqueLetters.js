/* Unique Letters
Input: a string like "ilovetocode"
OUtput: that string, but with only one of each letter
Return value would be ilovetcd */


function uniqueLetters (inputStr) {
    let result = " ";
    for (let i=0; i < inputStr.length; i += 1 ) {
        const unique = inputStr[i];
        // If we have not seen this CHAR yet,
        if (!result.includes(unique)) {
            // ! states NOT. Then add it to the string
                result += unique;
        }
    }
    return result;
}

console.log(uniqueLetters("olabode"));

