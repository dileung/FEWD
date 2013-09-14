/* Write the JS neccesary to calculate values after a number is changed inside the form field.

Hints:
1.) Learn about change event methods: http://api.jquery.com/change/
2.) Learn about retrieving values from form inputs: http://api.jquery.com/val/
3.) Learn how to select specific inputs using eq selectors: http://api.jquery.com/eq-selector/

*/


$( "#app" ).on('change','div > input', function() {
	parent = $(this).parent()
	operators = ['+','-','*','/','%']
	op = $('#app > div').index(parent)

	one = parseInt(parent.find('input:eq(0)').val())
	two = parseInt(parent.find('input:eq(1)').val())
	
  	parent.find('input:eq(2)').val(calc(one,two,operators[op])) 
});

function calc(one, two, operator){
 	return eval(one + operator + two)
}

