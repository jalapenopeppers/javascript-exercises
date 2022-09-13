const removeFromArray = function(mainArray, ...elemsToRemove) {
  let elemsToRemoveArray = Array.from(elemsToRemove);
  
  for (elem of elemsToRemoveArray) {
    for (let i = 0; i < mainArray.length; i++) {
      if (elem === mainArray[i]) {
        mainArray.splice(i, 1);
        break;
      }
    }
  }

  /*
  // This solution also works as a powerful one-liner but its not very readable
  elemsToRemoveArray.forEach((elemToRemove) => 
    mainArray.forEach((elem, index) => elemToRemove === elem ? mainArray.splice(index, 1) : {})
  );
  */

  return mainArray;
};

// Do not edit below this line
module.exports = removeFromArray;
