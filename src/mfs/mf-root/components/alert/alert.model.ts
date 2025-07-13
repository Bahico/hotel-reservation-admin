export type AlertType = 'success' | 'info' | 'warning' | 'error';

export class Alert {
  constructor(public type?: AlertType, public message?: string, public params?: any, public timeout?: number, public isToast?: boolean) {}
}
