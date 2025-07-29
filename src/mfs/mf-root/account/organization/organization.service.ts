import {inject, Injectable} from '@angular/core';
import {GetEndpoint} from '@components/config';
import {HttpClient} from '@angular/common/http';
import { OrganizationModel } from './organization.model';
import {BehaviorSubject, concatMap, of, retry} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OrganizationService {
  private readonly getEndpoint = inject(GetEndpoint);
  private readonly http = inject(HttpClient);

  private readonly resourceUrl = this.getEndpoint.getEndPoint('api/organizations/current', 'organizationms');

  private readonly organization$$ = new BehaviorSubject<OrganizationModel>(null);

  get organization$() {
    return this.organization$$
      .asObservable()
      .pipe(
        concatMap(organization => organization ? of(organization) : this.http.get<OrganizationModel>(this.resourceUrl)),
        retry(3)
      );
  }
}
