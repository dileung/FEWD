

$(function(){
	console.log('123')
var name = prompt("What is the account owners name?")
$('h2').html(name); 
var accountNum = prompt("What is the account number")
$('h3').html(accountNum); 
var today = new Date(); 
$('p').html("Customer since: " + today); 
$('blockquote').html(null); 
$('h1').text("User Account Information"); 
$('h3').after("Date Opened " + today); 
}); 

