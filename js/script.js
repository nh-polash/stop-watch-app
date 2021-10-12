// set variable for initialization
let hr = min = sec = ms = "0" + 0,
startTimer;

// get all buttons by querySelector
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

// start watch function
const start = () => {
    startBtn.classList.add('active');
    stopBtn.classList.remove('stopActive')

    startTimer = setInterval(() => {
        ms++;
        ms = ms < 10 ? "0" + ms : ms;
        if(ms == 100) {
            sec++;
            sec = sec < 10 ? "0" + sec : sec;
            ms = "0" + 0;
        }
        if(sec == 60) {
            min++;
            min = min < 10 ? "0" + min : min;
            sec = "0" + 0;
        }
        if(min == 60) {
            hr++;
            hr = hr < 10 ? "0" + hr : hr;
            min = "0" + 0;
        }
        putValue();
    }, 10); // 1000ms = 1s
}

// stop watch function
const stop = () => {
    startBtn.classList.remove('active');
    stopBtn.classList.add('stopActive')
    clearInterval(startTimer);
}

// reset watch function
const reset = () => {
    startBtn.classList.remove('active');
    stopBtn.classList.remove('stopActive')
    clearInterval(startTimer);
    hr = min = sec = ms = "0" + 0;
    putValue();
}

// add event listener in all buttons
startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

// set inner text in html
const putValue = () =>  {
    document.querySelector('.ms').innerText = ms;
    document.querySelector('.sec').innerText = sec;
    document.querySelector('.min').innerText = min;
    document.querySelector('.hour').innerText = hr;
}