import { romanTranslate } from './scripts.js';

$(document).ready(function(){
  $("form#number").submit(function(event){
    event.preventDefault();

  var input = $("#inputNumbers").val();
  $("#result").append(romanTranslate(input) + "<br>");

  });
});
