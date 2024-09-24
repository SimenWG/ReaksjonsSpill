var startTime = new Date();
var endTime = new Date();
var startPressed = false;
var bgChangeStarted = false;
var maxWait = 20;
var timerID;

function startTest() {
    document.body.style.background = document.response.bgColorChange.options[document.response.bgColorChange.selectedIndex].text;
    bgChangeStarted = true;
    startTime = new Date();
}

function remark(responseTime) {
    var responseString = "";
    if (responseTime < 0.20)
        responseString = "Bra Jobba!";
    else if (responseTime < 0.30)
        responseString = "BRA!";
    else if (responseTime < 0.40)
        responseString = "Kunne vært bedre...";
    else if (responseTime < 0.50)
        responseString = "Øv mer!";
    else if (responseTime < 1)
        responseString = "Er du full?";
    else
        responseString = "Hallooo sover du?";

    return responseString;
}

function stopTest() {
    if (bgChangeStarted) {
        endTime = new Date();
        var responseTime = (endTime.getTime() - startTime.getTime()) / 1000;

        document.body.style.background = "white";
        alert("Responstiden din er: " + responseTime + " sekunder " + "\n" + remark(responseTime));
        startPressed = false;
        bgChangeStarted = false;
    } else {
        if (!startPressed) {
            alert("Trykk start for å starte testen");
        } else {
            clearTimeout(timerID);
            startPressed = false;
            alert("DU JUKSER!");
        }
    }
}

var randMULTIPLIER = 0x015a4e35;
var randINCREMENT = 1;
var today = new Date();
var randSeed = today.getSeconds();

function randNumber() {
    randSeed = (randMULTIPLIER * randSeed + randINCREMENT) % (1 << 31);
    return ((randSeed >> 15) & 0x7fff) / 32767;
}

function startit() {
    if (startPressed) {
        alert("Allerede startet. Trykk stop for å stoppe");
        return;
    } else {
        startPressed = true;
        timerID = setTimeout(startTest, 6000 * randNumber());
    }
}
