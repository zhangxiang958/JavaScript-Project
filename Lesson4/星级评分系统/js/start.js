window.addEventListener("DOMContentLoaded",function(){
	var oStar = document.getElementsByClassName("start")[0];
	var aLi = oStar.getElementsByTagName("li");
	var realStart = oStar.getElementsByTagName('a');
	var oUl = oStar.getElementsByTagName("ul")[0];
	var oSpan = oStar.getElementsByTagName("span")[1];
	var oP = oStar.getElementsByTagName("p")[0];
	var iScore = iStar = 0;
	var aMsg = [
				"很不满意|差得太离谱，与卖家描述的严重不符，非常不满",
				"不满意|部分有破损，与卖家描述的不符，不满意",
				"一般|质量一般，没有卖家描述的那么好",
				"满意|质量不错，与卖家描述的基本一致，还是挺满意的",
				"非常满意|质量非常好，与卖家描述的完全一致，非常满意"
				];

	for(var i = 1; i <= aLi.length; i++) {
		aLi[i - 1].index = i;
		aLi[i - 1].onmouseover = function() {
			fnPoint(this.index);
			oP.style.display = "block";
			oP.innerHTML = "<em><b>" + this.index + "</b> 分" + aMsg[this.index - 1].match(/(.+)\|/)[1] + "</em>" + aMsg[this.index - 1].match(/\|(.+)/)[1];
		}
		aLi[i - 1].onmouseout = function() {
			fnPoint();
			oP.style.display = "none";
		}
		aLi[i - 1].onclick = function() {
			oSpan.innerHTML = "<strong>" + (this.index) + " 分</strong> (" + aMsg[this.index - 1].match(/\|(.+)/)[1] + ")";
			oP.style.display = "none";
		}
	}

	function fnPoint(iArg) {
		iScore = iArg || iStar;
		for(var i = 0; i < realStart.length; i++) {
			i < iScore ? realStart[i].style.backgroundColor = "yellow" : realStart[i].style.backgroundColor = "#ccc";
		}
	}


	// start.addEventListener("mouseover",function (event){
	// 	var target = event.target;
	// 	switch(target.innerText){
	// 		case "1":
				
	// 			break;
	// 	}
	// },false);

},false);