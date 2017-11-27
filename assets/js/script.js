$(document).ready(function() {

/*--------------MAIN BUTTONS--------------*/
	
	

	$(".mid-button").hover(function() {
		if ($(this).is('#aco')) {
			$("#preview-container").css("background-image", "url('assets/img/aco_1_crop.png')");
		} else if ($(this).is('#maru')) {
			$("#preview-container").css("background-image", "url('assets/img/maru_1_crop.png')");
		} else if ($(this).is('#kotetsu')) {
			$("#preview-container").css("background-image", "url('assets/img/kotetsu_1_crop.jpg')");
		} else if ($(this).is('#gaku')) {
			$("#preview-container").css("background-image", "url('assets/img/gaku_1_crop.png')");
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
		if ($("#description").hasClass("aco")) {
			$("#description").removeClass("aco");
		} else if ($("#description").hasClass("maru")) {
			$("#description").removeClass("maru");
		} else if ($("#description").hasClass("kotetsu")) {
			$("#description").removeClass("kotetsu");
		} else if ($("#description").hasClass("gaku")) {
			$("#description").removeClass("gaku");
		}
	}

	aco = () => {
		$(".pfp").css("background-image", "url('assets/img/aco_pfp.jpg')");
		$(".first").css("background-image", "url('assets/img/aco_2_crop.png')");
		$(".second").css("background-image", "url('assets/img/aco_3_crop.png')");
		$(".third").css("background-image", "url('assets/img/aco_4_crop.png')");
		$(".profile-name").text("Aco");
		$(".profile-handle").text("@acoshiba");
		$(".quote").text('"Where did the treat go?"');
		$(".description-text").text("Aco is a 4 year old black shiba inu from \
		 Hokkaido, Japan. She is one of the fluffiest shibas around, with almost the \
		 perfect shape and the cutest paws. She's a quiet dog, but is always around \
		 to follow her owners' antics, whether it's them dressing up as No-Face from \
		 Spirited Away or doing magic tricks with Aco's treats. Her instagram \
		 is full of a variety of posts ranging from Aco learning new tricks and nice \
		 aesthetic photos from around Japan! Without a doubt, Aco is definitely \
		 Brandon's favorite shiba inu. To this day, he is still waiting for \
		 Aco's bork reveal.");
		setTimeout(function() {
			$("#preview-container").css("background-image", "url('assets/img/aco_1_crop.png')");
		}, 500);
		
	}

	maru = () => {
		$(".pfp").css("background-image", "url('assets/img/maru_pfp.jpg')");
		$(".first").css("background-image", "url('assets/img/maru_2_crop.png')");
		$(".second").css("background-image", "url('assets/img/maru_3_crop.png')");
		$(".third").css("background-image", "url('assets/img/maru_4_crop.png')");
		$(".profile-name").text("Maru");
		$(".profile-handle").text("@marutaro");
		$(".quote").text('"The smiliest dog in Japan"');
		$(".description-text").text("Maru is a 10 year old shiba inu from Japan. \
			Maru is no doubt the most popular shiba inu on Instagram, and in fact \
			Japan's second most popular Instagram account. He has been featured in \
			many commercials and promotions and his smile is recognizable by almost \
			any shiba inu fan. However, his beginnings were humble as his owner \
			originally posted photos of his dog after the deadly 2011 Japanese \
			earthquake and tsunami in hopes of \"easing people's anxiety, even a\
			little bit.\" Today, Maru lives a luxurious life full of naps, delicious \
			treats, and beautiful surroundings.");

		setTimeout(function() {
			$("#preview-container").css("background-image", "url('assets/img/maru_1_crop.png')");
		}, 500);
	}



	kotetsu = () => {
		$(".pfp").css("background-image", "url('assets/img/kotetsu_pfp.jpg')");
		$(".first").css("background-image", "url('assets/img/kotetsu_2_crop.png')");
		$(".second").css("background-image", "url('assets/img/kotetsu_3_crop.png')");
		$(".third").css("background-image", "url('assets/img/kotetsu_4_crop.png')");
		$(".profile-name").text("Kotetsu");
		$(".profile-handle").text("@ganchi_with_kotetsu");
		$(".quote").text('"It\'s so ugly that it\'s cute!"');
		$(".description-text").text("Kotetsu's age isn't listed on his social media \
			or maybe Brandon just can't read Japanese, but he's yet another shiba from \
			Japan! Although least popular of the four showcased shibas, Kotetsu's owner, Ganchi, \
			takes pride in how loving and cute her dog is. Kotetsu's always glad to \
			see anyone and greets every guest with anything he \
			can find in the room, be it a pillow or a blanket! His ears fold with his \
			goofy smile and it's not hard to tell that Kotetsu is a very happy dog. \
			Compared to other shibas, he's a bit \"uglier,\" as his owner puts it, but \
			it's what makes him cute!");

		setTimeout(function() {
			$("#preview-container").css("background-image", "url('assets/img/kotetsu_1_crop.jpg')");
		}, 500);
	}

	gaku = () => {
		$(".pfp").css("background-image", "url('assets/img/gaku_pfp.jpg')");
		$(".first").css("background-image", "url('assets/img/gaku_2_crop.png')");
		$(".second").css("background-image", "url('assets/img/gaku_3_crop.png')");
		$(".third").css("background-image", "url('assets/img/gaku_4_crop.png')");
		$(".profile-name").text("Gaku");
		$(".profile-handle").text("@shibainu.gaku");
		$(".quote").text('"This is the ultimate brotherly love"');
		$(".description-text").text("Gaku is a 5 year old shiba inu with two brothers: \
			the cats Rinrin and Torajiro! For anyone who enjoys seeing dogs and cats get \
			along, this account is perfect. Although there are many shibas on instagram \
			who have feline siblings, it's hard to find as many that get along as well as \
			Gaku and Rinrin. The two can always be seen sleeping together and bathing in the \
			sunlight. Most dog accounts on instagram do not have a central theme around \
			their posts, but this account seems to unintentionally have a lot of brown and \
			gold thanks to Gaku and Rinrin's fur!");

		setTimeout(function() {
			$("#preview-container").css("background-image", "url('assets/img/gaku_1_crop.png')");
		}, 500);
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
	});

	$(".profile-text").click(function() {
		if ($("#description").hasClass("aco")) {
			window.open("https://www.instagram.com/acoshiba");
		} else if ($("#description").hasClass("maru")) {
			window.open("https://www.instagram.com/marutaro");
		} else if ($("#description").hasClass("kotetsu")) {
			window.open("https://www.instagram.com/ganchi_with_kotetsu");
		} else if ($("#description").hasClass("gaku")) {
			window.open("https://www.instagram.com/shibainu.gaku");
		};
	});

	$(".profile-pic").click(function() {
		if ($("#description").hasClass("aco")) {
			window.open("https://www.instagram.com/acoshiba");
		} else if ($("#description").hasClass("maru")) {
			window.open("https://www.instagram.com/marutaro");
		} else if ($("#description").hasClass("kotetsu")) {
			window.open("https://www.instagram.com/ganchi_with_kotetsu");
		} else if ($("#description").hasClass("gaku")) {
			window.open("https://www.instagram.com/shibainu.gaku");
		};
	});

	$(".description-img").click(function () {
		if ($(this).hasClass('1st')) {
			$("#preview-container").css('background-image', $(".first").css('background-image'));
		} else if ($(this).hasClass('2nd')) {
			$("#preview-container").css('background-image', $(".second").css('background-image'));
		} else if ($(this).hasClass('3rd')) {
			$("#preview-container").css('background-image', $(".third").css('background-image'));
		};
	});

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