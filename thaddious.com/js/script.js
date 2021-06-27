$(window).on("load", function() {

	$(".loader .inner").fadeOut(500, function() {
		$(".loader").fadeOut(750);
	});

	$(".items").isotope({
		filter: '*',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});
	
	// var about = document.getElementById('about');
	// var aboutRect = about.getBoundingClientRect();
	// if (aboutRect.top > 0) {
	// 	var $scrollTo = $('#about');
	// 	var $container = $("html,body");
	// 	setTimeout(() => {
	// 		$container.animate({scrollTop: $scrollTo.offset().top - $container.offset().top + $container.scrollTop(), scrollLeft: 0},300); 
	// 	}, 8000);
	// }

});

$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	var typed = new Typed(".typed", {
		strings: ["Berkeley EECS Graduate", "B.S. Computer Engineering", "UX/UI Designer"],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 4,
	    nav: true,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }
	});

	var skillsPosition = $(".skillsSection").offset().top;
	var statsPosition = $(".statsSection").offset().top;
	var countUpFinished = false;

	$(window).scroll(function() {

		if (window.pageYOffset > skillsPosition - $(window).height() + 250) {
			$('.chart').easyPieChart({
				easing: 'easeInOut',
				barColor: '#c7ecee',
				trackColor: false,
				scaleColor: false,
				lineWidth: 4,
				size: 152,
				onStep: function(from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent));
				}
			});
		}

		if (!countUpFinished 
			&&window.pageYOffset > statsPosition - $(window).height() + 250) {
			$(".counterDecimal").countup(3.5, 1);
			$(".counter").each(function() {
				var elem = $(this);
				var endVal = parseFloat(elem.text());
				elem.countup(endVal);
			});
			countUpFinished = true;
		}
	});

	$("[data-fancybox]").fancybox();

	$("#filters a").click(function() {

		$("#filters .current").removeClass("current");
		$(this).addClass("current");

		var selector = $(this).attr("data-filter");

		$(".items").isotope({
			filter: selector,
			animationOptions: {
				duration: 1500,
				easing: 'linear',
				queue: false
			}
		});

		return false;
	});

	$("#navigation li a").click(function(e) {
		e.preventDefault();
		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50}, "slow");
	});

	$("#navigation #welcome").click(function(e) {
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0}, "slow");
	});

	const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {

		var body = $("body");
		if ($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		} else {
			body.removeClass("fixedNav");
			body.css("padding-top", 0);
		}

	}
 
});
