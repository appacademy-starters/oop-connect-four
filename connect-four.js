import { Game } from './game.js';
let game;
const gameName = document.getElementById('game-name');
function updateUI(){
    const board = document.getElementById('board-holder');
    if(!game){
        board.classList.add('is-invisible');
    }else{
        board.classList.remove('is-invisible');
        gameName.innerHTML = game.getName();
    }
    const clickTargets = document.getElementById('click-targets');
    const currentPlayer = game.currentPlayer;
    if (currentPlayer === 1) {
        clickTargets.classList.add('black');
        clickTargets.classList.remove('red');
    } else {
        clickTargets.classList.add('red');
        clickTargets.classList.remove('black');
    }
}

window.addEventListener('DOMContentLoaded', event => {
    const playerOne = document.getElementById('player-1-name');
    const playerTwo = document.getElementById('player-2-name');
    const newGame = document.getElementById('new-game');
    playerOne.addEventListener('keyup', event =>{
        if(playerOne.value !== '' && playerTwo.value !== ''){
            newGame.removeAttribute('disabled')
        }
    })
    playerTwo.addEventListener('keyup', event =>{
        if(playerOne.value !== '' && playerTwo.value !== ''){
            newGame.removeAttribute('disabled')
        }
    })
    newGame.addEventListener('click', event =>{

        game = new Game(playerOne.value, playerTwo.value);
        updateUI();
    })
    const clickTargets = document.getElementById('click-targets');
    clickTargets.addEventListener('click', event => {
        game.playInColumn();
        updateUI();
    });
    // let playerColor;
    // if (!(game.currentPlayer% 2)) {
    //     playerColor = 'black';
    // } else {
    //     playerColor = 'red';
    // }
    // document.querySelectorAll('.click-target')
    // .forEach(target => {
    //     console.log(target.id)
    //     target.classList.add(playerColor);
    // });
});
