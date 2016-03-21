window.onload = function() {
	var div = document.getElementsByTagName('div')[0];

	document.addEventListener("keydown",function (event){
		var keyCode = event.keyCode;
		switch(keyCode.toString()){
			case "38": //up
				if(event.ctrlKey) {
					var style = document.defaultView.getComputedStyle(div,null).width;
					div.style.width = parseInt(style) + 50 + "px";
					div.style.height = parseInt(style) + 50 + "px";
					break;
				}

				var style = document.defaultView.getComputedStyle(div,null).top;
				div.style.top = parseInt(style) - 1+ "px";
				break;
			case "40": //down

				if(event.ctrlKey) {
					var style = document.defaultView.getComputedStyle(div,null).width;
					div.style.width = parseInt(style) - 50 + "px";
					div.style.height = parseInt(style) - 50 + "px";
					break;
				}

				var style = document.defaultView.getComputedStyle(div,null).top;
				div.style.top = parseInt(style) + 1+ "px";
				break;
			case "37": //left
				var style = document.defaultView.getComputedStyle(div,null).left;
				div.style.left = parseInt(style) - 1+ "px";
				break;
			case "39": //right
				var style = document.defaultView.getComputedStyle(div,null).left;
				div.style.left = parseInt(style) + 1+ "px";
				break;

			case "49": //1
				if(event.ctrlKey) {
					event.preventDefault();
					var style = document.defaultView.getComputedStyle(div,null).backgroundColor;
					div.style.backgroundColor = "green";
				}
				break;
			case "50": //2
				if(event.ctrlKey) {
					event.preventDefault();
					var style = document.defaultView.getComputedStyle(div,null).backgroundColor;
					div.style.backgroundColor = "yellow";
				}
				break;	
			case "51": //3
				if(event.ctrlKey) {
					event.preventDefault();
					var style = document.defaultView.getComputedStyle(div,null).backgroundColor;
					div.style.backgroundColor = "blue";
				}
				break;					
		}
	},false);
}