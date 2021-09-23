
$(document).ready(function () {

	var count = 1;


	setTheme(localStorage.getItem("dark-mode-storage"))

	if (localStorage.getItem("dark-mode-storage") == "night") {
		$('button.dark-mode-button').text('🌞');
		$('body').addClass('dark-dark');

		count = 2;
	}
	if (localStorage.getItem("dark-mode-storage") == "light") {
		$('button.dark-mode-button').text('🌙');
	}

	$('button.dark-mode-button').on('click', function () {


		if (count == 1) {
			$(this).text('🌞');
			localStorage.setItem("dark-mode-storage", "night");
			setTheme("night");

		}


		if (count == 2) {
			$(this).text('🌙');
			localStorage.setItem("dark-mode-storage", "light");
			setTheme("night");
			count = 0;
		}
		count += 1;
	


	});


	function setTheme(mode) {
		if (mode == "night") {
			$('ul a').toggleClass('text-white');
			$('section a').toggleClass('text-white');
			$('ul').toggleClass('darkmode');
			$('body').toggleClass('body-dark');
			$('section p').toggleClass('text-white');
			$('#particles-js  p').toggleClass('');
			$('li').toggleClass('text-white');
			$('blockquote').toggleClass('no-hover');
			$('.light-font').each(function (index) {
				$(this).toggleClass('text-white');
			});

			$('.text-profile').each(function (index) {
				$(this).toggleClass('text-white');
			});

			$('#particles-js h3').each(function (index) {
				$(this).toggleClass('text-white');
			});

			$('#particles-js p').each(function (index) {
				$(this).toggleClass('text-white');
			});
			$('.con-post').each(function (index) {
				$(this).toggleClass('no-hover');
			});

			$('.con-project div.bg-white').each(function (index) {
				$(this).toggleClass('no-hover');
			});

			
				for (var i = 1; i <= 6; i++) {
					$('h' + i).toggleClass('text-white');
				}
				

			$('.list-font').each(function (index) {

				$(this).toggleClass('dark-list-font');
			});


		}
	}
})