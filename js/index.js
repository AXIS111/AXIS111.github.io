$(function () {
	$("#container").fullpage({
		verticalCentered:false,
        navigation:true,
        anchors: ['page1', 'page2', 'page3','page4','page5','page6'],
        menu: '#menu',
	});
});
$(function(){
	$(".nav").click(function () {
		$(".shownav").css('display','none');
	});
	$("#a").click(function(){
		var $music=document.getElementById('music');
		if($music.paused){
			$music.play();
		}else {
			$music.pause();
		}
	});
	$(".content04 .exp1").mouseover(function () {
		$(".exp1 input").css("backgroundColor","#f40");
		$(".content04 .exp1 h4").css("color","#f40");
	});
	$(".content04 .exp2").mouseover(function () {
		$(".exp2 input").css("backgroundColor","#f40");
		$(".content04 .exp2 h4").css("color","#f40");
	});
	$(".content04 .exp3").mouseover(function () {
		$(".exp3 input").css("backgroundColor","#f40");
		$(".content04 .exp3 h4").css("color","#f40");
	});

});
