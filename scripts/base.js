$(document).ready(function() { 
	$('a#hamburger').click( function(event){ 
		event.preventDefault();
		 	$('#nav-hamburger').toggle();		 			
		});
	});


$('.main-screen').slick({
	dots: true,
	arrows: false
});