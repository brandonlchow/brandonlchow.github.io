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
		$(".mid-button").off("hover");
		$("#index").fadeOut();
		$("#description").fadeIn();
		$("#preview").addClass("desc");
	}

	transition_out = () => {
		$("#description").fadeOut();
		$("#preview").removeClass("desc");
		$("#index").fadeIn();
	}

	aco = () => {
		$(".pfp").css("background-image", "url('assets/img/aco_pfp.jpg')");
		$(".first").css("background-image", "url('assets/img/aco_2.jpg')");
		$(".second").css("background-image", "url('assets/img/aco_3.jpg')");
		$(".third").css("background-image", "url('assets/img/aco_4.jpg')");
		$(".profile-name").text("Aco");
		$(".profile-handle").text("@acoshiba");
		$(".quote").text('"Where did the treat go?"');
	}

	maru = () => {
		$(".pfp").css("background-image", "url('assets/img/maru_pfp.jpg')");
		$(".first").css("background-image", "url('assets/img/maru_2.jpg')");
		$(".second").css("background-image", "url('assets/img/maru_3.jpg')");
		$(".third").css("background-image", "url('assets/img/maru_4.jpg')");
		$(".profile-name").text("Maru");
		$(".profile-handle").text("@marutaro");
		$(".quote").text('"The smiliest dog in Japan"');
	}



	kotetsu = () => {
		$(".pfp").css("background-image", "url('assets/img/kotetsu_pfp.jpg')");
		$(".first").css("background-image", "url('assets/img/kotetsu_2.jpg')");
		$(".second").css("background-image", "url('assets/img/kotetsu_3.jpg')");
		$(".third").css("background-image", "url('assets/img/kotetsu_4.jpg')");
		$(".profile-name").text("Kotetsu");
		$(".profile-handle").text("@ganchi_with_kotetsu");
		$(".quote").text('"It\'s so ugly that it\'s cute!"');
	}

	gaku = () => {
		$(".pfp").css("background-image", "url('assets/img/gaku_pfp.jpg')");
		$(".first").css("background-image", "url('assets/img/gaku_2.jpg')");
		$(".second").css("background-image", "url('assets/img/gaku_3.jpg')");
		$(".third").css("background-image", "url('assets/img/gaku_4.jpg')");
		$(".profile-name").text("Gaku");
		$(".profile-handle").text("@shibainu.gaku");
		$(".quote").text('"This is the ultimate brotherly love"');
	}

	$(".mid-button").click(function() {
		transition_in();
		if ($(this).is('#aco')) {
			aco();
			$("#description").addClass("aco");
		} else if ($(this).is('#maru')) {
			maru();
			$("#description").addClass("maru");
		} else if ($(this).is('#kotetsu')) {
			kotetsu();
			$("#description").addClass("kotetsu");
		} else if ($(this).is('#gaku')) {
			gaku();
			$("#description").addClass("gaku");
		}
			
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