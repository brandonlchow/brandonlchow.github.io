$(document).ready(function() {
    navPosition();
    $(window).scroll(function() {
        navPosition();
    });
    $(window).resize(function() {
        scrollListener();
    });
});

function navPosition() {
	let about = $('#abt').offset().top;
	let projects = ($('#proj').offset().top + about) / 2;
	let design = ($('#des').offset().top + $('#proj').offset().top) / 2;
	let current = $(window).scrollTop();
    if (current >= about) {
    	$('#navigation').removeClass('navigation-passive')
        $('#navigation').addClass('navigation-active');
        console.log('yeet');
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
    // if (Utils.isElementInView($('#projects'), false)) {
    //     var active_id = $('.active-button').attr('id');
    //     if (Utils.isElementInView($('#intro-container'), false)) {
    //         if (active_id != 'intro-button') {
    //             $('#' + active_id).removeClass('active-button');
    //             $('#intro-button').addClass('active-button');
    //         }
    //     } else if (Utils.isElementInView($('#gpctrl-container'), false)) {
    //         if (active_id != 'gpctrl-button') {
    //             $('#' + active_id).removeClass('active-button');
    //             $('#gpctrl-button').addClass('active-button');
    //         }
    //     } else if (Utils.isElementInView($('#azlyrics-container'), false)) {
    //         if (active_id != 'azlyrics-button') {
    //             $('#' + active_id).removeClass('active-button');
    //             $('#azlyrics-button').addClass('active-button');
    //         }
    //     } else if (Utils.isElementInView($('#moss-container'), false)) {
    //         if (active_id != 'moss-button') {
    //             $('#' + active_id).removeClass('active-button');
    //             $('#moss-button').addClass('active-button');
    //         }
    //     }
    // }
}

function scrollListener() {
    $(window).scroll(function() {
        navPosition();
    });
}