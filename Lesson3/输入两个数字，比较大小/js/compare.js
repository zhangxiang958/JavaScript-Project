// var num1 = document.getElementById('num1');
// var num2 = document.getElementById('num2');
var num = document.getElementsByTagName('input');
var compare = document.getElementById('compare');
var result = document.getElementsByTagName('span')[0];
var i = 0;
for(var i = 0; i < num.length - 1; i++){
	num[i].onkeyup = function() {
		this.value = this.value.replace(/[^\d]/, "");
	}
}
num[2].onclick = function() {
	(num[0].value == "" || num[1].value == "") ? alert("请输入数字") : (result.innerHTML = Math.max(num[0].value, num[1].value));
}
// var result = document.getElementById('result');

// compare.onclick = function() {
// 	if(num1.value > num2.value){
// 		result.innerHTML = num1.value;
// 	}else {
// 		result.innerHTML = num2.value;
// 	}
// }