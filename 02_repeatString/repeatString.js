const repeatString = function(word,number) {
    let finalWord = '';

    if(number < 0){
        return 'ERROR';
    }

    for(let a = 0; a < number; a++){
        finalWord = finalWord + word;
    }
    return finalWord;
};

// Do not edit below this line
module.exports = repeatString;
