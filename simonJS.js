"use strict";
$('document').ready(function() {

	var green = $('.green');
	var red = $('.red');
	var blue = $('.blue');
	var yellow = $('.yellow');
	var colors = [goGreen, goRed, goBlue, goYellow];
	var sequence = [];

	var reset = function(){
		green.removeClass("glowGreen");
		red.removeClass("glowRed");
		blue.removeClass("glowBlue");
		yellow.removeClass("glowYellow");
	}



// light up the colors
	var goGreen = function(){
		reset()
		green.toggleClass("glowGreen");
		};

	var goRed = function(){
		reset()
		red.toggleClass("glowRed");
		};

	var goBlue = function(){
		reset()
		blue.toggleClass("glowBlue");
		};

	var goYellow = function(){
		reset()
		yellow.toggleClass("glowYellow");
		};

var time = setTimeout(function(){
	goGreen();
	goRed();
	goBlue();
	goYellow();

}, 2000)


// choose a color randomly
	var rand = function() {
			var number = (Math.floor(Math.random() * colors.length));
			sequence.push(number);
			
	};


// display the color chosen by var rand
var showSequence = function(){
 for (var i = 0; i < sequence.length; i++)  {
 		var f;
 		switch(sequence[i]){
			case 0: 
				f=goGreen; 
				break;
	
			case 1:
				f=goRed;
				break;

			case 2:
				f=goBlue;
				break;
	
			case 3:
				f=goYellow;
				break;
		}
		setTimeout(f, i * 1500)
	}
};




// make start button begin the game (i.e. choosing )
var beginGame = function(){
		$(".start_btn").click(function(){
			rand();
			showSequence();
		})
	};

beginGame();



// checking to see if user clicks matches color chosen by computer
// clicksOnTurn increases each time you click, sequence goes through index up to
// that number
	var clicksOnTurn = 0;
	var userClick = $('.box').click(function(e){
		if (e.target.id == sequence[clicksOnTurn]){
			clicksOnTurn ++
			rand();
			showSequence();
	} else {
			// console.log("lose!")
			$(".button").text("You lost :(! Click to Play Again");
			var clicksOnTurn = 0;
			var sequence = [];
	}
});








}); 