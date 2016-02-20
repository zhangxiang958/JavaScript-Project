function $(attr) {
	return document.getElementById(attr);
}

function addNumber(num1, num2) {
	return parseInt(num1) + parseInt(num2);
}

function writeNumber(resultText) {
	$("result").innerHTML = resultText;
}

function handle() {
	var number1 = $("number1").value;
	var number2 = $("number2").value;
	var result = addNumber(number1,number2);
	writeNumber(result);
}

function init() {
	$("add").addEventListener("click", handle, false);
}
init();