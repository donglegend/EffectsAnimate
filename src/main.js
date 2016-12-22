$(function() {

	var Router = require("./router");

	var elMenuList = $("#menuList");
	var elContents = $("#contents");
	var elContentPage = $("#ContentPage");

	var elLoading = $("#loading");
	var elMask = $("#mask");


	setMenuList();
	bindMenuEvent();

	elMenuList.find('a.list-group-item').eq(0).trigger("click");

	function setMenuList() {
		var html = "";
		$.each(Router, function(index, item) {
			html += '<a href="javascript:;" class="list-group-item" data-href="' + item.path + '">' + item.text + '</a>';
		})

		elMenuList.append(html)
	}


	function bindMenuEvent() {

		elMenuList.on("click", "a.list-group-item", function() {
			var self = $(this);
			var path = self.data("href");
			self.addClass('active').siblings().removeClass('active');
			elContentPage.attr("src", path);

			elMask.show();
			elLoading.show();

			elContentPage.on("load", function (){
				elMask.hide();
				elLoading.hide();
			})
		})

		$(window).scroll(function() {
			if ($(window).scrollTop() > 150) {
				elContents.css({
					top: "15px"
				})
			} else {
				elContents.css({
					top: "150px"
				})
			}
		});



	}



})