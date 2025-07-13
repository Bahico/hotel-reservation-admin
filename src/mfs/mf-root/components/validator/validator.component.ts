import { Component, input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

/**
 *
 */
@Component({
    templateUrl: 'validator.component.html',
    styleUrl: 'validator.component.scss',
    imports: [
        TranslateModule
    ],
    selector: 'validator'
})
export class ValidatorComponent implements OnInit, ControlValueAccessor {
    touched = input.required<boolean>();

    /**
     *
      */
    control: FormControl;

    /**
     *
     */
    constructor(
        @Optional() @Self()  private readonly ngControl: NgControl
    ) {
        ngControl.valueAccessor = this
    }

    /**
     *
     */
    ngOnInit() {
        this.control = <FormControl>this.ngControl.control;
    }

    /**
     *
     */
    get errors() {
        return Object.entries(this.control.errors || {});
    }

    /**
     * for from outside change value
     * @param obj
     */
    writeValue(obj: any): void {
        // this.control.setValue(obj)
    }

    /**
     * for control true work need
     * @param fn
     */
    registerOnChange(fn: any): void {}
    registerOnTouched(fn: any): void {}
    setDisabledState(isDisabled: boolean): void {}
}
