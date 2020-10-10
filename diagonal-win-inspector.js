export class DiagonalWinInspector {
    static inspect(columns) {
        let column1 = columns[0];
        let column2 = columns[1];
        let column3 = columns[2];
        let column4 = columns[3];
        for (let i = 0; i < 3; i++) {
            let currentTokenCol1DownSlant = column1.getTokenAt(i);
            let currentTokenCol2DownSlant = column2.getTokenAt(i+1);
            let currentTokenCol3DownSlant = column3.getTokenAt(i+2);
            let currentTokenCol4DownSlant = column4.getTokenAt(i+3);
            let currentTokenCol1UpSlant = column1.getTokenAt(i+3);
            let currentTokenCol2UpSlant = column2.getTokenAt(i+2);
            let currentTokenCol3UpSlant = column3.getTokenAt(i+1);
            let currentTokenCol4UpSlant = column4.getTokenAt(i);
            if (currentTokenCol1DownSlant === currentTokenCol2DownSlant &&
                currentTokenCol1DownSlant === currentTokenCol3DownSlant &&
                currentTokenCol1DownSlant === currentTokenCol4DownSlant &&
                currentTokenCol1DownSlant !== null) {
                    return currentTokenCol1DownSlant;

            } else if (currentTokenCol1UpSlant === currentTokenCol2UpSlant &&
                currentTokenCol1UpSlant === currentTokenCol3UpSlant &&
                currentTokenCol1UpSlant === currentTokenCol4UpSlant &&
                currentTokenCol1UpSlant !== null) {
                    return currentTokenCol1UpSlant;
            }
        }
        return 0;
    }
}
