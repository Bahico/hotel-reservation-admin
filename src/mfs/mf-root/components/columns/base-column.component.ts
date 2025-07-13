import {Component, input} from '@angular/core';
import {EntityDecoratorInfo} from '@components/logics';

/**
 *
 */
@Component({
    template: ''
})
export class BaseColumnComponent {
    /**
     *
     */
    column= input.required<EntityDecoratorInfo>();

    /**
     *
     */
    data = input.required<any>();
}
