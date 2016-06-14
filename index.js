$(function() {
    $('[data-fade-in]').hide(); 
    setTimeout(function() {
        $('[data-fade-in]').each(function(_, el) {
            $(el).fadeIn(parseInt($(this).data('fade-in'))); 
        }); 
    }, 1000); 
}); 