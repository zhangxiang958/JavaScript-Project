window.onload = function() {
	var number = document.getElementsByTagName('p')[1].innerText;
	var color = document.getElementsByTagName('p')[2].innerText;
	var button = document.getElementsByTagName('button');

	//删除第一项
	button[0].addEventListener('click',function(){
		var month = document.getElementsByTagName('p')[0].innerText;
		var mon = month.split(",");
		var first = "January(1)";

		if(mon[0] == "January(1)" ) {
			mon.splice(0,1);//可以用shift（）
			del = false;
			this.innerText = "还原January(1)";
		} else {
			mon.splice(0,0,first);
			this.innerText = "删除January(1)";
			del = true;
		}
		// (mon.shift(), this.value = this.value.replace("删除"，“添加”)， bs1 = false);
		// (mon.unshift(), this.value = this.value.replace("添加"，“删除”)， bs1 = true);
		document.getElementsByTagName('p')[0].innerText = mon.toString();
	},false);

	button[1].addEventListener("click",function() {
		var month = document.getElementsByTagName('p')[0].innerText;
		var mon = month.split(",");
		var last = "December(12)";

		if(mon[mon.length - 1] == "December(12)") {
			mon.splice(mon.length - 1,1);
			del = false;
			this.innerText = "还原December(12)";
		} else {
			mon.splice(mon.length,0,last);
			this.innerText = "删除December(12)";
			del = true;
		}

		// (mon.pop(), this.value = this.value.replace("删除"，“添加”)， bs1 = false);
		// (mon.push(), this.value = this.value.replace("添加"，“删除”)， bs1 = true);
		document.getElementsByTagName('p')[0].innerText = mon.toString();
	},false);

	button[2].addEventListener('click',function(){
		var number = document.getElementsByTagName('p')[1].innerText;
		number += "," + number;

		//可以使用 contact 方法
		document.getElementsByTagName('p')[1].innerText = number.toString();
	},false);

	button[3].addEventListener("click",function() {

		//还原可以使用 length 属性，length = 10
		document.getElementsByTagName('p')[1].innerText = "0,1,2,3,4,5,6,7,8,9";
	},false);

	button[4].addEventListener("click",function(){
		document.getElementsByTagName('p')[2].innerText = "red,green,blue,white,yellow,black,brown";
	},false);

	button[5].addEventListener("click",function(){
		var color = document.getElementsByTagName('p')[2].innerText;
		var colorList = color.split(",");
		console.log(colorList);
		colorList.shift();
		colorList.shift();
		colorList.shift();

		//批量删除可以使用 splice
		document.getElementsByTagName('p')[2].innerText = colorList.toString();
	},false);

	button[6].addEventListener("click",function(){
		var color = document.getElementsByTagName('p')[2].innerText;
		var colorList = color.split(",");
		colorList.splice(1,1);
		colorList.splice(1,1);

		document.getElementsByTagName('p')[2].innerText = colorList.toString();
	},false);

	button[7].addEventListener("click",function(){
		var color = document.getElementsByTagName('p')[2].innerText;
		var colorList = color.split(",");
		colorList.splice(2,0,"orange","purple");

		document.getElementsByTagName('p')[2].innerText = colorList.toString();
	},false);

	button[8].addEventListener("click",function(){
		var color = document.getElementsByTagName('p')[2].innerText;
		var colorList = color.split(",");
		colorList.splice(1,2,"#009900","#0000ff");

		document.getElementsByTagName('p')[2].innerText = colorList.toString();
	},false);
}