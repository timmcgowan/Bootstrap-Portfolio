$(document).ready(function() {
    
      var pbj = 0;
      var cheese = 0;
      var beef = 0;


        $("#pbj").on("click", function() {
            alert("Peanut butter jelly time");
            pbj = pbj + 1;
            alert("Pbj count: " + pbj)
        });

        $("#grilledcheese").on("click", function() {
            alert("Grilled Cheese yum");
            cheese = cheese + 1;
            alert("grilled cheese count: " + cheese)
        });

        $("#roastbeef").on("click", function() {
            alert("Roast Beef Time");
            beef = beef + 1;
            alert("roast beef count: " + beef)
        });

    });