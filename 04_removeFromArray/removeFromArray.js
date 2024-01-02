const removeFromArray = function() {
    for(let a = 1; a < arguments.length; a++){
        if(!arguments[0].includes(arguments[a])){
            continue;
        }
        let indexOfNumber = arguments[0].indexOf(arguments[a]);
        arguments[0].splice(indexOfNumber,1);
    }
    console.log(arguments[0]);
    return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;
