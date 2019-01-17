
$(document).ready(function() {

    var animal = prompt("type raccoon, goat or squirrel");

    if (animal.toUpperCase() === "RACCOON"){
      $('#raccoon').show();

    } else if (animal.toUpperCase() === "GOAT") {
      $('#goat').show();

    } else if (animal.toUpperCase() === "SQUIRREL") {
      $('#squirrel').show();

    } else if (animal.toUpperCase() !== animal ) {
      alert("please look at your spelling and retype");
    } else {
      return
    }


  })
