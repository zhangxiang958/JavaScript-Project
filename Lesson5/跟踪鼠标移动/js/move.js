window.onload = function() {
	var aLi = document.getElementsByTagName('li');
	var oBig = document.getElementsByClassName('big')[0];
	var area = oBig.getElementsByTagName('div')[0];
	var i = 0;

	for(i = 0; i < aLi.length; i++){
		aLi[i].index = i;
		aLi[i].onmouseover = function() {
			var oImg = document.createElement("img");
			//load the photo
			var img = new Image();
			img.src = oImg.src = aLi[this.index].getElementsByTagName('img')[0].src.replace(".jpg", "_big.jpg");
			//insert Photo
			oBig.appendChild(oImg);

			// this.className = "active";

			oBig.style.display = area.style.display = "block";
			img.compete ? area.style.display = "none" : (oImg.onload = function() {area.style.display = "none"});

		};
		aLi[i].onmousemove = function(event) {
			var event = event || window.event;
			var iWdith = document.documentElement.offsetWidth - event.clientX;		
			
			oBig.style.top = event.clientY + 20 + "px";

			oBig.style.left = (iWdith < oBig.offsetWidth + 10 ? event.clientX - oBig.offsetWidth -10 : event.clientX + 10) + "px";
		};
		aLi[i].onmouseout = function(event) {
			oBig.style.display = "none";
			oBig.removeChild(oBig.lastChild);
		};
			
	}


	// area.addEventListener("mouseover",function (event){
	// 	var target = event.target;
	// 	var src = target.getAttribute("src");
	// 	var big = document.getElementsByClassName('big')[0];
	// 	var bigPhoto = big.getElementsByTagName('div')[0];

	// 	bigPhoto.style.backgroundImage = src;
	// 	big.style.display = "block";
	// },false);

	// area.addEventListener("mousemove",function (event){
	// 	var target = event.target;
	// 	var src = target.getAttribute("src");
	// 	var big = document.getElementsByClassName('big')[0];
	// 	var bigPhoto = big.getElementsByTagName('div')[0];

	// 	bigPhoto.style.top = event.clientY + "px";
	// 	bigPhoto.style.left = event.clientX + "px";
	// 	big.style.display = "block";
	// },false);

	// area.addEventListener("mouseout",function (event){
	// 	var big = document.getElementsByClassName('big')[0];
	// 	big.style.display = "none";
	// },false);
}