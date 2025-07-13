import {Injectable, Type} from '@angular/core';
import {EntityViewOptions} from '@components/components/entities/entity/entity-view/entity-view-options.model';
import {EntityDecoratorInfo} from '@components/logics';
import stringViewFunction from '@components/field/view/string-view.function';
import numberViewFunction from '@components/field/view/number-view.function';
import dateViewFunction from '@components/field/view/date-view.function';
import {Percentage, Comment, SelectNumber, EnumNumber, TabArray} from '@components/logics';
import {EntityRelation} from '@components/logics';
import relationViewFunction from '@components/field/view/relation-view.function';
import booleanViewFunction from '@components/field/view/boolean-view.function';
import enumViewFunction from '@components/field/view/enum-view.function';

/**
 *
 */
@Injectable({ providedIn: 'root' })
export class ViewManager {

    /**
     *
     */
    private inputs: Map<Type<any>, (item: any, field: EntityDecoratorInfo) => EntityViewOptions> = new Map([]);

    /**
     *
     */
    constructor() {
        this.inputs.set(String, stringViewFunction);
        this.inputs.set(Number, numberViewFunction);
        this.inputs.set(Date, dateViewFunction);
        this.inputs.set(Boolean, booleanViewFunction);
        this.inputs.set(Percentage, numberViewFunction);
    //     this.inputs.set(Password, InputPasswordComponent);
        this.inputs.set(SelectNumber, stringViewFunction);
        this.inputs.set(Comment, stringViewFunction);
        this.inputs.set(EnumNumber, enumViewFunction);
        this.inputs.set(TabArray<any>, stringViewFunction);
        this.inputs.set(EntityRelation, relationViewFunction);
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
