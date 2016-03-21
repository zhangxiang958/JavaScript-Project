window.onload = function() {
	var div = document.getElementsByTagName('div')[0];
	var timer = null;

	div.addEventListener("click",function() {
		var i = 0;
		clearInterval(timer);

		timer = setInterval(function() {
			div.style.display = i++ % 2 ? "none" : "block";
			i > 6 && (clearInterval(timer));
		}, 100);	

	},false);
}