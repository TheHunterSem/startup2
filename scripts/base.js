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


// --------------LOGIN-POPUP--------------

$(document).ready(function() { 
	$('a#login').click( function(event){ 
		event.preventDefault();
		 	$('#form-login').fadeIn(500);	
		});
	
	$('a#registration').click( function(event){ 
		event.preventDefault();
		 	$('#form-registration').fadeIn(500);	
		});

	$('a#close-popup').click( function(event){ 
		event.preventDefault();
		 	$('#form-login').fadeOut(500);	
		 	$('#form-registration').fadeOut(500);
		});
	});


$(document).ready(function() { 
	$('a#play-btn').click( function(event){ 
		event.preventDefault();
		 	$('#video-wrapper-content').fadeOut(300);
		 	$('#video').fadeIn(500);
			 			
		});
	});

$("a#play-btn").click(function(){
    document.getElementById("video").play();
    return false;
});

$("#video").click(function(){
    document.getElementById("video").pause();
    	$('#video').fadeOut(500);
    	$('#video-wrapper-content').fadeIn(500);
    return false;
});