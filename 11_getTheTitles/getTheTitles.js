const getTheTitles = function(books) {
    let array = [];
    for(let a = 0; a < books.length; a++){
        array.push(books[a].title);
    }
    
    return array;
};

// Do not edit below this line
module.exports = getTheTitles;
