window.onload = function() {
	var list = document.getElementsByTagName('ul')[0];
	
	var select = document.getElementsByClassName('select')[0];

	select.addEventListener("click",function(){
		list.style.display = list.style.display == "block" ? "none" : "block";
		//阻止事件冒泡
		(event||window.event).cancelBubble = true;
	},false);

	list.addEventListener("mouseover",function(event){
		var target = event.target;
		target.classList.add("hover");
	},false);

	list.addEventListener("mouseout",function(event){
		var target = event.target;
		target.classList.remove("hover");
	},false);

	list.addEventListener("click",function(event){
		var target = event.target;
		var name = document.getElementsByClassName('select')[0];
		name.innerText = target.innerText;
		this.style.display = "none";
	},false);		
}