const findTheOldest = function(objectsArray) {
    let oldest = '';
    let currentAge = 0;
    const person = {
        name : ''
    };
    for(let a = 0; a < objectsArray.length; a++){
        let yearOfDeath = objectsArray[a].yearOfDeath;
        let yearOfBirth =  objectsArray[a].yearOfBirth;

        if(yearOfDeath === undefined){
            yearOfDeath = new Date().getFullYear();
        }
   
        if( yearOfDeath - yearOfBirth > currentAge){
            currentAge = yearOfDeath - yearOfBirth;
            oldest = objectsArray[a].name;
        }
    }
    person.name = oldest;
    return person;
};

// Do not edit below this line
module.exports = findTheOldest;
