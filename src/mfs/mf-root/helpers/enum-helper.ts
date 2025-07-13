

export class EnumHelper {

    /**
     * 
     * @param e 
     * @returns 
     */
    static getNamesAndValues<T extends number>(e: any) {
        return EnumHelper.getNames(e).map(n => ({ name: n, value: e[n] as T }));
    }

    /**
     * 
     * @param e 
     * @returns 
     */
    static getNames(e: any) {
        return EnumHelper.getObjValues(e).filter(v => typeof v === 'string') as string[];
    }

    /**
     * 
     * @param e 
     * @returns 
     */
    static getValues<T extends number>(e: any) {
        return EnumHelper.getObjValues(e).filter(v => typeof v === 'number') as T[];
    }

    /**
     * 
     * @param e 
     * @param stringConverter 
     * @returns 
     */
    static getSelectList<T extends number, U>(e: any, stringConverter: (arg: U) => string) {
        const selectList = new Map<T, string>();
        this.getValues(e).forEach(val => selectList.set(val as T, stringConverter(val as unknown as U)));
        return selectList;
    }

    /**
     * 
     * @param e 
     * @param stringConverter 
     * @returns 
     */
    static getSelectListAsArray<T extends number, U>(e: any, stringConverter: (arg: U) => string) {
        return Array.from(this.getSelectList(e, stringConverter), value => ({ value: value[0] as T, presentation: value[1] }));
    }

    /**
     * 
     * @param e 
     * @returns 
     */
    private static getObjValues(e: any): (number | string)[] {
        return Object.keys(e).map(k => e[k]);
    }
}