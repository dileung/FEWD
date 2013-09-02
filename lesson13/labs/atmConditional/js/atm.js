/*

This is a banking application. This program will update your balance with your deposits and withdrawls.

-	Create 3 variables: balance, transaction, and amount.
-	The starting account balance is 1000$.
-	Ask for their transaction type (deposit, withdrawl).
-	Ask for the amount to withdraw or deposit.
-	Depending on their transaction choice either add or substract the balance. 
-	Print the new balance to the console.
*/

var balance = 1000; 
var t; 
var amount; 

while (t != 'q') {	
	t = prompt('(d)eposite, (w)ithdrawal or (q)uit?'); 
	if (t == 'd' || t == 'w'){
		amount = parseInt(prompt('How much?')); 
		(t == 'd') ? balance = balance + amount : balance = balance - amount;
	} else if (t != 'q') {
		console.log('error')
	} 
} 
console.log('Your new balance: $' + balance) 

