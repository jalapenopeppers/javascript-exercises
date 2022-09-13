const sumAll = function(firstNum, lastNum) {
  let sum = 0;

  if (firstNum < 0 || lastNum < 0) {
    sum = 'ERROR';
  } else if (typeof firstNum !== 'number' || typeof lastNum !== 'number') {
    sum = 'ERROR';
  } else {
    do {
      sum += firstNum;
      firstNum < lastNum ? firstNum++ : firstNum--;
    } while (firstNum !== lastNum);
    sum += lastNum;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
