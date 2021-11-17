   
// random color tag
$(document).ready(function () {
	var num;
	var arbt = ["#EFB701", "#38c45b", "#5757ec", "#ec5757", "#9057ec", "#6bfab7", "#ff00dd", "#FF9800", "#2C3E50"];
	$("span.tags ").each(function (index) { //incase if you want to use index
		var number = 1 + Math.floor(Math.random() * arbt.length - 1);

		$(this).css('background-color', arbt[number]);
	})
});

// lazzy img
$("DOMContentLoaded", function () {
	var lazyloadImages = document.querySelectorAll("img.lazy");
	var lazyloadThrottleTimeout;

	function lazyload() {
		if (lazyloadThrottleTimeout) {
			clearTimeout(lazyloadThrottleTimeout);
		}

		lazyloadThrottleTimeout = setTimeout(function () {
			var scrollTop = window.pageYOffset;
			lazyloadImages.forEach(function (img) {
				if (img.offsetTop < (window.innerHeight + scrollTop)) {
					img.src = img.dataset.src;
					img.classList.remove('lazy');
					console.log(scrollTop);
				}
			});
			if (lazyloadImages.length == 0) {
				document.removeEventListener("scroll", lazyload);
				window.removeEventListener("resize", lazyload);
				window.removeEventListener("orientationChange", lazyload);
			}
		}, 5);
	}
    

	document.addEventListener("scroll", lazyload);
	window.addEventListener("resize", lazyload);
	window.addEventListener("orientationChange", lazyload);
});