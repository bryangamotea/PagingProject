$(document).ready(function(){
	var maxpage = $("ul").length;
	page = 1;
	console.log(page);
	function navigatePage(bry) {
		$("ul").removeClass("current");
		$("ul:nth-child(" + bry + ")").addClass("current");
		page = bry;
	}

	$(".navigation a").click(function(){
			if ($(this).hasClass("prev")) {
				console.log(page);
				if (page > 1){
					page--;
				}
				navigatePage(page);	
			} else if ($(this).hasClass("next")){
				console.log(page);
				if (page < maxpage) {
					page++;
				}
				navigatePage(page);
			} else {
				// console.log($(this).data("target"));
				navigatePage($(this).data("target"));
			}

		});
});