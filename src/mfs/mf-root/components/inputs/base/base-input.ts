import {Component, input} from "@angular/core";
import {FormControl} from "@angular/forms";
import {EntityDecoratorInfo} from "@components/logics";


/**
 *
 */
@Component({
    template: '',
    standalone: true
})
export class BaseInput {

    /**
     *
     */
    placeHolder = input<string>();

    /**
     *
     */
    info = input<EntityDecoratorInfo>();

    /**
     *
     */
    control = input.required<FormControl>();

    /**
     *
     */
    touched = input<boolean>();

    /**
     *
     */
    focus() {

    }
}
