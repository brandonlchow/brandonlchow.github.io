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
		$("#preview").addClass("desc");
	}

	transition_out = () => {
		$("#description").fadeOut();
		$("#preview").removeClass("desc");
		$("#index").fadeIn();
	}

	$(".mid-button").click(function() {
		transition_in();
		
		// setTimeout(function(){
		// 	if ($(this).is('#aco')) {
		// 		$("#preview-container").css("background-image", "url('assets/img/aco_1_crop.jpg')");
		// 	} else if ($(this).is('#maru')) {
		// 		$("#preview-container").css("background-image", "url('assets/img/maru_1_crop.jpg')");
		// 	} else if ($(this).is('#kotetsu')) {
		// 		$("#preview-container").css("background-image", "url('assets/img/kotetsu_1_crop.jpg')");
		// 	} else if ($(this).is('#gaku')) {
		// 		$("#preview-container").css("background-image", "url('assets/img/gaku_1_crop.jpg')");
		// 	}
		// }, 2000)
			
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