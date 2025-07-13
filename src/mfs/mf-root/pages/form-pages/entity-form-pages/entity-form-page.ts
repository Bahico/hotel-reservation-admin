import {Component, inject, Inject} from "@angular/core";
import {BaseClientService} from "@components/services/base-client.service";
import {BaseFormPage} from "@components/pages";
import {BaseEntityModel} from '@components/models/entity.model';
import {EventManager} from '@components/util/event-manager.service';
import {TranslateService} from '@ngx-translate/core';
import {AlertService} from '@components/components';
import {BaseClientCrudService} from '@components/services';

/**
 *
 */
@Component({template: ''})
export class EntityFormPage<T extends BaseEntityModel> extends BaseFormPage<T> {
    private readonly alertService = inject(AlertService);
    private readonly eventManager = inject(EventManager);
    private readonly translateService = inject(TranslateService);

    /**
     *
     */
    title: string;

    /**
     *
     */
    protected constructor(
        protected readonly service: BaseClientCrudService<T>,
        @Inject(String) classType?: T
    ) {
        super(classType)
    }

    /**
     *
     */
    override ngOnInit() {
        super.ngOnInit();
        if (this.getFields().find(item => item.name === "code" && !item.notCode)) {
            this.initCode();
        }
    }

    /**
     *
     */
    submit() {
        if (this.checkForm()) {
            this.isSubmitting.set(true);
            this.service.submit(this.rowValue).subscribe({
                next: res => this.onSubmitSuccess(res),
                error: err => this.onSubmitError(err)
            })
        }
    }

    /**
     *
     * @returns
     */
    initCode() {
        const key = `code_${this.router.url}`

        let value = localStorage.getItem(key);
        if (value) {
            this.formGroup.get('code').setValue(<any>value);
            return;
        }

        this.service.getEntityNextNumber().subscribe({
            next: res => this.onGetCodeSuccess(res, key),
            error: err => this.onGetEntityError(err)
        })
    }

    /**
     *
     * @param res
     */
    onSubmitSuccess(res: T) {
        this.isSubmitting.set(false);
        const key = `code_${this.router.url}`
        localStorage.removeItem(key);
        this.eventManager.broadcast(this.service.listModification);
        this.modalClose();
      this.alertService.success("dataSubmitSuccess", null, true);
    }

    /**
     *
     * @param err
     */
    onSubmitError(err: any) {
        this.isSubmitting.set(false);
    }

    /**
     *
     */
    get rowValue(): T {
        return <T>this.formGroup.getRawValue();
    }
}
