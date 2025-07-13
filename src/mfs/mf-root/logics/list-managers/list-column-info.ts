/**
 * 
 */
export class ListColumnInfo {

    /**
     * 
     */
    get isStringType(): boolean {
        return this.isTypeof(this.type, 'String');
    }

    /**
     * 
     */
    get isPercentageType(): boolean {
        return this.isTypeof(this.type, 'Percentage');
    }
    
    /**
     * 
     */
    get isNumberType(): boolean {
        return this.isTypeof(this.type, 'Number');
    }
    
    /**
     * 
     */
    get isDateType(): boolean {
        return this.isTypeof(this.type, 'Date');
    }
    
    /**
     * 
     */
    get isBooleanType(): boolean {
        return this.isTypeof(this.type, 'Boolean');
    }

    /**
     * 
     */
    name: string;

    /**
     * 
     */
    type: any;
    
    /**
     * 
     * @param classType 
     * @param typeName 
     */
    isTypeof(classType: any, typeName: any) {
        if(classType && classType.name)
            return classType.name == typeName;

        return typeof classType === typeName;
    }
}