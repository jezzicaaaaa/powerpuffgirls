var labels = document.getElementsByTagName('label');
var bubbles = document.getElementById('bubbles');
var blossom = document.getElementById('blossom');
var buttercup = document.getElementById('buttercup')


$(function(){
	$('.quiz').hide();
	$('.final-result').hide();
	$('.takeQuiz').on('click', function(){

		$('.home').hide();
		$('.quiz').fadeIn();
		$('.final-result').hide();
	
		$('form').on('submit', function(e){
			e.preventDefault();
			whoIsYourChar();
			$('.try-again').on('click', function(){
				document.location.reload(true);
			});

		});
	});
});




//if radio button is selected, +1 to the selected answer
function whoIsYourChar(){

	//define vars

	var bubblesTrait = 0;
	var blossomTrait = 0;
	var buttercupTrait = 0; 
	//count totalchecks
	var totalChecks = 0;

	//result
	function finalResult(){
		$('.quiz').hide();
		$('.final-result').fadeIn();

		if ( bubblesTrait > buttercupTrait && bubblesTrait > blossomTrait ){
			$('#bubbles-result').fadeIn();
			$('#buttercup-result').hide();
			$('#blossom-result').hide();
		} else if ( buttercupTrait > bubblesTrait && buttercupTrait > blossomTrait ){
			$('#buttercup-result').fadeIn();
			$('#bubbles-result').hide();
			$('#blossom-result').hide();
		} else if ( blossomTrait > bubblesTrait && blossomTrait > buttercupTrait){
			$('#blossom-result').fadeIn();
			$('#buttercup-result').hide();
			$('#bubbles-result').hide();
		} 
	}



	for (var i = 1; i <= 5; i++) {
		var radios = document.getElementsByName('question'+i);
		//loop radio buttons in the group to know which one is checked and add +1 to value
	 	for(var j = 0; j < radios.length; j++) {
	 		var radio = radios[j];
	 			if(radio.value == "bubblesTrait" && radio.checked) {
	 				bubblesTrait++;
	 				totalChecks++;
	 			}
	 			if(radio.value == "blossomTrait" && radio.checked) {
	 				blossomTrait++;
	 				totalChecks++;
	 			}
	 			if(radio.value == "buttercupTrait" && radio.checked) {
	 				buttercupTrait++;
	 				totalChecks++;
	 			}
	 			console.log(totalChecks);
		}
	}
	if(totalChecks < 5) {
		alert("Please answer all the questions");
	} else {
		finalResult();
	}
}

//determine which character depends on the highest number of trait and alert


//player answers a question
//if answer === blossomTrait, blossom + 1
//if blossomTrait > bubblesTraits && buttercupTraits, then you are blossom
// function 