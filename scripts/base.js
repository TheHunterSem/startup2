$(document).ready(function() { 
	$('a#hamburger').click( function(event){ 
		event.preventDefault();
		 	$('#nav-hamburger').toggle(300);	 			
		});	
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


// При нажатии на кнопку play, исчезает контент, и поя вляется видео
$(document).ready(function() { 
	$('a#play-btn').click( function(event){ 
		event.preventDefault();
		 	$('#video-wrapper-content').fadeOut(300);
		 	$('#video').fadeIn(500);		
		});
	});

// При нажатии на кнопку play видео автоматически воспроизводится
$("a#play-btn").click(function(){
    document.getElementById("video").play();
    return false;
});

jQuery( document ).ready(function($) {
    $('video').click(function() {
        this.paused ? this.play() : this.pause();
    });
});

// При нажатии на хрестик видео перестает воспроизводится, закрвывается и появляется контент
$("a#close-video").click(function(){
    document.getElementById("video").pause();
    	$('#video').fadeOut(500);
    	$('#video-wrapper-content').fadeIn(500);
    return false;
});


$('.video-slider').slick({
	dots: false,
	arrows: true
});
