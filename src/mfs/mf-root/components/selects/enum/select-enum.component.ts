import {Component, forwardRef, input} from '@angular/core';
import {FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';
import {BaseModelComponent} from '@components/components';

@Component({
  selector: 'select-enum',
  templateUrl: 'select-enum.component.html',
  imports: [
    FormsModule,

  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SelectEnumComponent)
    }
  ]
})
export class SelectEnumComponent extends BaseModelComponent {
  options = input.required<any[]>();

  change() {
    this.onChange(this.itemValue());
  }
}
