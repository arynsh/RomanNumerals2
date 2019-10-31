var romanTranslate = function(input) {
  var romanNumerals = ["M", "CM","D", "CD","C","XC", "L","LX","X","V","VI","I"];
  var baseTen = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 5, 4, 1];
  var result = "";
  var tempInput = input;
  if(input < 4000){
   for(v = 0; v < romanNumerals.length; v++) {
    while(tempInput >= baseTen[v]) {
      result += romanNumerals[v];
      tempInput -= baseTen[v];
      }
    }
    return result;
  } else {
    alert("You can only use roman numerals to describe numbers under 4000!")
  }
}





$(document).ready(function(){
  $("form#number").submit(function(event){
    event.preventDefault();

  var input = $("#inputNumbers").val();
  $("#result").append(romanTranslate(input));

  });
});
