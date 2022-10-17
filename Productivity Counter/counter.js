//stopwatch sec 1//

const time_set = document.querySelector(".stopwatch .timer");
const start_btn = document.getElementById("start");
const stop_btn = document.getElementById("stop");
const reset_btn = document.getElementById("reset");

let seconds = 0;
let interval = null;

start_btn.addEventListener('click', start);
stop_btn.addEventListener('click', stop);
reset_btn.addEventListener('click', reset);

function timer () {
    seconds++;
    
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;

    if (secs < 10) secs = '0' + secs;
    if (mins < 10) mins = "0" + mins;
    if (hrs < 10) hrs = "0" + hrs;


    time_set.innerText = `${hrs}:${mins}:${secs}`;
}

function start () {
    if (interval) {
        return
    }

    interval = setInterval(timer, 1000);
}
function stop (){
    clearInterval(interval);
    interval = null;
}

function reset () {
    stop();
    seconds = 0;
    time_set.innerText = "00:00:00"
}

//Counters section 2//

let add = document.querySelector(".add");
let sub = document.querySelector(".sub");
let resets = document.querySelector(".resets");
let counter = document.querySelector(".counter");

add.addEventListener('click', addCounter);
sub.addEventListener('click', subCounter);
resets.addEventListener('click', resetsCounter);

function addCounter() {
    counter_num = counter.innerHTML
    counter.innerHTML = parseInt(counter_num) + 1
}

function subCounter() {
    counter_num = counter.innerHTML
    if (counter_num == 0){
        return false
    }
    counter.innerHTML = parseInt(counter_num) - 1
}

function resetsCounter () {
    counter.innerHTML = 0;

}



