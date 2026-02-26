const startBtn = document.getElementById("startBtn");
const timeDisplay = document.getElementById("time");

let timeLeft = 60;
let timer = null;


startBtn.addEventListener("click", startTest);


function startTest() {

    timeLeft = 60;

    timeDisplay.textContent = timeLeft;

    timer = setInterval(() => {

        timeLeft--;

        timeDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {

            clearInterval(timer);

            alert("Tempo acabou!");

        }

    }, 1000);

}