window.onload = function() {
	var get = {
		ById : function(selector,root) {
			return (root||document).getElementById(selector);
		},
		ByClass: function(selector, root) {
			return (root || document).getElementsByClassName(selector);
		},
		ByTag: function(selector, root) {
			return (root || document).getElementsByTagName(selector);
		}
	};
	var navbar = get.ByClass("navbar")[0];
	var navbarItem = get.ByTag("li",navbar);
	console.log(navbar);
	console.log(navbarItem);
	console.log(navbar.children);
	navbar.onmouseover = function showSecondNav (event) {
		var target = event.target;
		console.log(target.parentNode);
		var secondNav = target.parentNode.getElementsByTagName("div");
		console.log(secondNav);
		secondNav[0].style.display = "block";
		secondNav[1].style.display = "block";
	}
	navbar.onmouseout = function hideSecondNav (event) {
		var target = event.target;
		console.log(target.parentNode);
		var secondNav = target.parentNode.getElementsByTagName("div");
		console.log(secondNav);
		secondNav[0].style.display = "none";
		secondNav[1].style.display = "none";
	}
}