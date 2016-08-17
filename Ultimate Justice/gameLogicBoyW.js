choices = ["The following week after your night out with the guys a couple of police officers knock at your door.",
"You open the door, and say: 'Hello, officers. What can I help you with?' The police officers claim they have a warrant for your arrest on account of raping a woman and move to wrap your wrists in handcuffs ", 
"You stand perfectly still to not let the officers know you are inside the room, But they claim they have an arrest warrant and break through the door. ", 
"You tried to stop them from arresting you but they thought you were being too violent and pushed you to your knees. They wrapped the handcuffs around you, and took you to the precinct to be processed. You were taken to court for an arraignment.", 
"They wrapped the handcuffs around you, and took you to the precinct to be processed. You were taken to court for an arraignment.", 
"You tried to stop them from arresting you but they thought you were being too violent and drove you to the ground. They wrapped the handcuffs around you, and took you to the precinct to be processed. You were taken to court for an arraignment.", 
"They wrapped the handcuffs around you, and took you to the precinct to be processed. You were taken to court for an arraignment.", 
"You pleaded guilty and were sentenced to 8 months imprisonment, and 2 years probation.", 
"You pleaded not guilty and were taken to court. The evidence presented against you convinced the jury that you were guilty of rape, and you were sentenced to 6 months to be spent in the county jail and 3 years probation.", 
"You pleaded guilty and were sentenced to 8 months imprisonment, and 2 years probation.", 
"You pleaded not guilty and were taken to court. The evidence presented against you convinced the jury that you were guilty of rape, and you were sentenced to 6 months to be spent in the county jail and 3 years probation.", 
"You pleaded guilty and were sentenced to 6 months to be spent in the county jail and 3 years probation.", 
"You pleaded not guilty and were taken to court. The evidence presented against you convinced the jury that you were guilty of rape, and you were sentenced to 6 months to be spent in the county jail and 3 years probation.", 
"You pleaded guilty and were sentenced to 6 months to be spent in the county jail and 3 years probation.", 
"You pleaded not guilty and were taken to court. The evidence presented against you convinced the jury that you were guilty of rape, and you were sentenced to 6 months to be spent in the county jail and 3 years probation."];

firstButton = ["Open the door and ask what they want.",
"Resist being arrested because you know you did nothing wrong.", 
"Resist being arrested because you know you did nothing wrong.", 
"Plead guilty.", 
"Plead guilty.", 
"Plead guilty.", 
"Plead guilty."];

secondButton = ["Pretend they are not there and hope they go away.", 
"Let them arrest you because you are confident everything will be fine.", 
" Let them arrest you because you are confident everything will be fine.", 
"Plead not guilty.", 
"Plead not guilty.", 
"Plead not guilty.", 
"Plead not guilty."];

function whenPageLoads() {
	document.getElementById("prompts").innerHTML = choices[0];
	document.getElementById("1a").innerHTML = firstButton[0];
  	document.getElementById("1b").innerHTML = secondButton[0];
	document.getElementById('buttons').addEventListener('click', 
	function (evt) {
		var target = evt.target;
		if (target.id === '1a') {
			document.getElementById('prompts').innerHTML = choices[1];
		    document.getElementById('1a').innerHTML = firstButton[1];
		    document.getElementById('1b').innerHTML = secondButton[1];
		    thing1(0);
		    document.getElementById('1a').id = '2aa';
		    document.getElementById('1b').id = '2ab';
		    document.getElementById('buttons').addEventListener('click', 
			function (evt) {
				var target = evt.target;
				if (target.id === '2aa') {
					document.getElementById('prompts').innerHTML = choices[3];
				    document.getElementById('2aa').innerHTML = firstButton[3];
				    document.getElementById('2ab').innerHTML = secondButton[3];
				    thing1(1);
				    document.getElementById('2aa').id = '3aaa';
				    document.getElementById('2ab').id = '3aab';
				    document.getElementById('buttons').addEventListener('click', 
				    function (evt) {
						var target = evt.target;
						if (target.id === '3aaa') {
							document.getElementById('prompts').innerHTML = choices[7];
						    document.getElementById('3aaa').innerHTML = "Fact: This light sentencing is based on a real-life conviction of Brock Turner, 20, who raped a 23-year-old visitor of Stanford University."
						    document.getElementById('3aab').innerHTML = "To read more about this case click here!";
						    thing1(3);
						    document.getElementById('3aaa').id = '4aaaa';
						    document.getElementById('3aab').id = '4aaab';
				    		//we can have a function here that calls to linking the article outside the game
				    		document.getElementById('buttons').addEventListener('click', 
							function (evt) {
								var target = evt.target;
								if (target.id === '4aaab') {
								    document.getElementById('3aaa').innerHTML = window.open("http://www.nytimes.com/2014/07/13/us/how-one-college-handled-a-sexual-assault-complaint.html?_r=0");
								}	
							}, false);
						}	
						else if (target.id === '3aab') {
							document.getElementById('prompts').innerHTML = choices[8];
						    document.getElementById('3aaa').innerHTML = "Fact: This light sentencing is based on a real-life conviction of Brock Turner, 20, who raped a 23-year-old visitor of Stanford University.";
						    document.getElementById('3aab').innerHTML = "To read more about this case click here!";
						    thing2(3);
						    document.getElementById('3aaa').id = '4aaba';
						    document.getElementById('3aab').id = '4aabb';
				    		//we can have a function here that calls to linking the article outside the game
				    		document.getElementById('buttons').addEventListener('click', 
							function (evt) {
								var target = evt.target;
								if (target.id === '4aabb') {
								    document.getElementById('3aaa').innerHTML = window.open("http://www.nytimes.com/2014/07/13/us/how-one-college-handled-a-sexual-assault-complaint.html?_r=0");
								}	
							}, false);
						}
					}, false);
				}
				else if (target.id === '2ab') {
					document.getElementById('prompts').innerHTML = choices[4];
				    document.getElementById('2aa').innerHTML = firstButton[4];
				    document.getElementById('2ab').innerHTML = secondButton[4];
				    thing2(1);
				    document.getElementById('2aa').id = '3aba';
				    document.getElementById('2ab').id = '3abb';
				    document.getElementById('buttons').addEventListener('click', 
				    function (evt) {
						var target = evt.target;
						if (target.id === '3aba') {
							document.getElementById('prompts').innerHTML = choices[9];
						    document.getElementById('3aba').innerHTML = "Fact: This light sentencing is based on a real-life conviction of Brock Turner, 20, who raped a 23-year-old visitor of Stanford University.";
						    document.getElementById('3abb').innerHTML = "To read more about this case click here!";
						    thing1(4);
						    document.getElementById('3aba').id = '4abaa';
						    document.getElementById('3abb').id = '4abab';
				    		//we can have a function here that calls to linking the article outside the game
				    		document.getElementById('buttons').addEventListener('click', 
							function (evt) {
								var target = evt.target;
								if (target.id === '4abab') {
								    document.getElementById('3aba').innerHTML = window.open("http://www.nytimes.com/2014/07/13/us/how-one-college-handled-a-sexual-assault-complaint.html?_r=0");
								}	
							}, false);
						}	
						else if (target.id === '3abb') {
							document.getElementById('prompts').innerHTML = choices[10];
						    document.getElementById('3aba').innerHTML = "Fact: This light sentencing is based on a real-life conviction of Brock Turner, 20, who raped a 23-year-old visitor of Stanford University.";
						    document.getElementById('3abb').innerHTML = "To read more about this case click here!";
						    thing2(4);
						    document.getElementById('3aba').id = '4abba';
						    document.getElementById('3abb').id = '4abbb';
				    		//we can have a function here that calls to linking the article outside the game
				    		document.getElementById('buttons').addEventListener('click', 
							function (evt) {
								var target = evt.target;
								if (target.id === '4abbb') {
								    document.getElementById('3aba').innerHTML = window.open("http://www.nytimes.com/2014/07/13/us/how-one-college-handled-a-sexual-assault-complaint.html?_r=0");
								}	
							}, false);
						}
					}, false);
				}	
			}, false);
		}
		else if (target.id === '1b') {
			document.getElementById('prompts').innerHTML = choices[2];
		    document.getElementById('1a').innerHTML = firstButton[2];
		    document.getElementById('1b').innerHTML = secondButton[2];
		    thing2(0);
		    document.getElementById('1a').id = '2ba';
		    document.getElementById('1b').id = '2bb';
		    document.getElementById('buttons').addEventListener('click', 
			function (evt) {
				var target = evt.target;
				if (target.id === '2ba') {
					document.getElementById('prompts').innerHTML = choices[5];
				    document.getElementById('2ba').innerHTML = firstButton[5];
				    document.getElementById('2bb').innerHTML = secondButton[5];
				    thing1(2);
				    document.getElementById('2ba').id = '3baa';
				    document.getElementById('2bb').id = '3bab';
				    document.getElementById('buttons').addEventListener('click', 
				    function (evt) {
						var target = evt.target;
						if (target.id === '3baa') {
							document.getElementById('prompts').innerHTML = choices[11];
						    document.getElementById('3baa').innerHTML = "Fact: This light sentencing is based on a real-life conviction of Brock Turner, 20, who raped a 23-year-old visitor of Stanford University.";
						    document.getElementById('3bab').innerHTML = "To read more about this case click here!";
						    thing1(5);
						    document.getElementById('3baa').id = '4baaa';
						    document.getElementById('3bab').id = '4baab';
				    		//we can have a function here that calls to linking the article outside the game
				    		document.getElementById('buttons').addEventListener('click', 
							function (evt) {
								var target = evt.target;
								if (target.id === '4baab') {
								    document.getElementById('3baa').innerHTML = window.open("http://www.nytimes.com/2014/07/13/us/how-one-college-handled-a-sexual-assault-complaint.html?_r=0");
								}	
							}, false);
						}	
						else if (target.id === '3bab') {
							document.getElementById('prompts').innerHTML = choices[12];
						    document.getElementById('3baa').innerHTML = "Fact: This light sentencing is based on a real-life conviction of Brock Turner, 20, who raped a 23-year-old visitor of Stanford University.";
						    document.getElementById('3bab').innerHTML = "To read more about this case click here!";
						    thing2(5);
						    document.getElementById('3baa').id = '4baba';
						    document.getElementById('3bab').id = '4babb';
				    		//we can have a function here that calls to linking the article outside the game
				    		document.getElementById('buttons').addEventListener('click', 
							function (evt) {
								var target = evt.target;
								if (target.id === '4babb') {
								    document.getElementById('3baa').innerHTML = window.open("http://www.nytimes.com/2014/07/13/us/how-one-college-handled-a-sexual-assault-complaint.html?_r=0");
								}	
							}, false);
						}
					}, false);
				}
				else if (target.id === '2bb') {
					document.getElementById('prompts').innerHTML = choices[6];
				    document.getElementById('2ba').innerHTML = firstButton[6];
				    document.getElementById('2bb').innerHTML = secondButton[6];
				    thing2(2);
				    document.getElementById('2ba').id = '3bba';
				    document.getElementById('2bb').id = '3bbb';
				    document.getElementById('buttons').addEventListener('click', 
				    function (evt) {
						var target = evt.target;
						if (target.id === '3bba') {
							document.getElementById('prompts').innerHTML = choices[13];
						    document.getElementById('3bba').innerHTML = "Fact: This light sentencing is based on a real-life conviction of Brock Turner, 20, who raped a 23-year-old visitor of Stanford University.";
						    document.getElementById('3bbb').innerHTML = "To read more about this case click here!";
						    thing1(6);
						    document.getElementById('3bba').id = '4bbaa';
						    document.getElementById('3bbb').id = '4bbab';
				    		//we can have a function here that calls to linking the article outside the game
				    		document.getElementById('buttons').addEventListener('click', 
							function (evt) {
								var target = evt.target;
								if (target.id === '4bbab') {
								    document.getElementById('3bba').innerHTML = window.open("http://www.nytimes.com/2014/07/13/us/how-one-college-handled-a-sexual-assault-complaint.html?_r=0");
								}	
							}, false);
						}	
						else if (target.id === '3bbb') {
							document.getElementById('prompts').innerHTML = choices[14];
						    document.getElementById('3bba').innerHTML = "Fact: This light sentencing is based on a real-life conviction of Brock Turner, 20, who raped a 23-year-old visitor of Stanford University.";
						    document.getElementById('3bbb').innerHTML = "To read more about this case click here!";
						    thing2(6);
						    document.getElementById('3bba').id = '4bbba';
						    document.getElementById('3bbb').id = '4bbbb';
				    		//we can have a function here that calls to linking the article outside the game
				    		document.getElementById('buttons').addEventListener('click', 
							function (evt) {
								var target = evt.target;
								if (target.id === '4bbbb') {
								    document.getElementById('3bba').innerHTML = window.open("http://www.nytimes.com/2014/07/13/us/how-one-college-handled-a-sexual-assault-complaint.html?_r=0");
								}	
							}, false);
						}
					}, false);
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