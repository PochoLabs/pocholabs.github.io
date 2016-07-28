$(document).ready(function(){
	new WOW().init();

	$('.jumbo-heading').textillate({ in: { effect: 'zoomIn' } });

	$('.box-content').hover(function(){
		$(this).find('i').addClass('animated').addClass('rubberBand');
	}, function(){
		$(this).find('i').removeClass('animated').removeClass('rubberBand');
	})

	$('.nav-link').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	// $('.home-lead').on('mouseenter', function(){
	// 	$(this).addClass('animated').addClass('pulse');
	// });
	// $('.home-lead').on('mouseleave', function(){
	// 	$(this).delay(3000).removeClass('animated').removeClass('pulse');
	// });
});
