const settings = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	initialSlide: 0,
	arrows: false,
	responsive: [
		{
			breakpoint: 900,
			settings: {
				slidesToShow: 2,
				initialSlide: 2,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
};

export default settings;
