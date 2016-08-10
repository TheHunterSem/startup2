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

$(document).ready(function() { 
	$('a#login').click( function(event){ 
		event.preventDefault();
		 	$('#form-login').fadeIn(500);	
		});
	$('a#close-popup-login').click( function(event){ 
		event.preventDefault();
		 	$('#form-login').fadeOut(500);	
		});
	});
