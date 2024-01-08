const fibonacci = function() {
    if(arguments[0] < 0) return "OOPS";
    let a = 0;
    let b = 1;
    let c = 0;
    for(let counter = 0; counter <= arguments[0]; counter++){
        c = a + b;
        if(counter==arguments[0]){
            return a;
        }
        a = b;
        b = c;
    }
};

// Do not edit below this line
module.exports = fibonacci;
