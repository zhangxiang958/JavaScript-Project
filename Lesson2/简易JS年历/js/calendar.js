// var dataList = document.getElementsByClassName('data')[0];
// var data = dataList.getElementsByTagName('li');

// var messageList = document.getElementsByClassName('message')[0];
// var message = messageList.getElementsByTagName('li');

// for(var i = 0; i < data.length; i++) {
// 	data[i].onmouseover = function(i) {
// 		console.log(i);
// 		for(var j = 0; j < data.length; j++) {
// 			if(j == i) {
// 				console.log(j);
// 				message[j].style.display = "inline";
// 			}
// 		}
		
// 	}
// }
var li = document.getElementsByClassName("calendar")[0].getElementsByTagName("li");
var message = document.getElementsByClassName("message")[0];
var op = message.getElementsByTagName("p")[0];
var strong = message.getElementsByTagName("strong")[0];
var arrayM = [
		"元旦：1月1日至3日放假三天。",
		"春节：2月2日至8日放假7天。",
		"妇女节：3月8日妇女节，与我无关。",
		"清明节：4月3日至5日放假3天",
		"劳动节：4月30日至5月2日放假3天。",
		"端午节：6月4日至6日放假3天。",
		"小暑：7月7日小暑。不放假。",
		"七夕节：8月6日七夕节。不放假。",
		"中秋节：9月10日至12日放假3天。",
		"国庆节：10月1日至7日放假7天。",
		"立冬：11月8日立冬。不放假。",
		"艾滋病日:12月1日<br />废除奴隶制国际日:12月2日。"
		];
for(var i = 0; i < li.length; i++) {
	li[i].index = i;
	li[i].onmouseover = function() {
		op.innerHTML = arrayM[this.index];
		strong.innerHTML = this.index + 1;
	}
}