const repeatString = function(str, iterations) {
  let outputStr = '';

  if (iterations >= 0) {
    for (let i = 0; i < iterations; i++) {
      outputStr = outputStr + str;
    }
  } else {
    outputStr = 'ERROR';
  }

  return outputStr;
};

// Do not edit below this line
module.exports = repeatString;
