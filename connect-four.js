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
    let playerColor = 1;
    if (!(game.currentPlayer% 2)) {
        playerColor = 'black';
    } else {
        playerColor = 'red';
    }
    document.querySelectorAll('.click-target')
    .forEach(target => {
        target.classList.add(playerColor);
    });
});
