// var  input = document.getElementsByTagName('input');
// var tbody = document.getElementsByTagName('tbody')[0];

// var number = [];


// function doOperation(text) {
// 	switch(text) {
// 			case "%": 
// 				if(number[1]){
// 					number[0] = number[0] % number[1];
// 				}
// 				break;
// 			case "/": 
// 				if(number[1]){
// 					number[0] = number[0] / number[1];
// 				}
// 				break;
// 			case "×":
// 				if(number[1]){
// 					number[0] = number[0] * number[1];
// 				}
// 				break;
// 			case "-": 
// 				if(number[1]){
// 					number[0] = number[0] - number[1];
// 				}
// 				break;
// 			case "+":
// 				if(number[1]){
// 					number[0] = number[0] + number[1];
// 				}
// 				break; 
// 		}
// }


// tbody.addEventListener("click",function(event){
// 	var target = event.target;
// 	var text = target.innerText;

// 	if(/\d{1}|\./.test(text)){  //按下数字或者小数点
		
// 		if(input[1].value === "0") {
// 			if(/\./.test(text)){
// 				input[1].value += text;
// 			} else {
// 				input[1].value = text;
// 			}	
// 		} else {
// 			input[1].value += text;
// 		}

		
// 	} else if(/\%|\/|\×|\-|\+/.test(text)) {  //按下运算符

// 		number.push(parseInt(input[1].value));
// 		console.log(number);
// 		input[0].value += input[1].value;
// 		input[0].value += text;
// 		input[1].value = "";

// 		doOperation(text);
// 	} else if(/c/.test(text)){   //按下清除符

// 		input[0].value = "";
// 		input[1].value = 0;

// 	} else if(/\=/.test(text)) {  //按下等于号

// 		number.push(parseInt(input[1].value));
// 		doOperation(text);
// 		input[0].value += input[1].value;
// 		input[1].value = number[0];
// 	}
// 	// input[1].value = text;
// 	// console.log(typeof text);
// 	// console.log(text);

// },false);

window.onload = function() {
	
	var table = document.getElementsByTagName("table")[0];
	var oA = document.getElementsByTagName("a");
	var oscreen = table.getElementsByTagName("input")[1];
	var exp = table.getElementsByTagName("input")[0];
	var s = false;

	for(var i = 0; i < oA.length; i++) {
		oA[i].onclick = function() {
			switch(this.innerText) {
				case "c":
					oscreen.value = 0;
					exp.value = "";
					break;
				case "%":
					count("%");
					break;
				case "/":
					count("/");
					break;
				case "×":
					count("*");
					break;
				case "-":
					count("-");
					break;
				case "+":
					count("+");
					break;
				case "=":
					s || (exp.value += oscreen.value);
					oscreen.value = eval(exp.value.replace(/ \%\/\*\-\+/, ''));
					oscreen.value = oscreen.value.substr(0,10).replace("NaN", 0);
					s = true;
					break;
				case ".":
					if(oscreen.value.search(/ [\.\%\/\*\-\+]/) != -1)
					break;
				default:
					s && (oscreen.value = 0, exp.value = "", s = false);
					oscreen.value.length < 10 && (oscreen.value = (oscreen.value + this.innerText).replace(/^[0\%\/\*\-\+](\d)/, "$1"));	
			}
		}
	}
	function count(a) {
		if(s) {
			exp.value = oscreen.value + a;
			oscreen.value = a;
			s = false;
		} else {
			/ [\%\/\*\-\+]$/.test(oscreen.value) || (exp.value += oscreen.value);
			oscreen.value = a;
			/ [\%\/\*\-\+]$/.test(exp.value) || (exp.value += oscreen.value);
			exp.value = exp.value.slice(-1) != a ? exp.value.replace(/.$/, a) : exp.value;
		}

	}
}
