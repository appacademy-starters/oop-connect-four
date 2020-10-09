export class ColumnWinInspector {
    constructor(column) {
        this.columnToCheck = column;
    }
    inspect() {
        let consecutiveCounter = 0;
        let winningPlayerTracker;
        for (let i = this.columnToCheck.length - 1; i >= 0; i--) {
            winningPlayerTracker = this.columnToCheck[i];
            consecutiveCounter++;
            if (i !== 5) {
                if (this.columnToCheck[i] === this.columnToCheck[i + 1]) {
                    consecutiveCounter++
                } else {
                    consecutiveCounter = 0;
                }
            }
        }
        switch (consecutiveCounter) {

        }
    }
}
