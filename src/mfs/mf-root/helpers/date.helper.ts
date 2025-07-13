export class DateHelper {

    /**
     * 
     * @param date 
     */
    static getStartOfMonth(date: Date): Date {
        return new Date(date.getFullYear(), date.getMonth() + 1, 1, 0, 0, 0, 0);
    }

    /**
     * 
     * @param date 
     */
    static getLastYear(date: Date): Date {
        return new Date(date.getFullYear() - 1, date.getMonth() + 2, 1, 0, 0);;
    }
}