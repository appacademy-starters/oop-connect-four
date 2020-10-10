export class RowWinInspector {
    static inspect(columns) {
        let winCheck;
        for (let i = 0; i < 6; i++) {
            let currentTokens = [];
            columns.forEach(column => { currentTokens.push(column.getTokenAt(i)) });
            if (((currentTokens.reduce((acc, token) => acc + token) / 4) === 1 ||
                (currentTokens.reduce((acc, token) => acc + token) / 4) === 2) &&
                currentTokens.every(token => token)) {
                    winCheck = currentTokens[0];
            }
        }
        if (winCheck) return winCheck;
        return 0;
    }
}
