

    <script type="text/javascript" src="https://code.jquery.com/jquery-2.2.0.min.js">


 	var targetNumber = 47;


 	$("#number-to-start").text(targetNumber);

 	var counter = 0;

 	// In order to assign a new number to each crystal we need to give a random number choice for each of them. We use code that selects number options.
 	// Using an array is the way to go.

 	var numberOptions = [3, 7, 10, 2];

 	// var increment = numberOptions[Math.round(Math.random())];

 	// Each stone needs a number assigned to it.
 	for (var i = 0; i < numberOptions.length; i++) 
 	{
		var imageStone = $("<img>");

		 	// console.log("imageStone");

		// Each stone will be given the class " .stone-image".

			// The css will work.
			imageStone.addClass("stone-image");
			
				// console.log("stone-image")
			// then assigned an image in css

			// Each will get the data value

			imageStone.attr("data-stonevalue", numberOptions[i]);

			// Finally each stone will get added to the page.

			$("#stone").append(imageStone);

	}


 	$(".stone-image").on("click", function() {
 			alert("You pressed the stone image." + counter + " times!");

 			console.log("tell me")
 		// Determining the stone's value requires us to extract the value from the data attribute.
	    // Using the $(this) keyword specifies that we should be extracting the stone value of the clicked stone.
	    // Using the .attr("data-stonevalue") allows us to grab the value out of the "data-stonevalue" attribute.
	    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
 		var stoneValue = ($(this).attr("data-stonevalue"));
 		stoneValue = parseInt(stoneValue);

 		debugger

 		// we then add the stoneValue to the user's counter which is a global variable. 
 		// Every click from the stones add to the global counter.
 		counter += stoneValue;

 		// All the rest of the logic remains the same.
 		
 		alert("New score: " + counter);

 		if (counter === targetNumber) {
 		// We then input the new counter value each time the crystal is clicked.
 		alert("You win!");

 		}

 		// If the user's counter exceeds the target number...

 		else if (counter >= targetNumber) {

 			alert("You lose!");
 		}

 		});

	
		
</script>
