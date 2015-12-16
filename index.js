$('document').ready(function(){


var green = $('.green');
var red= $('red');
var blue = $('blue');
var yellow =$('yellow');
var lightGreen = $(".lightGreen");






$(".green").on("click", function() {
    $(this).toggleClass("lightGreen");
}) 

});
// click function on button to start random selection of buttons to light up

// animate to toggle class? 

// math.floor(math.radom()* color.length)

// var sequence = "";
// // empty sequence to start
// // after every round, if they match the sequence with clicks, then add onto last sequence
// sequence += color
	
// });