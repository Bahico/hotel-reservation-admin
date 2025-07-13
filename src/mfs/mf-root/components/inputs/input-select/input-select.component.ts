import {Component, input, output} from '@angular/core';
import {BaseInput} from '../base/base-input';
import {ReactiveFormsModule} from '@angular/forms';
import {ValidatorComponent} from '@components/components/validator/validator.component';
import {TranslateDirective} from '@ngx-translate/core';
import { NzOptionComponent, NzSelectComponent } from 'ng-zorro-antd/select';

@Component({
  selector: 'input-select',
  imports: [
    ValidatorComponent,
    ReactiveFormsModule,
    TranslateDirective,
    NzSelectComponent,
    NzOptionComponent
  ],
  templateUrl: 'input-select.component.html'
})
export class InputSelectComponent extends BaseInput {

  /**
   *
   */
  nzValue = input("id");

  /**
   *
   */
  nzLabel = input("name");

  /**
   *
   */
  isShowSearch = input(true);

  /**
   *
   */
  entities = input<any[]>();
  entitiesChange = output<any[]>()

  /**
   *
   */
  onGetAllSuccess(res: any[]): void {
    const items = []

    if (this.info().isNullable)
      items.push({
        id: undefined as any,
        name: 'Tanlanmagan',
        designedName: ''
      });

    items.push(...res);
    this.entitiesChange.emit(items);
  }

  /**
   *
   * @param err
   */
  onGetAllError(err: any): void {
  }
}
