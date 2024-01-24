const startpage = document.querySelector(".start")
const containergame = document.querySelector(".containergame")
const timeStartGame = document.querySelector(".time")
var timeStart = 3

const player1 = true; 
const player2 = false;
var currentplayer = "X";


startpage.addEventListener('click', () => {
    startpage.style.display = 'none';
    timeStartGame.style.display = 'flex';

    setTimeout(() => {
        timeStartGame.innerHTML = timeStart;
        setInterval(() => {
            timeStart--
            timeStartGame.innerHTML = timeStart;

            if(timeStart == 0) {
                timeStartGame.innerHTML = 'GO';
            }
        }, 1000);
    }, 500);

    setTimeout(() => {
        timeStartGame.style.display = 'none'
        containergame.style.display = 'flex';
        game();
    }, 4000)
})



