

export var romanTranslate = function(input) {
  var romanNumerals = ["M", "CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  var baseTen = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var result = "";
  var tempInput = input;
  if(input < 4000){
   for(var v = 0; v < romanNumerals.length; v++) {
    while(tempInput >= baseTen[v]) {
      result += romanNumerals[v];
      tempInput -= baseTen[v];
      }
    }
    return result;
  } else {
    var tooHigh = "You can only use roman numerals to describe numbers under 4000!";
    return tooHigh;
  }
};
