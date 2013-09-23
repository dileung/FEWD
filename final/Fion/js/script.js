$(document).ready(function(){

$('.animalbox > img').css('width','300px').after('<br>').addClass('animalpic').css("position","relative"); 

$('.animalbox > img').after('<a class="like" href="#"><img src="images/like_outline.jpg"></a>')

$('.like').css('position','absolute').css('top','30px').css('left','265px'); 

$('br + p').addClass('location').prepend('<img src="./images/marker.jpg" width="15px">' + ' '); 

$('.like').hide(); 

$('.animalpic').each(function(){
  $(this).hover(
    function(){
      $(this).animate({opacity: 0.9}, 50), $(this).siblings('.like').show(); 
    },
    function(){
      $(this).animate({opacity: 0.9}, 50), $(this).siblings('.like').hide();
    }
  );
});

$('p + a').addClass('species').css('padding-left','20px') 

$('.species').hover(function(){
	$(this).css('background-color','yellow'); 
}, function(){
	$(this).css('background-color','transparent'); 
})

$(window).load(function(){
  $('#maincontent').masonry({
     columnWidth: 170,
     itemSelector: '.animalbox'
    }).imagesLoaded(function() {
     $('#maincontent').masonry('reloadItems');
    });
}); 
}); 


  // <img src="a.jpg" style="position: relative; top: 0; left: 0;"/>
  // <img src="b.jpg" style="position: absolute; top: 30; left: 70;"/>