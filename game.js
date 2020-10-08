import { Column } from "./column.js";

export class Game {
    constructor(playerOneName, playerTwoName){
        this.playerOneName = playerOneName;
        this.playerTwoName = playerTwoName;
        this.currentPlayer = 1;
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
    playInColumn(columnIdx) {
        this.columns[columnIdx].add(this.currentPlayer);
        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
    }
    getName(){
        return `${this.playerOneName} vs ${this.playerTwoName}`
    }
    getTokenAt(rowIdx, columnIdx){
       return this.columns[columnIdx].getTokenAt(rowIdx);
    }
    isColumnFull(columnIdx){
        return this.columns[columnIdx].isFull();
    }
}
