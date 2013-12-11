$(document).ready(function(){

	function navigatePage(bry) {
		console.log(bry);
		$("ul").removeClass("current");
		$("ul:nth-child(" + bry + ")").addClass("current");
	}

	$(".navigation a").click(function(){
		navigatePage($(this).data("target"));	
	});

});