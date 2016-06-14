$(function() {
    $('nav').hide(); 
    $('#info').hide().fadeIn(1000); 

    setTimeout(function() {
        $('nav').fadeIn(1000); 
        $('#above').animate({height: '50vh'}, 500); 
        $('#below').animate({height: '40vh'}, 500); 
    }, 1000); 
}); 