let secs = 0;
let mins = 0;
let hrs = 0;

let displaySecs = 0;
let displayMins = 0;
let displayHrs = 0;

let status = true;

let interval = null;

function stopWatch(){
    secs++;
    if(secs / 60 === 1){
        secs = 0;
        mins++;

        if(mins / 60 === 1){
            mins = 0;
            hrs++;
        }
    }

    displaySecs = secs < 10 ? "0" + secs : secs;
    displayMins = mins < 10 ? "0" + mins : mins;
    displayHrs = hrs < 10 ? "0" + hrs : hrs;

    document.getElementById("my-clock").innerHTML = displayHrs + ":" + displayMins + ":" + displaySecs;
}

function startStop(){
    if(status === true){
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status = false;
    } else {
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = true;
    }
}

function reset(){
    window.clearInterval(interval);
    
    secs = 0;
    mins = 0;
    hrs = 0;

    document.getElementById("my-clock").innerHTML = "00:00:00";

    document.getElementById("startStop").innerHTML = "Start";

    status = true;
}

