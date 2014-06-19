 $(document).ready(function () {

 	var slideObj = {};
 	slideObj.dir = ["assets/images/banner01.jpg", "assets/images/banner02.jpg", "assets/images/banner03.jpg", "assets/images/banner04.jpg"];
 	slideObj.url = ["www.yahoo.com", "www.google.com", "www.msn.com", "www.bing.com"];
 	var img_width = 760;
 	var $slideMainCon = document.getElementById("slideMainCon");
 	var timeVal = 4000;
 	var timeoutId;
 	var counter = 0;
 	var sliderChild;
 	var slideConArr = [];
 	var ease_type = Power2.easeInOut;
 	var anim_duration = 0.7;

 	$("#slideMainCon").append("<ul id='slider'></ul>");

 	// slider object

 	function parallaxSlider(dir, url) {
 		this.dir = dir;
 		this.url = url;
 		return false;
 	}

 	// canvas initialization 

 	function init() {

 		slideObj.dir.push(slideObj.dir[0]);
 		slideObj.url.push(slideObj.url[0]);

 		for (var i = 0; i < slideObj.dir.length; i++) {
 			slideConArr[i] = new parallaxSlider(slideObj.dir[i], slideObj.url[i]);

 			$("#slider").append("<li><img src=" + slideObj.dir[i] + " width=760 height=200></li>");
 			$("#slider li").eq(i).addClass("pic" + i);
			
			$("#slideMainCon").append("<div id=desc"+i+" class=slide_cl>description "+(i+1)+"</div>");	
			
 			if (i != 0) {
 				$("ul#slider li").eq(i).css("left", img_width + "px");
				$("#desc"+i+"").css("left", img_width + "px");
				
 			} else {
 				$("ul#slider li").eq(i).css("left", "0");
				$("#desc"+i+"").css("left", "0");
 			}
 		}
 		sliderChild = $("ul#slider li");
		//$("#slideMainCon").append("<div id=desc"+0+" class=slide_cl>description "+0+"</div>");
 		return false;
 	}

 	// create timer

 	function setTimer() {
 		timeoutId = setTimeout(setTimeFunc, timeVal);
 		return false;
 	}

 	// slide animation

 	function setTimeFunc() {
 		counter++;

 		if (counter >= slideObj.dir.length) {
 			counter = 1;
 			resetSlide();
 			TweenLite.to(sliderChild.eq(counter), anim_duration, {
 				left: "0px",
 				ease: ease_type
 			});
			
			TweenLite.to($("#desc"+counter+""), anim_duration, {
 				left: "0px",
				delay: 0.5,
 				ease: ease_type
 			});
			
 		} else {
 			TweenLite.to(sliderChild.eq(counter), anim_duration, {
 				left: "0px",
 				ease: ease_type
 			});
			
			TweenLite.to($("#desc"+counter+""), anim_duration, {
 				left: "0px",
				delay: 0.5,
 				ease: ease_type
 			});
			
 		}
 		setTimer();
 		return false;
 	}

 	// reset all the slide except the last array

 	function resetSlide() {
 		var i = 0;
 		while (i <= slideObj.dir.length) {
 			if (i != slideObj.dir.length) {
 				sliderChild.eq(i).css("left", img_width + "px");
				$("#desc"+i+"").css("left", img_width + "px");
 			} else {
 				sliderChild.eq(0).css("left", "0px");
				$("#desc"+0+"").css("left", "0px");
 			}
 			i++;
 		}
 		return false;
 	}

 	init();
 	setTimer();

 });