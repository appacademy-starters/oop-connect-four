export class ColumnWinInspector {
    static inspect(column) {
        for (let i = 0; i <= 2; i++) {
            if (
                column.getTokenAt(i) === column.getTokenAt(i + 1) &&
                column.getTokenAt(i) === column.getTokenAt(i + 2) &&
                column.getTokenAt(i) === column.getTokenAt(i + 3) &&
                column.getTokenAt(i) !== null) {
                return column.getTokenAt(i);
            }
        }
        return 0;
    }
}
