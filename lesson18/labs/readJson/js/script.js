$('#btn').click(function(){
	var data = $('#data').val(); 
	console.log(data); 

	$.getJSON(data, function(json, textStatus,jqXHR){
		$('#result').append('<p>This is the result:</p>'); 
		console.log(json); 
		for (var i = 0; i < json.length; i++){
			$('#result').append('<p>name: ' + json[i].name + '</p>'); 

		}
	})
}); 


