import { Game } from './game.js';
//import { Column } from './column.js';
let game;
const gameName = document.getElementById('game-name');
function updateUI(){
    const board = document.getElementById('board-holder');
    if(!game){
        board.classList.add('is-invisible');
    }else{
        board.classList.remove('is-invisible');
        gameName.innerHTML = game.getName();
        for(let columnIdx = 0; columnIdx <= 6; columnIdx++){
           
            if(game.isColumnFull(columnIdx)){
                document.getElementById(`column-${columnIdx}`).classList.add('full');
            }else{
                document.getElementById(`column-${columnIdx}`).classList.remove('full');
            }
        }
    }
    for(let rowIdx = 0; rowIdx <= 5; rowIdx++){
        for(let columnIdx = 0; columnIdx <= 6; columnIdx++){
            const square = document.getElementById(`square-${rowIdx}-${columnIdx}`);
            square.innerHTML = '';
            const playerNumber = game.getTokenAt(rowIdx,columnIdx);
            if(playerNumber === 1){
                const tokenDiv = document.createElement('div');
                tokenDiv.classList.add('black', 'token');
                square.appendChild(tokenDiv);
            }else if(playerNumber === 2){
                const tokenDiv = document.createElement('div');
                tokenDiv.classList.add('red', 'token');
                square.appendChild(tokenDiv);
            }
        }
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
        const targetId = event.target.id;
        if(!targetId.startsWith('column-')) return;
        const columnIdx = Number.parseInt(targetId.split('column-').join(''));
        game.playInColumn(columnIdx);
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
