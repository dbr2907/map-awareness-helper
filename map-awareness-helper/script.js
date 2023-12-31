let countdownInterval;
let isCounting = false;

document.getElementById('toggleButton').addEventListener('click', toggleCountdown);

function toggleCountdown() {
    if (isCounting) {
        stopCountdown();
    } else {
        startCountdown();
    }
}

function startCountdown() {
    isCounting = true;
    document.getElementById('toggleButton').classList.add('active');
    let count = 10;

    updateCountdown(count);

    countdownInterval = setInterval(() => {
        count--;

        if (count > 0) {
            updateCountdown(count);
        } else {
            playBeep();
            updateCountdown("Check Map!");
            count = 10;
        }
    }, 1000);
}

function stopCountdown() {
    isCounting = false;
    document.getElementById('toggleButton').classList.remove('active');
    clearInterval(countdownInterval);
    updateCountdown(10);
}

function updateCountdown(count) {
    document.getElementById('countdown').innerText = count;
}

function playBeep() {
    const audio = new Audio('sounds/beep.mp3');
    audio.play();
}
