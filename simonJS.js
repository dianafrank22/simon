"use strict";
$('document').ready(function() {
	var clickNumber = 0
	var green = $('.green');
	var red = $('.red');
	var blue = $('.blue');
	var yellow = $('.yellow');
	var box = $('box');
	var colors = [goGreen, goRed, goBlue, goYellow];
	var sequence = [];
	var sequenceActive = false;
	



	var reset = function(){
		green.removeClass("glowGreen");
		red.removeClass("glowRed");
		blue.removeClass("glowBlue");
		yellow.removeClass("glowYellow");
	}


	// light up the colors
	var goGreen = function(){
		green.toggleClass("glowGreen");
		console.log('flashing green')
		setTimeout(function(){
			reset()
		},1000)
	};

	var goRed = function(){
		red.toggleClass("glowRed");
		console.log('flashing red')
		setTimeout(function(){
			reset()
		},1000)
	};

	var goBlue = function(){
		blue.toggleClass("glowBlue");
		console.log('flashing blue')
		setTimeout(function(){
			reset()
		},1000)
	};

	var goYellow = function(){
		yellow.toggleClass("glowYellow");
		console.log('flashing yellow')
		setTimeout(function(){
			reset()
		},1000)
	};


// changes color when user clicks
var clickGreen = function(){
	setTimeout(function(){
			$(".green").click(function(){
			$(this).toggleClass("glowGreen");
	 })
	},1000);
};
clickGreen();

var clickRed = function(){	
	setTimeout(function(){
			$(".red").click(function(){
			$(this).toggleClass("glowRed");
	 })
	},1000);
};
clickRed();

var clickBlue = function(){
	setTimeout(function(){
			$(".blue").click(function(){
			$(this).toggleClass("glowBlue");
		})
	},1000);
};
clickBlue();

var clickYellow = function(){
	setTimeout(function(){
	 		$(".yellow").click(function(){
			$(this).toggleClass("glowYellow");
 		})
	},1000);
};
clickYellow();


	// choose a color randomly
	var rand = function() {
			var number = (Math.floor(Math.random() * colors.length));
			sequence.push(number);
			//console.log('pushing '+number)
	};

	// display the color chosen by var rand
	var showSequence = function(){
	//$('.box').remove('click');
	sequenceActive = true;
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
			setTimeout(f, i * 2000)
		}
		clickNumber = 0;
		setTimeout(function(){
			sequenceActive = false;
		}, sequence.length * 2000)
		
		//listenForClick();
	};

	// make start button begin the game (i.e. choosing )
	// var beginGame = function(){
	$("#start").click(function(){
		console.log('clicked start')
		rand();
		showSequence();
	})





// checking to see if user clicks matches color chosen by computer
// clicksOnTurn increases each time you click, sequence goes through index up to
// that number
// change text to number of sequence array

$('.box').on('click', function(e){
	if (sequenceActive){
		return;
	}
	var actual = sequence[clickNumber]
	var guess = this.id
	verifyClick(guess, actual);
});

var verifyClick = function(guess, actual){
	if (guess == actual){
			console.log('right')
			clickNumber++
			if (clickNumber < sequence.length){
			}else{
				$('#start').text("Correct! Onto Round " + (parseInt(sequence.length)+1));
				rand()
				showSequence()
			}
	}else{
			$('#start').text("Wrong! You loose! Click to play again!");	
			clickNumber=0;
			  var playerName = prompt("You have a high score! Enter your name!")
        var highScore = $('.highScores').append('<li>'+playerName+ " "+ ((sequence.length) -1)+ " rounds" +'</li>');
    		sequence = [];

	}
};





}); 


