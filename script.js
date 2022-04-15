var screennum = "";
var numForCalc = "";
var screen1num;
var screen2num;
var pop = "";
var id = "";
document.addEventListener("click", function (event) {
	id = event.target.id;
	//I've put the id out so that i can use that in keypress event
	function xu() {
		var nu = document.getElementById(id).innerText;
		if (screennum.length <= 13) {
			screennum += nu;
			document.getElementById("screen2").innerHTML = screennum;
		}

	}

	function func() {
		var screen1 = document.getElementById("screen1").innerText;
		var screen2 = document.getElementById("screen2").innerText;
		var theFunc = document.getElementById(id).innerText;
		var temp = "";
		if (screen2.length > 0 && id != "equal" && id != "del") {
			screen1num = eval(screennum);
			document.getElementById("screen1").innerText = screen2 + theFunc;
			screen2 = "";
			if (screen1.length > 0) {
				screen1 = screen1.split('');
				pop = screen1[screen1.length - 1];
				screen1.pop();
				console.log(screen1);
				screen2num = eval(screen1.join(''));
				document.getElementById("screen1").innerText = eval(eval(screen2num) + pop + eval(screen1num)) + theFunc;
				console.log(screen1num);
				console.log(screen2num + pop + screen1num);
			}
			// screennum = ""; document.getElementById("screen2").innerHTML = screennum;
		} else if (screen2.length == 0 && id != "equal" && id != "del") {
			temp = screen1.split('');
			if (temp[temp.length - 1] == "+" || temp[temp.length - 1] == "-" || temp[temp.length - 1] == "*" || temp[temp.length - 1] == "/") {
				temp.pop();
				console.log(screen1);
				console.log(temp);
				document.getElementById("screen1").innerText = temp.join('') + theFunc;
			} else if (temp[temp.length - 1] != "+" || temp[temp.length - 1] != "-" || temp[temp.length - 1] != "*" || temp[temp.length - 1] != "/") {
				document.getElementById("screen1").innerText = screen1 + theFunc;
			}
			temp = "";
		}
		// else if (id == "del") {
		// 	console.log("hoho");

		// }
		screennum = "";
		document.getElementById("screen2").innerHTML = screennum;
	}

	if (id == "one" || id == "two" || id == "three" || id == "four" || id == "five" || id == "six" || id == "seven" || id == "eight" || id == "nine" || id == "zero" || id == "dot") {
		xu();
	} else if (id == "plus" || id == "minus" || id == "divide" || id == "into") {
		func();
	} else if (id == "del") {
		// func();
		var screen1 = document.getElementById("screen1").innerText;
		var screen2 = document.getElementById("screen2").innerText;
		if (screen2.length > 0) {
			screennum = screennum.split('');
			screennum.pop();
			console.log(screennum);
			screennum=screennum.join('');
			document.getElementById("screen2").innerText = screennum;
		}
	} else if (id == "equal") {
		if (document.getElementById("screen1").innerText.length > 0 && document.getElementById("screen2").innerText.length > 0) {
			// var theFunc = document.getElementById(id).innerText;
			var screen1 = document.getElementById("screen1").innerText;
			var screen2 = document.getElementById("screen2").innerText;
			screen1num = eval(screennum);
			screen1 = screen1.split('');
			pop = screen1[screen1.length - 1];
			screen1.pop();
			console.log(screen1);
			screen2num = eval(screen1.join(''));
			document.getElementById("screen1").innerText = eval(eval(screen2num) + pop + eval(screen1num));
			console.log(screen2num);
			console.log(screen2num + pop + screen1num);
			screennum = "";
			document.getElementById("screen2").innerHTML = screennum;

		} else {

		}
	} else {
		console.log("lol");
	}



})