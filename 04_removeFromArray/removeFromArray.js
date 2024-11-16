// Use "..." (rest syntax) to put all possible args (even multiple ones) into "args" array
const removeFromArray = function (array, ...args) {
  let new_array = [];

  array.forEach((element) => {
    // if the element is not included in the array of args, add it to new array
    // otherwise, that element is not added to new array
    if (!args.includes(element)) {
      new_array.push(element);
    }
  });
  return new_array;
};

// Do not edit below this line
module.exports = removeFromArray;
