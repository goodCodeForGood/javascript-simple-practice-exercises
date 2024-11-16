const sumAll = function (start, end) {
  let sum = 0;

  // if not an integer
  if (!Number.isInteger(start) || !Number.isInteger(end)) {
    return "ERROR";
  }

  if (start < 0 || end < 0) {
    // if negative numbers
    return "ERROR";
  }

  if (start > end) {
    [start, end] = [end, start];
  }

  if (start <= end) {
    for (let i = start; i <= end; i++) {
      sum += i;
    }
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;

/*
(5, 2)


*/
