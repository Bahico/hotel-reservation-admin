import { RowAction } from "../../helpers/row-action";
import { RowInfo } from "./row-info";

/**
 * 
 */
export class RowManager {

    /**
     * 
     * @param rows 
     */
    static reCalculateRowNumbers(rows: RowInfo[]) {
        let rowNumber = 1;
        let notDeletedRows = rows.filter(f => f.rowAction != RowAction.Deleted);
        notDeletedRows.forEach(f => f.rowNumber = rowNumber++);
    }

    /**
     * 
     * @param rows 
     */
    static initRowsDefaults(rows: RowInfo[]) {
        rows.forEach(f => f.key = f.id);
        RowManager.reCalculateRowNumbers(rows);
    }

    /**
     * 
     * @param rows 
     * @param row 
     */
    static addRow<T extends RowInfo>(rows: RowInfo[], row: T): T {
        row.rowAction = RowAction.Added;
        row.key = RowManager.getTabKey(rows);

        rows.unshift(row);
        RowManager.reCalculateRowNumbers(rows);
        return row;
    }

    /**
     * 
     * @returns 
     */
    static getTabKey(rows: RowInfo[]) {
        if (!rows.length)
            return 1;

        return Math.max(...rows.map(o => o.key)) + 1;
    }

    /**
     * 
     * @param rows 
     * @param row 
     */
    static deleteRow(rows: RowInfo[], row: RowInfo) {
        if (row.rowAction == RowAction.Added) {
            RowManager.deleteRowFromList(rows, row);
            RowManager.reCalculateRowNumbers(rows);
            return;
        }

        row.rowAction = RowAction.Deleted;
        RowManager.reCalculateRowNumbers(rows);
    }

    /**
     * 
     * @param rows 
     * @param row 
     */
    private static deleteRowFromList(rows: RowInfo[], row: RowInfo) {
        const index: number = rows.indexOf(row);
        if (index !== -1) {
            rows.splice(index, 1);
        }
    }
}