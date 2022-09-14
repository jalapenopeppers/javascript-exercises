const palindromes = function (str) {
  let originalArray = Array.from(str.split(''));
  for (let i = 0; i < originalArray.length; i++) {
    originalArray[i] = originalArray[i].toLowerCase();
  }
  originalArray = originalArray.filter(char => (/[a-zA-Z]/).test(char));
  let reversedArray = new Array(...originalArray);
  reversedArray.reverse();
  for (let j = 0; j < originalArray.length; j++) {
    if (originalArray[j] !== reversedArray[j]) return false;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
