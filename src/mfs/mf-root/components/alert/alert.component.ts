import {Component, effect} from '@angular/core';
import {NzAlertModule} from 'ng-zorro-antd/alert';
import {CommonModule} from '@angular/common';
import {AlertService} from './alert.service';

@Component({
    selector: 'alert',
    template: `
    <nz-alert *ngIf="alertService.get()" class="mb-3" [nzType]="alertService.get().type" nzMessage="{{ alertService.get().message }}" nzShowIcon nzCloseable (nzOnClose)="alertService.clear()">
    </nz-alert>
  `,
    styles: [
        `
        :host {
            display: flex;
            width: 100%;
            flex-direction: column;
        }
        .mb-3 {
            margin-bottom: 1rem;
        }
        `
    ],
    imports: [CommonModule, NzAlertModule]
})
export class AlertComponent {

  constructor(
    protected readonly alertService: AlertService
  ) {
    effect(() => {
      if (this.alertService.get()) {
        window.scrollTo(0, 0);
      }
    })
  }
}
