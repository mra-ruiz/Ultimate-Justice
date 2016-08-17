choices = ["The officer that handcuffed you calls for backup, and one officer comments on the violent nature of the arrest.", 
"You tried to tell the officers to help you, but the officer that handcuffed you continues to abuse you. You die trying to escape his wrath by running away. He shoots you from behind.", 
"The officer that handcuffed you continued to abuse you. You die trying to escape his wrath by running away. He shoots you from behind."];

firstButton = ["Call for help."];

secondButton = ["Keep crying to yourself."];

function whenPageLoads() {
	document.getElementById("prompts").innerHTML = choices[0];
	document.getElementById("1a").innerHTML = firstButton[0];
  	document.getElementById("1b").innerHTML = secondButton[0];
	document.getElementById('buttons').addEventListener('click', 
	function (evt) {
		var target = evt.target;
		if (target.id === '1a') {
			document.getElementById('prompts').innerHTML = choices[1];
		    document.getElementById('1a').innerHTML = "Fact: The happenings of this story is what could have happened to Molly Suzanna, had she been a woman of color.";
		    document.getElementById('1b').innerHTML = "To read more about this case, click here!";
			thing1(0);
		    document.getElementById('1a').id = '2ba';
		    document.getElementById('1b').id = '2bb';
			document.getElementById('buttons').addEventListener('click', 
			function (evt) {
				var target = evt.target;
				if (target.id === '2bb') {
					document.getElementById('1a').innerHTML = window.open("https://mic.com/articles/148294/this-white-woman-s-shocking-account-of-police-brutality-has-a-lesson-about-race-in-america?utm_source=policymicTBLR&utm_medium=main&utm_campaign=social#.HJKudAl2x");
				}
			}, false);
		}
		else if (target.id === '1b') {
			document.getElementById('prompts').innerHTML = choices[2];
		    document.getElementById('1a').innerHTML = "Fact: The happenings of this story is what could have happened to Molly Suzanna, had she been a woman of color.";
		    document.getElementById('1b').innerHTML = "To read more about this case, click here!";
			thing2(0);
		    document.getElementById('1a').id = '2ba';
		    document.getElementById('1b').id = '2bb';
			document.getElementById('buttons').addEventListener('click', 
			function (evt) {
				var target = evt.target;
				if (target.id === '2bb') {
					document.getElementById('1a').innerHTML = window.open("https://mic.com/articles/148294/this-white-woman-s-shocking-account-of-police-brutality-has-a-lesson-about-race-in-america?utm_source=policymicTBLR&utm_medium=main&utm_campaign=social#.HJKudAl2x");
				}
			}, false);
		}
	}, false);
}

function thing1(i){
	var str1 = choices[i] + ":";
    var str2 = " " + firstButton[i];
    var res = str1.concat(str2);
    var node = document.createElement("LI");
	var textnode = document.createTextNode(res);
	node.appendChild(textnode);
	document.getElementById("history").appendChild(node);
}

function thing2(i){
	var str1 = choices[i] + ":";
    var str2 = " " + secondButton[i];
    var res = str1.concat(str2);
    var node = document.createElement("LI");
	var textnode = document.createTextNode(res);
	node.appendChild(textnode);
	document.getElementById("history").appendChild(node);
}

