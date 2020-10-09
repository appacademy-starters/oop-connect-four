export class ColumnWinInspector {
    // constructor(column) {
    //     this.columnToCheck = column;
    // }
    static inspect(column) {
        // let consecutiveCounter = 1;
        // let winningPlayerTracker = 0;
        console.log('Column passed in:',column, column.tokens);
        for (let i = 0; i <= 2; i++) {
            console.log('Cheking win logic:',
                column.tokens[i] === column.tokens[i + 1],
                column.tokens[i] === column.tokens[i + 2],
                column.tokens[i] === column.tokens[i + 3],
                column.tokens[i] !== null);
            if (column.tokens[i] === column.tokens[i + 1] &&
                column.tokens[i] === column.tokens[i + 2] &&
                column.tokens[i] === column.tokens[i + 3] &&
                column.tokens[i] !== null) {
                return column.tokens[i];
            }
            return 0;
        }
        // console.log('Current winner is possibly:',winningPlayerTracker);
        // if (consecutiveCounter === 4) {
        //     return winningPlayerTracker;
        // } else {
        //     return 0;
        // }
    }
}
