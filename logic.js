// When the factButton is clicked...
$("#factButton").on("click", function() {
	// We generate a random number between 0 and 4 (the number of facts in the DogfactArray)
	var number = Math.floor((Math.random() * booFacts.length));
	// We display the fact from the dogFactArray that is the random position we just generated.
	$("#factText").text(booFacts[number])
})

// This array holds all of our Boo The Dog facts!
// Here I added quotations to each Boo fact so it can appear correctly.
var booFacts = ["Boo is a pomeranian" , "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books"]

// When the textPnk button is pressed...
$("#textPink").on("click", function() {
	// Change funText to pink.
	//I added quotations to "pink", seemed to be missing them!
	$("#funText").css("color", "pink")
})

// When the textOrange button is pressed...
$("#textOrange").on("click", function() {
	//Change funText to orange.
	$("#funText").css("color", "orange")
})

$("#textGreen").on("click", function() {

	$("#funText").css("color", "green")
})

// I added the quotations for "click" to operate correctly
$("#boxGrow").on("click", function() {

	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

//I added quotations for "click" to operate correctly
$("#boxShrink").on("click", function() {

	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})