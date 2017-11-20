$(document).ready(function() {

/*--------------MAIN BUTTONS--------------*/

	$(".mid-button").hover(function() {
		if ($(this).is('#aco')) {
			$("#preview-container").css("background-image", "url('assets/img/aco_1_crop.jpg')");
		} else if ($(this).is('#maru')) {
			$("#preview-container").css("background-image", "url('assets/img/maru_1_crop.jpg')");
		} else if ($(this).is('#kotetsu')) {
			$("#preview-container").css("background-image", "url('assets/img/kotetsu_1_crop.jpg')");
		} else if ($(this).is('#gaku')) {
			$("#preview-container").css("background-image", "url('assets/img/gaku_1_crop.jpg')");
		}
	});

	transition_in = () => {
		$("#index").fadeOut();
		$("#description").fadeIn();
		// $("#preview").css("animation", "slide 0.8s ease-in 0.2s forwards");
		$("#preview").addClass("desc");
	}

	transition_out = () => {
		$("#preview").removeClass("desc");
			// $("#preview").css("animation", "reverse-slide 0.8s ease-in 0.2s forwards");
		$("#index").fadeIn();
		$("#description").fadeOut();
	}

	$(".mid-button").click(function() {
		transition_in();
	});

	$("#preview").click(function() {
		if ($(this).hasClass("desc")) {
			transition_out();
		} else {
			transition_in();
		}
	});

/*--------------DESCRIPTION--------------*/
	$("#description-exit").click(function() {
		transition_out();
	})

/*--------------ABOUT--------------*/

	$("#about-button").click(function() {
		$("#about").fadeIn();
	});

	$("#shadow").click(function() {
		$("#about").fadeOut();
	});

	$("#about-exit").click(function() {
		$("#about").fadeOut();
	});

});