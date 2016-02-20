var span = document.getElementsByTagName("span")[0];
var button = document.getElementsByTagName("input")[1];

button.onclick = function() {
	var value = document.getElementsByTagName('input')[0].value;
	var count = 0;
	for(var i = 0; i < value.split(",").length; i++) {
		count += parseInt(value.split(",")[i]);
	}
	span.innerText = count;
}


