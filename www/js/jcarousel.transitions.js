(function($, Modernizr) {
	$(function() {
		var jcarousel = $('.jcarousel').jcarousel();

		$('.jcarousel').jcarousel({
			wrap : 'circular',
			transitions : Modernizr.csstransitions ? {
				transforms : Modernizr.csstransforms,
				transforms3d : Modernizr.csstransforms3d,
				easing : 'ease'
			} : false
		});

		$('.jcarousel-control-prev').jcarouselControl({
			target : '-=1'
		});

		$('.jcarousel-control-next').jcarouselControl({
			target : '+=1'
		});

		var setup = function(data) {

			var html = '<ul>';

			$.each(data.items, function() {
				html += '<li><img src="' + this.image + '" alt="' + this.heading + '"><u>' + this.heading + ':</u><br>' + this.text + '</li>';
			});

			html += '</ul>';

			// Append items
			jcarousel.html(html);

			// Reload carousel
			jcarousel.jcarousel('reload');
		};

		$.getJSON("json/carousel-data.json", setup).fail(function() {
			console.log("error");
		});
	});
})(jQuery, Modernizr);
