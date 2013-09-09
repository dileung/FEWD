/*
	Only add code to this file.
*/

$('h1').hide(); 
$('h1~p').hide(); 

var ans = prompt("Do you know coding? Y or N") 
if (ans=="N"){
	alert("I have nothing cool to show you!")
} else if (ans=="Y"){
	$('.box').hide(1000); 
	$('.box2').css("background-color","blue").show(1000); 

} else {
	alert("nevermind"); 
}

