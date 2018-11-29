var about;
var projects;
var design;

$(document).ready(function() {
	$('.viewbg').click(function() {
		$('.view').fadeOut(250);
	});

	$('.proj-container').click(function() {
		if ($(this).hasClass('0')) {
			$('#verticalview').hide();
			$('#horizontalview').show();

			$('#hor1').html(
				"<div class=\"col-md-12 text-center vertical-center\" style=\"height: 80%;\">\
                    <a href=\"shibas_of_instagram/index.html\" target=\"_blank\"><img src=\"assets/img/shiba1.jpg\" class=\"viewpreview\"></a>\
                  </div>");

			$('#hor2').html(
				'<div style=\"color: #FDFDFD; font-size: 2.5rem\"><a href=\"shibas_of_instagram/index.html\" target=\"_blank\" style=\"color: #FDFDFD\"><b>shibas of instagram [fall 2017]</b></a></div>\
                 A web design project made for desktop users heavily relying on JQuery animation to keep the site and its views contained within one page.\
                 <br>\
                 The site showcases a few shiba inu accounts on Instagram and is used as an introductory JQuery example for UC Berkeley\'s Web Design Decal course.');
		} else if ($(this).hasClass('1')) {
			$('#verticalview').hide();
			$('#horizontalview').show();

			$('#hor1').html(
				'<div class=\"col-md-6 text-center vertical-center\" style="height: 80%;\">\
                    <img src=\"assets/img/rep1.jpg\" class=\"viewpreview\">\
                  </div>\
                  <div class=\"col-md-6 text-center vertical-center\" style=\"height: 80%;\">\
                    <img src=\"assets/img/rep2.jpg\" class=\"viewpreview\">\
                  </div>'
				)
			$('#hor2').html('<div style=\"color: #FDFDFD; font-size: 3rem\"><b>represent! [fall 2018]</b></div>\
                 A HCI course project giving users an android application that can tell a user who their local congressional representatives are based \
                    on ZIP code, current location, or a randomly generated postal code. The application utilizes Geocodio and Google Location APIs.')
		} else if ($(this).hasClass('2')) {
			$('#verticalview').hide();
			$('#horizontalview').show();

			$('#hor1').html(
				'<div class=\"col-md-6 text-center vertical-center\" style="height: 80%;\">\
                    <img src=\"assets/img/cc1.jpg\" class=\"viewpreview\">\
                  </div>\
                  <div class=\"col-md-6 text-center vertical-center\" style=\"height: 80%;\">\
                    <img src=\"assets/img/cc2.jpg\" class=\"viewpreview\">\
                  </div>'
				)
			$('#hor2').html('<div style=\"color: #FDFDFD; font-size: 3rem\"><b>connecting communities [fall 2018 in progress]</b></div>\
                 A HCI course group project meant to help provide resources and connections to parents and caretakers of people affected \
                 with ASD in the Bay Area.')
		}

		$('.view').fadeIn(300);
	});
 
	$('.des-container').click(function() {
		if ($(this).hasClass('0')) {
			$('#verticalview').hide();
			$('#horizontalview').show();

			$('#hor1').html(
				"<div class=\"col-md-7 text-center vertical-center\" style=\"height: 80%;\">\
				<img src=\"assets/img/lovescream1.jpg\" class=\"viewpreview\">\
				</div>\
				<div class=\"col-md-5 text-center vertical-center\" style=\"height: 80%;\">\
				<img src=\"assets/img/lovescream2.jpg\" class=\"viewpreview\">\
				</div>");

			$('#hor2').html(
				'<div style=\"color: #FDFDFD; font-size: 3vh\"><b>\"lovescream.\"</b></div>\
                 A reimagining of the cover of Korean hip-hop group Epik high\'s album, \"Lovescream,\" paired with a lyric poster\
                 for title track \"1 Minute 1 Second\"');
		} else if ($(this).hasClass('1')) {
			$('#verticalview').show();
			$('#horizontalview').hide();

			$('#ver1').html(
				'<img src=\"assets/img/anime-poster.jpg\" class=\"viewpreviewver vertical-center\">');
			$('#ver2').html(
				'<div style=\"color: #FDFDFD; font-size: 3vh\"><b>\"shelter\"</b></div>\
                    An imaginary poster promotion for an anime-themed EDM concert.');
		} else if ($(this).hasClass('2')) {
			$('#verticalview').hide();
			$('#horizontalview').show();

			$('#hor1').html(
				'<div class=\"col-md-12 text-center vertical-center\" style=\"height: 80%;\">\
                    <img src=\"assets/img/your-name.jpg\" class=\"viewpreview\">\
                  </div>'
				)
			$('#hor2').html('<div style=\"color: #FDFDFD; font-size: 3vh\"><b>\"your name.\"</b></div>\
                 A low poly image inspired by the movie \"Your Name.\" Original image found <a href=\"https://i.imgur.com/vnXWA2K.png\" target=\'_blank\'>here</a>')
		} else if ($(this).hasClass('3')) {
			$('#verticalview').show();
			$('#horizontalview').hide();

			$('#ver1').html(
				'<img src=\"assets/img/banksy.jpg\" class=\"viewpreviewver vertical-center\">');
			$('#ver2').html(
				'<div style=\"color: #FDFDFD; font-size: 3vh\"><b>\"girl with hose balloon\"</b></div>\
                    A restyling of Banks\'s famous \"Girl with Balloon\" painting in an old-school cartoon, or rubber hose, style drawing.');
		}

		$('.view').fadeIn(300);
	});

	calcRegion();
    navPosition();
    $(window).scroll(function() {
        navPosition();
    });
    $(window).resize(function() {
    	calcRegion();
        scrollListener();
        mobileListener();
    });
});

$(document).keyup(function(e) {
	if (e.key === "Escape") {
		$('.view').fadeOut(250);
	}
}); 

function navPosition() {
	let current = $(window).scrollTop();
    if (current >= about) {
    	$('#navigation').removeClass('navigation-passive')
        $('#navigation').addClass('navigation-active');
    } else {
    	$('#navigation').removeClass('navigation-active');
        $('#navigation').addClass('navigation-passive');
    }

    if (current >= design) {
    	$('#des-dot').css('visibility', 'visible');
    	$('#abt-dot').css('visibility', 'hidden');
    	$('#proj-dot').css('visibility', 'hidden');

    	$('.nav3').css('color', '#F7D331').css('opacity', '1');
    	$('.nav2').removeAttr('style');
    	$('.nav1').removeAttr('style');
    } else if (current >= projects) {
    	$('#proj-dot').css('visibility', 'visible');
    	$('#abt-dot').css('visibility', 'hidden');
    	$('#des-dot').css('visibility', 'hidden');

    	$('.nav2').css('color', '#F7D331').css('opacity', '1');
    	$('.nav1').removeAttr('style');
    	$('.nav3').removeAttr('style');
    } else {
    	$('#abt-dot').css('visibility', 'visible');
    	$('#des-dot').css('visibility', 'hidden');
    	$('#proj-dot').css('visibility', 'hidden');

    	$('.nav1').css('color', '#F7D331').css('opacity', '1');
    	$('.nav2').removeAttr('style');
    	$('.nav3').removeAttr('style');
    }
}

function scrollListener() {
    $(window).scroll(function() {
        navPosition();
    });
}

function mobileListener() {
	let w = $(window).width();
	scrollListener();
	if (w <= 992) {
		$('#desktop').addClass('hide');
		$('#mobile').removeClass('hide');
	} else {
		$('#mobile').addClass('hide');
		$('#desktop').removeClass('hide');
	}
	
}

function calcRegion() {
	about = $('#abt').offset().top;
	projects = ($('#proj').offset().top + about) / 2;
	design = ($('#des').offset().top + $('#proj').offset().top) / 2;
}