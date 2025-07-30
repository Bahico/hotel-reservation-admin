import {inject, Injectable} from '@angular/core';
import {GetEndpoint} from '@components/config';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {OrganizationModel} from './organization.model';
import {BehaviorSubject, catchError, retry, tap} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OrganizationService {
  private readonly getEndpoint = inject(GetEndpoint);
  private readonly http = inject(HttpClient);

  private readonly resourceUrl = this.getEndpoint.getEndPoint('api/organizations/current', 'organizationms');

  private readonly organization$$ = new BehaviorSubject<Partial<OrganizationModel>>(null);

  get organization$() {
    if (this.organization$$.value)
      return this.organization$$.asObservable();

    return this.http.get<OrganizationModel>(this.resourceUrl)
      .pipe(
        tap((res: OrganizationModel) => this.organization$$.next(res)),
        catchError((err: HttpErrorResponse) => {
          this.organization$$.next({});
          return this.organization$$.asObservable();
        })
      );
  }
}
