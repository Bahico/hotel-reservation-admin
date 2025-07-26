import {ControlValueAccessor} from '@angular/forms';
import {Component, model} from '@angular/core';

@Component({template: ''})
export abstract class BaseModelComponent<Model = any> implements ControlValueAccessor {
  /**
   *
   */
  itemValue = model<Model>();

  /**
   *
   */
  abstract change(): void;

  /**
   *
   */
  onChange: (v: unknown) => void = () => {};

  /**
   *
   * @param v
   */
  writeValue(v: any): void {
    this.itemValue.set(v);
  }

  /**
   *
   * @param fn
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   *
   * @param fn
   */
  registerOnTouched(fn: any): void {
  }

  /**
   *
   * @param isDisabled
   */
  setDisabledState?(isDisabled: boolean): void {
  }
}
