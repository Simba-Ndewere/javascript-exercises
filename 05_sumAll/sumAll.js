const sumAll = function(num1,num2) {
    let total = 0;
    if(num1 < 0 || num2 < 0) return 'ERROR';
    if(typeof num1 !== 'number' || typeof num2 !== 'number') return 'ERROR';

    if(num1 < num2){
        while(num1<=num2){
            total+=num1;
            num1++;
        }
    }else{
        while(num2<=num1){
            total+=num2;
            num2++;
        }
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
