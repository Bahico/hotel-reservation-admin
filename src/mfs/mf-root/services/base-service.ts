import {Observable} from 'rxjs';
import {HttpResponse} from '@angular/common/http';

export abstract class BaseService<TModel> {
    /**
     *
     */
    abstract getAll(query?: any): Observable<HttpResponse<TModel[]>>;

    /**
     *
     * @param id
     */
    abstract getById(id: number | string): Observable<TModel>;

    /**
     *
     * @param id
     */
    abstract delete(id: number | string): Observable<unknown>;

    /**
     *
     * @param entity
     */
    abstract submit(entity: TModel): Observable<TModel>;

    /**
     *
     */
    abstract getEntityNextNumber(): Observable<bigint>;
}
