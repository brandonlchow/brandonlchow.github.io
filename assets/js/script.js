var about;
var projects;
var design;
var isMobile = false;

$(document).ready(function() {
	// device detection
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
	    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
	    isMobile = true;
	}

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
			$('#hor2').html('<div style=\"color: #FDFDFD; font-size: 3rem\"><b>connecting communities [fall 2018]</b></div>\
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
    mobileListener();
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
	// if (w <= 992) {
	if (isMobile) {
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