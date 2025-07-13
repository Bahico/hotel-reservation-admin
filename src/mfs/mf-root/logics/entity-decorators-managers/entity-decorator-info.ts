import {Type} from "@angular/core";
import {ValidatorFunctionModel} from '@components/logics';
import {ValidatorModel} from '@components/logics';
import {EntityRelation} from '@components/logics';

/**
 *
 */
export class EntityDecoratorInfo {

    /**
     *
     */
    name: string;

    /**
     *
     */
    identification: boolean;

    /**
     *
     */
    title: string;

    /**
     *
     */
    isDisplay: boolean;

    /**
     *
     */
    isEditable: boolean;

    /**
     *
     */
    isRequired: boolean;

    /**
     *
     */
    validators: ValidatorModel = {};

    /**
     *
     */
    validatorFuncs: ValidatorFunctionModel[];

    /**
     *
     */
    isNullable: boolean;

    /**
     *
     */
    selectService: any;

    /**
     *
     */
    relation?: EntityRelation;

    /**
     *
     */
    enumType: Type<any>;

    /**
     *
     */
    type: any;

    /**
     *
     */
    notCode: boolean;

    /**
     *
     */
    singleFilter: boolean;

    /**
     * min 1; max 12
     */
    span: number;

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
     * @param classType
     * @param typeName
     */
    isTypeof(classType: any, typeName: any) {
        if (classType && classType.name)
            return classType.name == typeName;

        return typeof classType === typeName;
    }
}
