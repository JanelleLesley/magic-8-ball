const eightBallButton = document.querySelector('#eightBall');
let eightBall = '';

function randomNumber() {
    
    eightBall = Math.floor(Math.random() * 8);
    if (eightBall === 0) {
        document.getElementById('ptag').innerHTML = 'It is certain';

    } else if (eightBall === 1) {
        document.getElementById('ptag').innerHTML = 'It is decidely so';

    } else if (eightBall === 2) {
        document.getElementById('ptag').innerHTML = 'Cannot predict now';

    } else if (eightBall === 3) {
        document.getElementById('ptag').innerHTML = "Don't count on it";

    } else if (eightBall === 4) {
        document.getElementById('ptag').innerHTML = 'My sources say no';

    } else if (eightBall === 5) {
        document.getElementById('ptag').innerHTML = 'Outlook not so good';

    } else if (eightBall === 6) {
        document.getElementById('ptag').innerHTML = 'Unsure, try again';

    } else if (eightBall === 7) {
        document.getElementById('ptag').innerHTML = 'Signs point to yes';

    } else {
        document.getElementById('ptag').innerHTML = 'ask again later';
    }
};

eightBallButton.addEventListener("click", randomNumber);