$(function() {
	
  $("#links").css('margin-top', ($(window).height() - $("#links").height()) / 2 - 20); 

	if (navigator.userAgent.indexOf('iPhone') != -1 || navigator.userAgent.indexOf('iPod') != -1) {
		$("audio").remove(); 
 	} else if (navigator.userAgent.indexOf('iPad') == -1) {
		music = $("#bgmusic"); 
		music.css("display", "none");  
		music[0].play();
	}

})



