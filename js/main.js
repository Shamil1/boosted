$(function() {
	$('.accessories__slider').slick({
		infinite: true,
		dots: false,
		swipeToSlide: true,
		slidesToShow: 6,
	  slidesToScroll: 1,
	  prevArrow: '<button type="button" class="slick-prev accessories__slider-prev"><img src="img/left-arrow.svg" alt="prev arrow"></button>',
	  nextArrow: '<button type="button" class="slick-next accessories__slider-next"><img src="img/right-arrow.svg" alt="next arrow"></button>',
	  responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 380,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 320,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

	$('.header__burger').click(function() {
		$('.header__list').toggleClass('header__list--show')
	})
})