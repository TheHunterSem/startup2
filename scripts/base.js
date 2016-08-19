$( function() {
    var state = true;
    $( "#features_item_btn" ).on( "click", function() {
    	event.preventDefault();
      if ( state ) {
        $( "#features_item_content_wrapper" ).animate({
          height: 150
        }, 1000 );
      } else {
        $( "#features_item_content_wrapper" ).animate({
          height: 45
        }, 1000 );
      }
      state = !state;
    });
  } );

$(document).ready(function() { 
	$('a#hamburger').click( function(event){ 
		event.preventDefault();
		 	$('#nav-hamburger').toggle(200);		  			
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
		 	$('#video-block').fadeIn(500);		
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

// СЛАЙДЕР
$('.video-slider').slick({
	dots: false,
	arrows: true
});


// ПЛАВНЫЙ ПЕРЕХОД ПО ЯКОРЯМ
$(document).ready(function() {
    $("a").click(function () { 
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      $('html,body').animate( { scrollTop: destination }, 1200 );
      return false;
    });
  });



