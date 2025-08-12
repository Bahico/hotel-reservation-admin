import {inject, Inject} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {GetEndpoint} from '@components/config/get-endpoint';

/**
 *
 */
export abstract class BaseClientCrudService<TModel> {
  protected readonly getEndpoint = inject(GetEndpoint);

  /**
   *
   */
  readonly http = inject(HttpClient);

  /**
   *
   */
  abstract listModification: string;

  /**
   *
   */
  readonly resourceUrl: string;

  /**
   *
   * @param classType
   * @param api
   * @param microservice
   * @protected
   */
  protected constructor(
    @Inject(String) readonly classType: TModel,
    readonly api: string,
    readonly microservice?: string
  ) {
    this.resourceUrl = this.getEndpoint.getEndPoint(api, microservice);
  }

  /**
   *
   * @param query
   */
  lambda = (query: any): Observable<HttpResponse<TModel[]>> => this.getAll(query);

  /**
   *
   * @param query
   */
  getAll(query: any): Observable<HttpResponse<TModel[]>> {
    return this.http.get<TModel[]>(this.resourceUrl, { params: query, observe: 'response' });
  }

  /**
   *
   * @param id
   */
  delete(id: number | string): Observable<unknown> {
    return this.http.delete(`${this.resourceUrl}/${id}`);
  }

  /**
   *
   * @param id
   */
  getById(id: number | string): Observable<TModel> {
    return this.http.get<TModel>(`${this.resourceUrl}/${id}`);
  }

  /**
   *
   * @param entity
   */
  submit(entity: TModel): Observable<TModel> {
    return this.http.post<TModel>(this.resourceUrl, entity);
  }

  /**
   *
   */
  getEntityNextNumber(): Observable<bigint> {
    return this.http
      .get<{ 'nextNumber': bigint }>(this.getEndpoint.getEndPoint(`api/numbers/next/${this.listModification}`, this.microservice))
      .pipe(map(data => data.nextNumber));
  }
}
