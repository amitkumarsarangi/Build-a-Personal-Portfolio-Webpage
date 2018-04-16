var navBtn = document.getElementById("navBtn");
var navPanel = document.getElementById("navPanel");
var today = document.getElementById("today");
var click = new Audio("https://amitkumarsarangi.github.io/myCreations/mySkills/sounds/popSound.wav");
var spinOffScreen = document.getElementById("spinOffScreen");
	var spinOffScreenDisplay = document.getElementById("spinOffScreenDisplay");
	var spinOffScreenClose = document.getElementById("spinOffScreenClose");
	var spinOffScreenExternalLink = document.getElementById("spinOffScreenExternalLink");

var VJSPBAG = document.getElementById("VJSPBAG");
var VJSPAJC = document.getElementById("VJSPAJC");
var VJSPPRQ = document.getElementById("VJSPPRQ");
var VJSPCADB = document.getElementById("VJSPCADB");

var CSS3ACPA = document.getElementById("CSS3ACPA");
var CSS3SCAa = document.getElementById("CSS3SCAa");
var CSS3ACAC = document.getElementById("CSS3ACAC");
var CSS3ACDC = document.getElementById("CSS3ACDC");

var fBFEDPBaTPb = document.getElementById("fBFEDPBaTPb");
var fBFEDPBaSF = document.getElementById("fBFEDPBaSF");
var fBFEDPBaPLPa = document.getElementById("fBFEDPBaPLPa");
var fBFEDPBaTDP = document.getElementById("fBFEDPBaTDP");
var fBFEDPBaPPW = document.getElementById("fBFEDPBaPPW");

var fIFEDPBaRQM = document.getElementById("fIFEDPBaRQM");
var fIFEDPStLW = document.getElementById("fIFEDPStLW");
var fIFEDPBaWV = document.getElementById("fIFEDPBaWV");
var fIFEDPUtTJA = document.getElementById("fIFEDPUtTJA");

var fAFEDPBaJC = document.getElementById("fAFEDPBaJC");
var fAFEDPBaPC = document.getElementById("fAFEDPBaPC");
var fAFEDPBaTTTGa = document.getElementById("fAFEDPBaTTTGa");
var fAFEDPBaSG = document.getElementById("fAFEDPBaSG");

var OPTtV = document.getElementById("OPTtV");
var OPTI = document.getElementById("OPTI");
// All variables above this line...
window.onload = function(){
	navPanel.style.display = 'none';
}
// do when main.js loads...
getTimeFun();
setInterval(function(){
	getTimeFun();
}, 1000);
// below function will get the time and put in #today element...
function getTimeFun(){
	var x = new Date();
	var date = x.getDate();
	var day = x.getDay();
	if(day===0){day = 'Sun';}
	else if(day===1){day = 'Mon';}
	else if(day===2){day = 'Tue';}
	else if(day===3){day = 'Wed';}
	else if(day===4){day = 'Thu';}
	else if(day===5){day = 'Fri';}
	else if(day===6){day = 'Sat';}
	var hours = x.getHours();
	var minutes = x.getMinutes();
	var seconds = x.getSeconds();
	if(hours<10){hours = "0"+hours;}
	if(minutes<10){minutes = "0"+minutes;}
	if(seconds<10){seconds = "0"+seconds;}
	today.innerHTML = "<span style='color:#EBF5FB'>"+date + "&nbsp;&nbsp;&nbsp;" + day+"</span>" + " " + "<span style='color:#E8F8F5'>"+hours + ":" + minutes + ":" + seconds+"</span>";
}

//below function will get the link put in #spinOffScreenDisplay...
function displaySpinOff(lnkStr){
	click.play();
	navPanel.style.display = 'none';
	spinOffScreenDisplay.innerHTML = "<iframe src='" + lnkStr + "'></iframe>";
	spinOffScreenExternalLink.innerHTML = '<a href="' + lnkStr + '" target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i></a>';
	spinOffScreen.style.display = 'block';
}
// get today's Date above...
navBtn.onclick = function(){
	click.play();
	if(navPanel.style.display == 'none'){
		navPanel.style.display = 'block';
	}else{
		navPanel.style.display = 'none';
	}
}
// navigation button above...

spinOffScreenClose.onclick = function(){
	click.play();
	spinOffScreen.style.display = 'none';
	spinOffScreenDisplay.innerHTML = "";
}
spinOffScreenExternalLink.onclick = function(){
	click.play();
	spinOffScreen.style.display = 'none';
	spinOffScreenDisplay.innerHTML = "";
}

// vanila JS projects below...
VJSPBAG.onclick = function(){
	var lnk = "https://amitkumarsarangi.github.io/myCreations/seasonOne/basicMultiplicationGame/index.html";
	displaySpinOff(lnk);
}
VJSPAJC.onclick = function(){
	var lnk = "https://amitkumarsarangi.github.io/myCreations/seasonTwo/aJavascriptClock/index.html";
	displaySpinOff(lnk);
}
VJSPPRQ.onclick = function(){
	var lnk = "https://amitkumarsarangi.github.io/myCreations/seasonOne/pleaseReactQuickly/index.html";
	displaySpinOff(lnk);
}
VJSPCADB.onclick = function(){
	var lnk = "https://amitkumarsarangi.github.io/myCreations/seasonTwo/customAlertDialogBox/index.html";
	displaySpinOff(lnk);
}

// CSS3 projects below...
CSS3ACPA.onclick = function(){
	var lnk = "https://amitkumarsarangi.github.io/myCreations/seasonTwo/aPreloaderAnimation/index.html";
	displaySpinOff(lnk);
}
CSS3SCAa.onclick = function(){
	var lnk = "https://amitkumarsarangi.github.io/myCreations/seasonTwo/aPreloaderAnimation2/index.html";
	displaySpinOff(lnk);
}
CSS3ACAC.onclick = function(){
	var lnk = "https://amitkumarsarangi.github.io/myCreations/seasonOne/anAnalogClock/index.html";
	displaySpinOff(lnk);
}
CSS3ACDC.onclick = function(){
	var lnk = "https://amitkumarsarangi.github.io/myCreations/seasonOne/digitalClock/index.html";
	displaySpinOff(lnk);
}

// fcc basic FEDP below...
fBFEDPBaTPb.onclick = function(){
	var lnk = "https://amitkumarsarangi.github.io/myCreations/seasonOne/buildATributePage/ver2.html";
	displaySpinOff(lnk);
}
fBFEDPBaSF.onclick = function(){
	var lnk = "https://amitkumarsarangi.github.io/myCreations/seasonOne/buildASurveyForm/index.html";
	displaySpinOff(lnk);
}
fBFEDPBaPLPa.onclick = function(){
	var lnk = "https://amitkumarsarangi.github.io/myCreations/seasonOne/startupLandingPage/index.html";
	displaySpinOff(lnk);
}
fBFEDPBaTDP.onclick = function(){
	var lnk = "https://amitkumarsarangi.github.io/myCreations/seasonOne/buildATechnicalDocumentationPage/index.html";
	displaySpinOff(lnk);
}
fBFEDPBaPPW.onclick = function(){
	var lnk = "https://codepen.io/amitkumarsarangi/full/mRqodz";
	displaySpinOff(lnk);
}

// fcc intermediate FEDP below...
fIFEDPBaRQM.onclick = function(){
	var lnk = "https://amitkumarsarangi.github.io/myCreations/seasonOne/buildARandomQuoteMachine/index.html";
	displaySpinOff(lnk);
}
fIFEDPStLW.onclick = function(){
	var lnk = "https://codepen.io/amitkumarsarangi/full/QpKwPe";
	displaySpinOff(lnk);
}
fIFEDPBaWV.onclick = function(){
	var lnk = "https://codepen.io/amitkumarsarangi/full/XMRRob";
	displaySpinOff(lnk);
}
fIFEDPUtTJA.onclick = function(){
	var lnk = "https://codepen.io/amitkumarsarangi/full/BWdbmx";
	displaySpinOff(lnk);
}

// fcc advanced FEDP below...
fAFEDPBaJC.onclick = function(){
	var lnk = "https://amitkumarsarangi.github.io/myCreations/seasonOne/buildAJavaScriptCalculator/index.html";
	displaySpinOff(lnk);
}
fAFEDPBaPC.onclick = function(){
	var lnk = "https://amitkumarsarangi.github.io/myCreations/seasonOne/buildAPomodoroClock/index.html";
	displaySpinOff(lnk);
}
fAFEDPBaTTTGa.onclick = function(){
	var lnk = "https://amitkumarsarangi.github.io/myCreations/seasonOne/buildATicTacToeGame/index.html"
	displaySpinOff(lnk);
}
fAFEDPBaSG.onclick = function(){
	var lnk = "https://amitkumarsarangi.github.io/myCreations/seasonOne/buildASimonGame/index.html";
	displaySpinOff(lnk);
}

// other projects below...
OPTtV.onclick = function(){
	var lnk = "https://amitkumarsarangi.github.io/myCreations/seasonOne/postcardVenice/index.html";
	displaySpinOff(lnk);
}
OPTI.onclick = function(){
	var lnk = "https://amitkumarsarangi.github.io/myCreations/seasonOne/tourItaliano/index.html";
	displaySpinOff(lnk);
}