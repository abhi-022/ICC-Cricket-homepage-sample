
$(document).ready(function () {
    var previousScroll = 0,
        sticky = $('header');
	window.onload = $(sticky).fadeIn('10000');

    $(window).scroll(function(){
       var currentScroll = $(this).scrollTop();
       if ((currentScroll > previousScroll) && ($(window).scrollTop() > 80)){
           $(sticky).fadeOut('10000');
       } else {
          $(sticky).fadeIn('10000');
       }
       previousScroll = currentScroll;
    });
	
	// ===== Scroll to Top ==== 
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 600) {
			$('#return-to-top').fadeIn(200);
		} else {
			$('#return-to-top').fadeOut(200);
		}
	});
	
});

$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
});

document.oncontextmenu = function(e){
	var target = (typeof e !="undefined")? e.target: event.srcElement
	if (target.tagName == "IMG" || (target.tagName == 'A' && target.firstChild.tagName == 'IMG'))
		return false
}