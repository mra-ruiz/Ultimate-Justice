function openGame() {
    window.open("boyGirl.html");
}

function openPromptGirl() {
    var howMany = 1;  // max number of items listed below
	var page = new Array(howMany+1);
//add DELAILA'S web pages for each boy prompt
	page[0]="promptGirlWhite.html";
	page[1]="promptGirlBlack.html";

	function rndnumber(){
	var randscript = -1;
	while (randscript < 0 || randscript > howMany || isNaN(randscript)){
	randscript = parseInt(Math.random()*(howMany+1));
	}
	return randscript;
	}
	quo = rndnumber();
	quox = page[quo];
	window.location=(quox);
}

function openPromptBoy() {
    var howMany = 1;  // max number of items listed below
	var page = new Array(howMany+1);
	page[0]="promptBoyWhite.html";
	page[1]="promptBoyBlack.html";

	function rndnumber(){
	var randscript = -1;
	while (randscript < 0 || randscript > howMany || isNaN(randscript)){
	randscript = parseInt(Math.random()*(howMany+1));
	}
	return randscript;
	}
	quo = rndnumber();
	quox = page[quo];
	window.location=(quox);
}

function openGameBoyWRapist() {
	window.open("gameBoyWRapist.html");
}
function openGameBoyBRapist() {
	window.open("gameBoyBRapist.html");
}
function openGameGirlBArrest() {
	window.open("gameGirlBArrest.html");
}
function openGameGirlWArrest() {
	window.open("gameGirlWArrest.html");
}

		