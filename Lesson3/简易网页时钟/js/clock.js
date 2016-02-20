var time = document.getElementsByTagName('input');

setInterval(setTime,1000);
setTime();
function setTime() {
	var now = new Date();
	time[0].value = now.getHours();
	time[1].value = now.getMinutes();
	time[2].value = now.getSeconds();
}
