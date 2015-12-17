$('document').ready(function() {

var green = $('.green');
var red= $('.red');
var blue = $('.blue');
var yellow =$('.yellow');
var lightGreen = $(".lightGreen");
var start = $('.start_btn');


var colors = [green, red, blue, yellow];


var firstChoice = function(){
	console.log(Math.floor(Math.random() * colors.length));

};



var beginGame = function(){
		$(".start_btn").click(function(){
			firstChoice();
		});

});








