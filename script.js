// 'use strict';
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
let score1El = document.querySelector('.score--0');
let score2El = document.querySelector('.score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let currenScore1El = document.querySelector('#current--0');
let currenScore2El = document.querySelector('#current--1');

score1El = 0;
score2El = 0;
diceEl.classList.add('hidden');

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const init = function () {

}

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

btnNew.addEventListener('click', function refreshPage() {
    window.location.reload();
})


btnRoll.addEventListener('click', function () {
    if (playing) {
        let dice = Math.floor(Math.random() * 6) + 1;
        console.log(dice);

        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        if (dice !== 1) {
            currentScore += dice;

            document.getElementById(`current--${activePlayer}`).textContent = currentScore;


        } else {
            switchPlayer();

        }
    }
})

btnHold.addEventListener('click', function () {
    if (playing) { } {
        score[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer]

        if (score[activePlayer] >= 10) {
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
        } else {

            switchPlayer();
        }
    }

})
