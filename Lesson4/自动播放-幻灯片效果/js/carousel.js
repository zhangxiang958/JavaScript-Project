window.onload = function() {
	var carousel = document.getElementsByClassName('carousel')[0];
	var list = carousel.getElementsByTagName("ul");
	var lImg = list[0].getElementsByTagName('li');
	var lNum = list[1].getElementsByTagName("li");
	var timer = play = null;
	var i = index = 0;

	//焦点切换
	for(var i = 0; i < lNum.length; i ++){
			lNum[i].index = i;
			lNum[i].onmouseover = function() {
				show(this.index);
			}
	}

	//鼠标划过关闭定时器
	carousel.onmouseover = function() {
		clearInterval(play);
	};


	//鼠标离开启动自动播放
	carousel.onmouseout = function() {
		autoPlay();
	}

	function autoPlay() {
		play = setInterval(function() {
			index++;
			index >= lImg.length && (index = 0);
			show(index);
		},2000);
	}
	autoPlay();

	function show(a) {
		index = a;
		var alpha = 0;
		for(i = 0; i < lNum.length; i++) {
			lNum[i].className = "";
		}
		lNum[index].className = "current";
		clearInterval(timer);

		for(i = 0; i < lImg.length; i++) {
			lImg[i].style.opacity = 0;
			lImg[i].style.filter = "alpha(opacity=0)";
		}

		timer = setInterval(function() {
			alpha += 2;
			alpha > 100 && (alpha = 100);
			lImg[index].style.opacity = alpha / 100;
			lImg[index].style.filter = "alpha(opacity = " + alpha + ")";
			alpha == 100 && clearInterval(timer);
		},20);
	}





	// function loop(num) {
	// 	carouselShow.style.top =  -(num * 200) + 'px';

	// 	if(num >= 5) {
	// 		num = 0;
	// 		loop(num);
	// 	} else {
	// 		setTimeout(function() {
	// 			loop( ++num);
	// 		},2000);
	// 	}
	// }
	// loop(0);
}