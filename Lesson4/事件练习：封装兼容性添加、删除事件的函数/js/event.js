window.addEventListener("DOMContentLoaded",function(){
	var button = document.getElementsByTagName('button');

	var EventUitl = {
		addHandler: function(element, type, handler){
			if(element.addEventListener){
				element.addEventListener(type,handler,false);
			} else if(element.attachEvent) {
				element.attachEvent("on" + type, handler);
			} else {
				element["on" + type] = handler;
			}
		},
		removeHandler: function(element, type, handler) {
			if(element.removeEventListener){
				element.removeEventListener(type, handler, false);
			} else if ( element.detachEvent){
				element.detachEvent("on" + type, handler);
			} else {
				element["on" + type] = null;
			}
		}
	};

	function alreadyClick() {
		alert("事件绑定成功!");
	}

	button[1].addEventListener("click",function(){
		button[0].innerText = "我可以点击了";
		EventUitl.addHandler(button[0], "click", alreadyClick);
	},false);

	button[2].addEventListener("click",function(){
		button[0].innerText = "毫无用处的按钮";
		EventUitl.removeHandler(button[0], "click", alreadyClick);
	},false);

},false);