import {Injectable, signal, WritableSignal} from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import {Alert} from './alert.model';
import {TranslateService} from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class AlertService {
  private alert = signal<Alert>(undefined);

  constructor(
    private readonly toastService: NzMessageService,
    private readonly translateService: TranslateService
    ) {}

  add(alert: Alert): void {
    alert.params = alert.params instanceof Object ? alert.params : { param: alert.params };
    alert.message = this.translateService.instant(alert.message, alert.params);
    alert.timeout = alert.timeout || 4000

    if (alert.isToast) {
      this.toastService.create(alert.type, alert.message, { nzDuration: alert.timeout });
    } else {
      this.alert.set(alert);
    }

    if (alert.timeout) {
      setTimeout(() => this.clear(), alert.timeout);
    }
  }

  success(msg: string, params?: any, isToast?: boolean): void {
    const alert: Alert = {
      type: 'success',
      message: msg,
      params,
      isToast: isToast,
    };

    this.add(alert);
  }

  info(msg: string, params?: any, isToast?: boolean): void {
    const alert: Alert = {
      type: 'info',
      message: msg,
      params,
      isToast,
    };

    this.add(alert);
  }

  warning(msg: string, params?: any, isToast?: boolean): void {
    const alert: Alert = {
      type: 'warning',
      message: msg,
      params,
      isToast,
      timeout: 4000,
    };

    this.add(alert);
  }

  error(msg: string, params?: any, isToast?: boolean, timeout?: number): void {
    const alert: Alert = {
      type: 'error',
      message: msg,
      params,
      isToast,
      timeout,
    };

    this.add(alert);
  }

  get get(): WritableSignal<Alert> {
    return this.alert;
  }

  clear(): void {
    this.alert.set(undefined);
  }
}
