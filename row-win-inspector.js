export class RowWinInspector {
    constructor(columns) {
        this.columns = columns;
    }
    inspect() {
        let column1 = this.columns[0];
        let column2 = this.columns[1];
        let column3 = this.columns[2];
        let column4 = this.columns[3];
        for (let i = 0; i < 6; i++) {
            let currentTokenCol1 = column1.getTokenAt(i);
            let currentTokenCol2 = column2.getTokenAt(i);
            let currentTokenCol3 = column3.getTokenAt(i);
            let currentTokenCol4 = column4.getTokenAt(i);
            if (currentTokenCol1 === currentTokenCol2 &&
                currentTokenCol1 === currentTokenCol3 &&
                currentTokenCol1 === currentTokenCol4 &&
                currentTokenCol1 !== null) {
                    return currentTokenCol1;
            }
        }
        return 0;
    }
}
