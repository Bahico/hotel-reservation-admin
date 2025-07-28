import {Component, computed, inject, input, ViewEncapsulation} from '@angular/core';
import {EntityFormPage} from '@components/pages';
import {InputManager} from '@components/logics';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgComponentOutlet} from '@angular/common';
import {TranslateDirective} from '@ngx-translate/core';
import {NzButtonComponent} from 'ng-zorro-antd/button';

/**
 *
 */
@Component({
  selector: 'mf-form',
  templateUrl: 'mf-form.component.html',
  styleUrl: 'mf-form.component.css',
  imports: [
    FormsModule,
    NgComponentOutlet,
    TranslateDirective,
    NzButtonComponent,
    ReactiveFormsModule
  ],
  encapsulation: ViewEncapsulation.None
})
export class MfFormComponent {

    /**
     *
     */
    formPage = input.required<EntityFormPage<any>>();

    /**
     *
     */
    title = input.required<string>();

    /**
     *
     */
    protected readonly inputManager = inject(InputManager);

    /**
     *
     */
    fields = computed(() => this.formPage().getFields());

    /**
     *
     */
    isEdit = computed(() => !!this.formPage().formGroup?.get('id')?.value)

    /**
     *
     */
    closeModal() {
        this.formPage().modalRef.close();
    }

    /**
     *
     */
    getControl(name: string) {
        return <FormControl>this.formPage().formGroup.get(name);
    }
}
