const convertToCelsius = function(tempA) {
  let temp = 5/9 * (tempA-32);
  return Math.round(temp * 10) / 10;
};

const convertToFahrenheit = function(tempA) {
  let temp = tempA * (9/5) + 32;
  return Math.round(temp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
