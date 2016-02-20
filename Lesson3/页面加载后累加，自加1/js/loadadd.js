window.onload = function() {
	var span = document.getElementsByTagName('span')[0];
	var i = 0;
	setInterval(function() {
		span.innerHTML = ++i;
	},1000);
}