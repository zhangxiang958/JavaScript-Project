// var input = document.getElementsByTagName('input');
// function countdown() {
// 	var i = input[1].value;
// 	while(i >= 0) {

// 		if(i == 0){
// 			i = 59;
// 		}
// 		input[1].value = --i;	
// 	}
// }
// setInterval(countdown, 1000);
// countdown();
window.onload = function() {
	var input = document.getElementsByTagName('input');
	var button = document.getElementsByTagName('button')[0];
	var timer = null;

	button.onclick = function() {
		this.className == "" ? (timer = setInterval(updateTime, 1000), updateTime()) : (clearInterval(timer));
		this.className = this.className == "" ? "cancel" : "";
		this.className == "cancel" ? (this.innerHTML = "取消") :  (this.innerHTML = "启动") ;
	}

	function format(a) {
		return a.toString().replace(/ ^(\d)$/, '0$1');
	}

	function updateTime() {
		var input = document.getElementsByTagName('input');
		var remain = input[0].value.replace(/ ^0/, '') * 60 + parseInt(input[1].value.replace(/ ^0/, ''));

		if(remain <= 0) {
			clearInterval(timer);
			return ;
		}
		remain--;
		input[0].value = format(parseInt(remain / 60));
		remain %= 60;
		input[1].value = format(parseInt(remain));
	}
}