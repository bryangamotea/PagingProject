$(document).ready(function(){
	
	var maxpage = $(".num-page").length;
	console.log(maxpage);
	page = 1;
	navigatePage(page);
	
	function navigatePage(bry) {

		page = bry;
		$.ajax({
			type: "GET"
			, url: "http://localhost:8080/data"
			, data : {page:page}
		})

		.done(function( msg ){
			console.log(msg);
			$(".current").empty();
			for (var i = 0; i < msg.data.length; i++) {
				var result = msg.data[i].item;
				$("<li>" + result + "</li>").appendTo(".current")
			}

		});

	}

	$(".navigation a").click(function(){
		if ($(this).hasClass("prev")) {
			console.log(page);
			if (page > 1){
				page--;
			}
			navigatePage(page);	
		} else if ($(this).hasClass("next")){
			// console.log(page);
			if (page < maxpage) {

				page++;
			}
			navigatePage(page);
		} else {
			// $(".current").empty();
			navigatePage($(this).data("target"));
			}

	});



});