import {Injectable, Type} from '@angular/core';
import {NglFilterField} from '@components/filter-field/ngl-filter-field';
import {EntityDecoratorInfo} from '@components/logics';
import stringFilterFunction from '@components/field/filter/string-filter.function';
import numberFilterFunction from '@components/field/filter/number-filter.function';
import dateFilterFunction from '@components/field/filter/date-filter.function';
import {Comment, EnumNumber, Percentage} from '@components/logics';
import {EntityRelation} from '@components/logics';
import relationFilterFunction from '@components/field/filter/relation-filter.function';
import booleanFilterFunction from '@components/field/filter/boolean-filter.function';
import enumFilterFunction from '@components/field/filter/enum-filter.function';

/**
 *
 */
@Injectable({providedIn: 'root'})
export class FilterManager {

    /**
     *
     */
    private inputs: Map<Type<any>, (field: EntityDecoratorInfo) => NglFilterField[]> = new Map([]);

    /**
     *
     */
    constructor() {
        this.inputs.set(String, stringFilterFunction);
        this.inputs.set(Number, numberFilterFunction);
        this.inputs.set(Date, dateFilterFunction);
        this.inputs.set(Percentage, numberFilterFunction);
        //     this.inputs.set(Password, InputPasswordComponent);
        this.inputs.set(Boolean, booleanFilterFunction);
        this.inputs.set(Comment, stringFilterFunction);
        this.inputs.set(EntityRelation, relationFilterFunction);
        this.inputs.set(EnumNumber, enumFilterFunction);
        // this.inputs.set(TabArray<any>, stringViewFunction);
    }

    /**
     *
     * @param type
     * @returns
     */
    getFunction(type: Type<any>) {
        return this.inputs.get(type);
    }
}
