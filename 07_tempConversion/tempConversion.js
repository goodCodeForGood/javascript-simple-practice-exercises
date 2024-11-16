const convertToCelsius = function(f_temp) {
   let c_temp = (f_temp - 32) * (5/9);
   // to round up to 1 decimal place
   let rounded_c_temp = Math.round(c_temp * 10) / 10; 
   return rounded_c_temp;
};

const convertToFahrenheit = function(c_temp) {
  let f_temp = (c_temp * (9/5)) + 32;
  // to round up to 1 decimal place
  let rounded_f_temp = Math.round(f_temp * 10) / 10; 
  return rounded_f_temp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
