//UNTIL THIS TEST, then check off the JS on TOP

const convertToCelsius = function(temp) {
  let result = (temp - 32) * (5/9);
  return Number(result.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  let result = (temp * (9/5)) + 32;
  return Number(result.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
