import {Component, Input, OnDestroy} from '@angular/core';
import {finalize, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {Observable} from 'rxjs/internal/Observable';
import {NzModalRef} from 'ng-zorro-antd/modal';
import {AlertService} from '../../../alert/alert.service';
import {EventManager} from '../../../../util/event-manager.service';
import {AlertComponent} from '../../../alert/alert.component';
import {FormsModule} from '@angular/forms';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    templateUrl: 'entity-delete-modal.component.html',
    styleUrl: '../entity.scss',
    imports: [
        AlertComponent,
        FormsModule,
        NzButtonComponent,
        TranslateModule
    ]
})
export class EntityDeleteModalComponent implements OnDestroy {
    @Input() useFunction: Observable<void>;
    @Input() event: string;

    modalRef: NzModalRef;

    private readonly destroy$ = new Subject();

    loading: boolean;
    translateKey: string;
    translateValues: any;

    constructor(private alertService: AlertService, private readonly eventManager: EventManager) {
    }

    close(): void {
        this.modalRef.close();
    }

    delete(): void {
        this.loading = true;
        this.useFunction
            ?.pipe(
                takeUntil(this.destroy$),
                finalize(() => {
                    this.loading = false;
                    this.close();
                }),
            )
            .subscribe(() => this.onSuccess());
    }

    private onSuccess(): void {
        this.eventManager.broadcast(this.event);
        this.alertService.success(this.translateKey, this.translateValues, true);
    }

    ngOnDestroy(): void {
        this.destroy$.next(undefined);
        this.destroy$.complete();
    }
}
