import { EntityDecoratorInfo } from '@components/logics';

/**
 *
 */
export class ListManager {

    /**
     *
     * @param classType
     */
    static initTypeInfo(classType: any) {

    }

    /**
     *
     * @param classType
     */
    static getColumns(classType: any): EntityDecoratorInfo[] {
        return classType['fieldsInfo'].filter(f => f.isDisplay);
    }

    /**
     *
     * @param classType
     */
    static getColumnsForUpdate(classType: any): EntityDecoratorInfo[] {
        return classType['fieldsInfo'].filter(f => f.isDisplay || f.isEditable);
    }
}
