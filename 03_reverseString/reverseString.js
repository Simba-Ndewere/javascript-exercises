const reverseString = function(word) {
    let reversedWord = '';
    for(let a = word.length-1; a > -1; a--){
        reversedWord = reversedWord + word[a];
    }
    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
