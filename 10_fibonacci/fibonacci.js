const fibonacci = function(num) {
  if (num < 1) return "OOPS";

  let previousNum = 0;
  let currentNum = 1;
  let temp = 0;
  let index = 1;
  while (index < num) {
    temp = currentNum;
    currentNum += previousNum;
    previousNum = temp;
    index++;
  }
  return currentNum;
};

// Do not edit below this line
module.exports = fibonacci;
