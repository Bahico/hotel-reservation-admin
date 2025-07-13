import {Observable} from 'rxjs';
import {HttpResponse} from '@angular/common/http';

/**
 *
 */
export abstract class EntityRelationService<ENTITY> {
    /**
     *
     * @protected
     */
    abstract readonly resourceUrl: string;

    /**
     *
     * @param query
     */
    abstract getAll(query?: any): Observable<HttpResponse<ENTITY[]>>;
}
