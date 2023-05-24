$(function() {
	var click = 'no';
	$('#main-nav a, #logo a').click(function(event){
		event.preventDefault();
		click = 'yes';
		$('#main-nav a').removeClass('active');
		var target = $(this).attr('href');
		if(target != '#home'){
			$('header').addClass('shadow');
			$(this).addClass('active');
		}
		$.smoothScroll({
			scrollTarget: target,
			afterScroll : function(){
				window.location.hash = target;
				if(target == '#home'){
					$('header').removeClass('shadow');
				}
				click = 'no';
			}
		});
	});
	$('#home').waypoint(function(event, direction){
		if(click == 'no'){
			$('#main-nav a').removeClass('active');
		}
	});
	$('#services').waypoint(function(event, direction){
		if(click == 'no'){
			$('#main-nav a').removeClass('active');
			$('#services-link').addClass('active');
		}
	});
	$('#about').waypoint(function(event, direction){
		if(click == 'no'){
			$('#main-nav a').removeClass('active');
			$('#about-link').addClass('active');
		}
	});
	$('#partnerships').waypoint(function(event, direction){
		if(click == 'no'){
			$('#main-nav a').removeClass('active');
			$('#partnerships-link').addClass('active');
		}
	});
	$('#contact').waypoint(function(event, direction){
		if(click == 'no'){
			$('#main-nav a').removeClass('active');
			$('#contact-link').addClass('active');
		}
	});
});