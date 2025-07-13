import {inject} from '@angular/core';
import {HttpEvent, HttpHandlerFn, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LanguageStorage} from '../../i18n/language-storage';

/**
 *
 * @param request
 * @param next
 */
export default function (request: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const languageStorage = inject(LanguageStorage);

  const lang = languageStorage.readLanguageName();
  if (!lang) {
    return next(request);
  }

  const authRequest = request.clone({
    headers: request.headers.set('Language', lang),
  });

  return next(authRequest);
}
