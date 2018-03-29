$(function() {

//Color picker

	$('#color-picker').on('click', function(e) {
		$('.color').html("");
		$('#' + e.target.id).html('<i class="fa fa-check" id="checkMark"></i>');
		$('#checkMark').fadeIn(300);
	});

//Star rating

	// $('#star-rating').on('click', function(e) {
	// 	$('.fa-star').removeClass('checked');
	// 	let rank = $(e.target).data('rank');
	// 	for (let i = 0; i <= rank; i++) {
	// 		$('[data-rank="'+ i +'"]').addClass('checked');
	// 	};
	// });

});
