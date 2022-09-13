const reverseString = function(str) {
  let outputStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    outputStr = outputStr + str.charAt(i);
  }

  return outputStr;
};

// Do not edit below this line
module.exports = reverseString;
