"use strict";
$('document').ready(function() {

	var goGreen = function(){
		$(this).toggleClass("glowGreen");
		};

	var goRed =$("div.red").click(function(){
		$(this).toggleClass("glowRed");
		});

	var goBlue = $("div.blue").click(function(){
		$(this).toggleClass("glowBlue");
		});

	var goYellow = $("div.yellow").click(function(){
			$(this).toggleClass("glowYellow");
			});

var colors = [goGreen, goRed, goBlue, goYellow];


var firstChoice = function(){
	var rand = (Math.floor(Math.random() * colors.length));
	var choice = colors[rand];
	switch 
	if choice = green 
		goGreen
	push to array to remember pattern
	if choice = red
		goRed
	push to array to remember pattern 


};


var beginGame = function(){
		$(".start_btn").click(function(){
			firstChoice();
		})
	};
beginGame();

// var sequence = 0;

// if else statement (if user guesses correctly, add onto sequence)
// else restart game, display on button, you lost, play again? 
// add click functions to colors? 
// var sequence = firstChoice += 1? similar to clock homework?
// create event listeners for click, push them into array (similar to glow function);
// create event listeners for user click, if that matches random colors, add sequence, if not restart game 




}); // End of ready