const add = function() {
  return arguments[0] + arguments[1];
};

const subtract = function() {
  return arguments[0] - arguments[1];
};

const sum = function() {
  let b = 0;
  let arrayArg = arguments[0];

	for(let a = 0; a < arrayArg.length; a++){
    b = b + arrayArg[a];
  }
  return b;
};

const multiply = function() {
  let arrayArg = arguments[0];
  let b = arrayArg[0];

	for(let a = 1; a < arrayArg.length; a++){
    b = b * arrayArg[a];
  }
  return b;
};

const power = function() {
  let a = arguments[0];
  for(let b = 0; b < arguments[1]-1; b++){
    a = a * arguments[0];
  }
  return a;
};

const factorial = function() {
	if(arguments[0] === 0) return 1;
  let a = arguments[0];
  for(let b = arguments[0]-1; b > 0; b-- ){
    a = a * b;
  }
  return a;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
