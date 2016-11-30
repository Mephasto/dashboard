/*
    Author: Mephasto
*/
$(document).ready(function() {
	
    $('.brands-carrousel').krakatoa({
        buttons: false,
        width: '220',
        height: '90',
        arrows: false,
        loop: true
    });

    $('#home-contact-form').validator();

    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('nav').addClass('shrink');
        } else {
            $('nav').removeClass('shrink');
        }
    });
    
});