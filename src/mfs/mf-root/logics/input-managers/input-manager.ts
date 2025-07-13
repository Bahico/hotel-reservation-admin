import {Injectable, Type} from "@angular/core";
import {BaseInput} from '@components/components';
import {InputTextComponent} from "../../components/inputs/input-text/input-text.component";
import {InputNumberComponent} from "../../components/inputs/input-number/input-number.component";
import {Comment, EnumNumber, Password, Percentage, SelectNumber} from '@components/logics';
import {InputPasswordComponent} from "../../components/inputs/input-password/input-password.component";
import {InputSelectComponent} from "../../components/inputs/input-select/input-select.component";
import {InputDateComponent} from "../../components/inputs/input-date/input-date.component";
import {InputCommentComponent} from "../../components/inputs/input-comment/input-comment.component";
import {InputEnumComponent} from "../../components/inputs/input-enum/input-enum.component";
import {EntityRelation} from '@components/logics';
import {InputRelationComponent} from '@components/components/inputs/input-relation/input-relation.component';
import {InputBooleanComponent} from '@components/components/inputs/input-boolean/input-boolean.component';

/**
 *
 */
@Injectable({ providedIn: 'root' })
export class InputManager {

    /**
     *
     */
    private readonly inputs: Map<Type<any>, Type<BaseInput>> = new Map([]);

    /**
     *
     */
    constructor() {
        this.inputs.set(String, InputTextComponent);
        this.inputs.set(Number, InputNumberComponent);
        this.inputs.set(Boolean, InputBooleanComponent);
        this.inputs.set(Date, InputDateComponent);
        this.inputs.set(Percentage, InputNumberComponent);
        this.inputs.set(Password, InputPasswordComponent);
        this.inputs.set(SelectNumber, InputSelectComponent);
        this.inputs.set(Comment, InputCommentComponent);
        this.inputs.set(EnumNumber, InputEnumComponent);
        // this.inputs.set(TabArray<any>, InputTabComponent);
        this.inputs.set(EntityRelation, InputRelationComponent);
    }

    /**
     *
     * @param type
     * @returns
     */
    getComponent(type: Type<any>) {
        return this.inputs.get(type);
    }
}
