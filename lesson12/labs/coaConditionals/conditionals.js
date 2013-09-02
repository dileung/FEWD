	// this is a single line comment
	/*
	 * this is a multi-line comment
	 */

	 //Prompt the user for their name and last name. 

var firstname = prompt("What's your first name?"); 
var lastname = prompt("What's your last name?"); 

	//Create a new variable called full name and store the users full name.
	
	var fullname = firstname + " " + lastname; 
	
	//Print the full name to the console.
	
	console.log (fullname)

	//Prompt the user for their age.
	
var age = prompt ("How old are you")

	//Add 10 to the age and print the output to the console.
	
age = parseInt(age);
console.log (age + 10)
	
	//Verify that the user is over 18 and print if they are a minor or adult to the console.

if (age >= 18) {
	console.log("Adult")
} else {
	console.log("Minor")
}
	
	//Verify if the first name is "General" and the last name is NOT "Assembly"
if (firstname == "General" && lastname != "Assembly") {
	console.log ('true')
} else { console.log ('false')}

