(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./router":2}],2:[function(require,module,exports){
module.exports = [{
	"path": "http://donglegend.com/effects/canvas_paomadeng/index.html",
	"text": "canvas九宫格跑马灯抽奖"
}, {
	"path": "http://donglegend.com/effects/jiugongge/index.html",
	"text": "九宫格跑马灯抽奖"
}, {
	"path": "http://donglegend.com/effects/myParticle/snow.html",
	"text": "粒子图片1"
}, {
	"path": "http://donglegend.com/effects/myParticle/hankuke.html",
	"text": "粒子图片2"
}, {
	"path": "http://donglegend.com/effects/RingBar/index.html",
	"text": "canvas 圆环进度条"
}, {
	"path": "http://donglegend.com/effects/pageCode/test.html",
	"text": "我的分页"
}, {
	"path": "http://donglegend.com/effects/photowall/index.html",
	"text": "我的照片墙"
}, {
	"path": "http://donglegend.com/effects/mySlide/index.html",
	"text": "我的幻灯片"
}, {
	"path": "http://donglegend.com/effects/weapp-demo/image/weapp.gif",
	"text": "微信小程序demo"
}, {
	"path": "http://donglegend.com/canvasimage/index.html",
	"text": "canvas 滤镜效果"
}, {
	"path": "http://donglegend.com/effects/hashRouter/index.html",
	"text": "我的hash Route"
}, {
	"path": "http://donglegend.com/myDate/index.html",
	"text": "我的日历"
}, {
	"path": "http://donglegend.com/effects/formvalid/demo.html",
	"text": "我的表单验证demo"
}, {
	"path": "http://donglegend.com/effects/frameJin/index.html",
	"text": "canvas动画播放序列帧"
}, {
	"path": "http://donglegend.com/effects/showinfo/demo.html",
	"text": "类似百度图片的那种图片信息显示效果"
}, {
	"path": "http://donglegend.com/mySwiper/dist/demo/v.html",
	"text": "垂直方向"
}, {
	"path": "http://donglegend.com/mySwiper/dist/demo/h.html",
	"text": "水平方向"
}, {
	"path": "http://donglegend.com/effects/3dphotos/index.html",
	"text": "3d旋转图册"
}, {
	"path": "http://donglegend.com/effects/cube/index.html",
	"text": "cube旋转立方体"
}, {
	"path": "http://donglegend.com/effects/dot/index.html",
	"text": "dot漂浮链接点"
}, {
	"path": "http://donglegend.com/effects/loopImg/index.html",
	"text": "loopImg效果"
}, {
	"path": "http://donglegend.com/effects/ui-loading/demo/show.html",
	"text": "css3 ui-loading jquery插件show"
}, {
	"path": "http://donglegend.com/effects/canvas/index.html",
	"text": "canvas小球工厂"
}, {
	"path": "http://donglegend.com/effects/waterfall/index.html",
	"text": "原生瀑布流"
}, {
	"path": "http://donglegend.com/effects/2015/index.html",
	"text": "2015"
}, {
	"path": "http://donglegend.com/effects/windfont/index.html",
	"text": "windfont打字机"
}, {
	"path": "https://daneden.github.io/animate.css/",
	"text": "animate.css 效果预览"
}]
},{}]},{},[1])