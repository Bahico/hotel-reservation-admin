import {Component, ViewEncapsulation} from '@angular/core';
import {EntityFormPage} from '@components/pages';
import {TranslateModule} from '@ngx-translate/core';
import {MfFormComponent} from '@components/components';

/**
 *
 */
@Component({
  templateUrl: 'mf-form-default.component.html',
  styleUrl: 'mf-table.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    TranslateModule,
    MfFormComponent
  ]
})
export class MfFormDefaultComponent<T> extends EntityFormPage<T> {

  /**
   *
   */
  constructor() {
    super(undefined);
  }
}
