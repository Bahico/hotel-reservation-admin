import {EntityDecoratorInfo} from "@components/logics";
import {FormGroup} from '@angular/forms';

/**
 *
 */
export interface ValidatorContext {

    /**
     *
     */
    formGroup: FormGroup;

    /**
     *
     */
    info: EntityDecoratorInfo;
}
