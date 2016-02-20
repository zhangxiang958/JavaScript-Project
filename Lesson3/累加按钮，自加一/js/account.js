var counter = document.getElementById('counter');
var i = 0;
counter.onclick = function() {
	counter.value = ++i;
}