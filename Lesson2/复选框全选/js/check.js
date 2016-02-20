// var allcheck = document.getElementsByClassName('allcheck')[0].getElementsByTagName('input')[0];
// var antiAllcheck = document.getElementsByClassName('allcheck')[0].getElementsByTagName('a')[0];
// var checkList = document.getElementsByClassName("if-check")[0].getElementsByTagName("ul")[0];
// var checkListItem = checkList.getElementsByTagName("li");
// var inputList = document.getElementsByClassName("if-check")[0].getElementsByTagName("input")[0];

// allcheck.onclick = function() {

// 	if(this.getAttribute("checked") === "checked") {
// 		this.removeAttribute("checked");
// 		this.nextElementSibling.innerHTML = "全选";

// 		for(var i = 0; i < checkListItem.length; i++) {
// 			checkListItem[i].firstElementChild.firstElementChild.removeAttribute("checked");
// 		}
// 	} else {
// 		this.setAttribute("checked","checked");
// 		this.nextElementSibling.innerHTML = "全不选";

// 		for(var i = 0; i < checkListItem.length; i++) {
// 			checkListItem[i].firstElementChild.firstElementChild.setAttribute("checked","checked");
// 		}
// 	}
// }

// antiAllcheck.onclick = function() {
// 	console.log("1");
// 	if(allcheck.getAttribute("checked") === "checked") {
// 		console.log("111");
// 		allcheck.removeAttribute("checked");
// 		console.log(this);
// 		for(var i = 0; i < checkListItem.length; i++) {
// 			checkListItem[i].firstElementChild.firstElementChild.removeAttribute("checked");
// 		}
// 	} else {
// 		allcheck.setAttribute("checked","checked");
// 		console.log("11");
// 		for(var i = 0; i < checkListItem.length; i++) {
// 			checkListItem[i].firstElementChild.firstElementChild.setAttribute("checked","checked");
// 		}
// 	}
// 	console.log("2");

// }

window.onload = function() {
	var oA = document.getElementsByTagName('a')[0];
	var oInput = document.getElementsByTagName('input');
	var span = document.getElementsByTagName('span')[0];

	var isCheckAll = function() {

		for(var i = 1, n = 0; i < oInput.length; i++) {
			oInput[i].checked && n++;
		}
		oInput[0].checked = n == oInput.length -1;
		span.innerHTML = oInput[0].checked ? "全不选": "全选";
	};
	//全选/全不选
	oInput[0].onclick = function() {

		for(var i = 0; i < oInput.length; i++) {

			oInput[i].checked = this.checked;  //根据第一个全选框是否选择来决定列表是否全选
		}
		isCheckAll();
	}

	//反选
	oA.onclick = function() {
		for(var i = 1; i < oInput.length; i++) {
			oInput[i].checked = !oInput[i].checked;
		}
		isCheckAll();
	}

	//根据复选个数更新全选框状态
	for(var i = 1; i < oInput.length; i++) {
		oInput[i].onclick = function() {
			isCheckAll();
		}
	}
}