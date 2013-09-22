$(document).ready(function(){

$('.animalbox img').css('width','245px'); 

$('div .animalbox > img').after('<br>'); 

$('br + p').addClass('location').prepend('<img src="./images/marker.jpg" width="15px">' + ' '); 

$('.animalbox img').hover(function(){
	$(this).animate({opacity: 0.9}, 50);
}, function(){
	$(this).animate({opacity: 1}, 50)
}); 



}); 

