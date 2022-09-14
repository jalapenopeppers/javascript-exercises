const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(argArray) {
  let sum = 0;
	argArray.forEach(arg => sum += arg);
  return sum;
};

const multiply = function(argArray) {
  let product = 1;
  argArray.forEach(arg => product *= arg);
  return product;
};

const power = function(a ,b) {
	return a ** b;
};

const factorial = function(num) {
	return num <= 1 ? 1 : num * factorial(num - 1);
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
