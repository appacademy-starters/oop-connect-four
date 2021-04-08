export class Column {
    constructor() {
        this.tokens = [null, null, null, null, null, null]

    }

    add(playerNum) {
        for(let i = 5; i >= 0; i--) {
            if(this.tokens[i] === null) {
                this.tokens[i] = playerNum;
                break;
            }
        }

    }

    getTokenAt(rowIndex) {
        return this.tokens[rowIndex];
    }
}
