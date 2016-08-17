choices = ["You receive counsel from the district attorney before appearing at the arraignment. Your lawyer explains that you will be tried as an adult and if you fight your charges you could face a sentence of 40 years to life in prison. But if you made a plea bargain with the prosecution and plead nolo contendere or 'no contest' your sentence would be much shorter",
"You go to your trial after spending a year in the county jail, and are found guilty despite the lack of evidence. But, because you did not agree to the plea bargain you were sentenced to 40 years imprisonment with a lifetime as a registered sex offender", 
"You go to your trial and are found guilty despite the lack of evidence. But, because you agreed to the plea bargain you were sentenced to 6 years imprisonment with a lifetime as a registered sex offender", 
"You tried to get your case appealed, but you were denied. You went to prison, for a rape you did not commit. When you were eventually released you had an ankle bracelet and had to go door-to-door and pronounce yourself as a sex offender.", 
"You went to prison, for a rape you did not commit. When you were eventually released you had an ankle bracelet and had to go door-to-door and pronounce yourself as a sex offender.", 
"You tried to get your case appealed, but you were denied. You went to prison, for a rape you did not commit. When you were eventually released you had an ankle bracelet and had to go door-to-door and pronounce yourself as a sex offender", 
"You went to prison, for a rape you did not commit.When you were eventually released you had an ankle bracelet and had to go door-to-door and pronounce yourself as a sex offender"];

firstButton = ["Fight and plead not guilty","Appeal the case", "Appeal the case"];

secondButton = ["Agree to the plea bargain, and plead nolo contendere","Accept your fate", "Accept your fate"];

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
				    document.getElementById('2aa').innerHTML = "Fact: This sentencing of an innocent man is based on a real-life conviction of Brian Banks. He too faced 40 years to life in prison, and because of his age, size, and race, his lawyer did not believe the judge would rule in his favor and so advised him to take the plea bargain. Since then, the girl that falsely accused him of rape as admitted the lie and Brian Banks has been exonerated.";
				    document.getElementById('2ab').innerHTML = "To read more about this case click here!";
					thing1(1);
				    document.getElementById('2aa').id = '3aaa';
				    document.getElementById('2ab').id = '3aab';
				    document.getElementById('buttons').addEventListener('click', 
				    function (evt) {
						var target = evt.target;
						if (target.id === '3aab'){
							document.getElementById('2aa').innerHTML = window.open("https://californiainnocenceproject.org/read-their-stories/brian-banks/"); 
						}
					}, false);
				}	
				else if (target.id === '2ab') {
					document.getElementById('prompts').innerHTML = choices[4];
				    document.getElementById('2aa').innerHTML = "Fact: This sentencing of an innocent man is based on a real-life conviction of Brian Banks. He too faced 40 years to life in prison, and because of his age, size, and race, his lawyer did not believe the judge would rule in his favor and so advised him to take the plea bargain. Since then, the girl that falsely accused him of rape as admitted the lie and Brian Banks has been exonerated.";
				    document.getElementById('2ab').innerHTML = "To read more about this case click here!";
					thing2(1);
				    document.getElementById('2aa').id = '3aba';
				    document.getElementById('2ab').id = '3abb';
					document.getElementById('buttons').addEventListener('click', 
				    function (evt) {
						var target = evt.target;
						if (target.id === '3abb'){
							document.getElementById('2aa').innerHTML = window.open("https://californiainnocenceproject.org/read-their-stories/brian-banks/");
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
				    document.getElementById('2ba').innerHTML = "Fact: This sentencing of an innocent man is based on a real-life conviction of Brian Banks. He too faced 40 years to life in prison, and because of his age, size, and race, his lawyer did not believe the judge would rule in his favor and so advised him to take the plea bargain. Since then, the girl that falsely accused him of rape as admitted the lie and Brian Banks has been exonerated.";
				    document.getElementById('2bb').innerHTML = "To read more about this case click here!";
					thing1(2);
				    document.getElementById('2ba').id = '3baa';
				    document.getElementById('2bb').id = '3bab';
					document.getElementById('buttons').addEventListener('click', 
					function (evt) {
						var target = evt.target;
						if (target.id === '3bab'){
							document.getElementById('2ba').innerHTML = window.open("https://californiainnocenceproject.org/read-their-stories/brian-banks/");
						}
					}, false);
				}	
				else if (target.id === '2bb') {
					document.getElementById('prompts').innerHTML = choices[6];
				    document.getElementById('2ba').innerHTML = "Fact: This sentencing of an innocent man is based on a real-life conviction of Brian Banks. He too faced 40 years to life in prison, and because of his age, size, and race, his lawyer did not believe the judge would rule in his favor and so advised him to take the plea bargain. Since then, the girl that falsely accused him of rape as admitted the lie and Brian Banks has been exonerated.";
				    document.getElementById('2bb').innerHTML = "To read more about this case click here!";
					thing2(2);
				    document.getElementById('2ba').id = '3bba';
				    document.getElementById('2bb').id = '3bbb';
					document.getElementById('buttons').addEventListener('click', 
					function (evt) {
						var target = evt.target;
						if (target.id === '3bbb'){
							document.getElementById('2ba').innerHTML = window.open("https://californiainnocenceproject.org/read-their-stories/brian-banks/");
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