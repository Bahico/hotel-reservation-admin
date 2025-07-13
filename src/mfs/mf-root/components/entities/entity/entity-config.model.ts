import {Observable} from 'rxjs';
import {HttpResponse} from '@angular/common/http';
import {Type} from '@angular/core';

export interface IEntityConfig<T> {

  openUpdate(updateComponent: Type<any>, model?: T, duplicate?: boolean): void;

  openView?(model: T): void;

  openDelete?(id: number | string): void;

  openHistory?(id: number): void;
}

export interface IEntityCrud<ENTITY> {
  create?(entity: ENTITY): Observable<HttpResponse<ENTITY>>;
  update?(entity: ENTITY): Observable<HttpResponse<ENTITY>>;
  find?(id: number): Observable<ENTITY>;
  query(req?: any): Observable<HttpResponse<ENTITY[]>>;
  delete?(id: number): Observable<HttpResponse<{}>>;
}
