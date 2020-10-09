import { Column } from "./column.js";
import { ColumnWinInspector } from './column-win-inspector.js';
export class Game {
    constructor(playerOneName, playerTwoName){
        this.playerOneName = playerOneName;
        this.playerTwoName = playerTwoName;
        this.currentPlayer = 1;
        this.winnerNumber = 0;
        this.columns = [
                    new Column(),
                    new Column(),
                    new Column(),
                    new Column(),
                    new Column(),
                    new Column(),
                    new Column(),
        ]
    }
    checkForColumnWin() {
        this.columns.forEach(column => {
            console.log('Check column win against: ',column)
            // const inspector = new ColumnWinInspector;
            const winNumber = ColumnWinInspector.inspect(column);
            if (winNumber === 1 ||
                winNumber === 2) {
                    this.winnerNumber = winNumber;
                }
        });
        console.log('Winner number: ',this.winnerNumber);
    }
    playInColumn(columnIdx) {
        this.columns[columnIdx].add(this.currentPlayer);
        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
        this.checkForTie();
        this.checkForColumnWin();
    }
    getName(){
        if (this.winnerNumber === 3) {
            return `${this.playerOneName} ties with ${this.playerTwoName}!`;
        } else if (this.winnerNumber === 1) {
            return `${this.playerOneName} wins!`;
        } else if (this.winnerNumber === 2) {
            return `${this.playerTwoName} wins!`;
        }
        return `${this.playerOneName} vs ${this.playerTwoName}`;
    }
    getTokenAt(rowIdx, columnIdx){
       return this.columns[columnIdx].getTokenAt(rowIdx);
    }
    isColumnFull(columnIdx){
        if (this.winnerNumber === 1 ||
            this.winnerNumber === 2) return true;
        return this.columns[columnIdx].isFull();
    }
    checkForTie() {
        if (this.columns.every(column => column.isFull())) return this.winnerNumber = 3;
    }
}
