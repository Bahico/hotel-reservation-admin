import {HttpEvent, HttpHandlerFn, HttpRequest} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {inject} from '@angular/core';
import {AlertService} from '@components/components';

export default function (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  // const alertService = inject(AlertService);

  return next(req)
    .pipe(tap({
      error: err => {
        // if (err.error['error.key']) {
        //   alertService.error("error." + err.error['error.key']);
        // } else if (err.error['message']) {
        //   alertService.error(err.error['message'])
        // }
      }
    }));
}
