$(document).ready(function() {
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
	})

	// , function() {
	// 	$("#preview-container").css("background-image", "url('assets/img/aco_1_crop.jpg')")
	// }

});