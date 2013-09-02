

$(function(){
	console.log('123'); 
	$('h2').css('background','white'); 
	$('h2').before("Hello"); 
	$('h2').after("Bye"); 
	$('p').wrap('<div>Yo</div>'); 
	$('p').append("Wheeeeee"); 
	$('p').prepend("Woooohooooooo"); 

	
	id = setInterval("$('#container').toggleClass('colored-container')", 1500);
}); 


