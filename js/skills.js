$(document).ready(function(){
		$("#checkskill").click(function () {
			$('.skillbar').each(function(){
			$(this).find('.skillbar-bar').animate({width:$(this).attr('data-percent')
		},5000);
	});
		$(".skill-bar-percent").show(5000);
	})
});