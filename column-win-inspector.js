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
            column.getTokenAt(i) === column.getTokenAt(i + 1),
            column.getTokenAt(i) === column.getTokenAt(i + 2),
            column.getTokenAt(i) === column.getTokenAt(i + 3),
            column.getTokenAt(i) !== null);
            if (
                column.getTokenAt(i) === column.getTokenAt(i + 1) &&
                column.getTokenAt(i) === column.getTokenAt(i + 2) &&
                column.getTokenAt(i) === column.getTokenAt(i + 3) &&
                column.getTokenAt(i) !== null) {
                return column.getTokenAt(i);
            }
        }
        return 0;
        // console.log('Current winner is possibly:',winningPlayerTracker);
        // if (consecutiveCounter === 4) {
        //     return winningPlayerTracker;
        // } else {
        //     return 0;
        // }
    }
}
