const palindromes = function (word) {
    let array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q',
    'r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0'];
    let newWord = '';

    for(let a = 0; a < word.length; a++){
        let letter = word.charAt(a);
        letter = letter.toLowerCase();
        if(array.includes(letter)){
            newWord = newWord + letter;
        }
    }

    for(let a = 0, b = newWord.length-1; b > -1; b--,a++){
        if(newWord[a]!=newWord[b]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
