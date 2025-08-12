import {Injectable} from '@angular/core';
import {BaseClientCrudService} from '@components/services';
import {RatePlanPricesModel} from '../models/rate-plan-prices.model';
import {Observable} from 'rxjs';
import {HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class RatePlanPricesService extends BaseClientCrudService<RatePlanPricesModel> {
  listModification = 'rate-plan-prices';

  constructor() {
    super(new RatePlanPricesModel(), 'api/rate-plan-prices', 'rateplanms');
  }

  override getAll(query: any): Observable<HttpResponse<RatePlanPricesModel[]>> {
    return super.getAll(query)
      .pipe(map(response => {
        return new HttpResponse<RatePlanPricesModel[]>({
          ...response,
          body: response.body.map(item => {
            item.startDate = new Date(item.startDate);
            item.endDate = new Date(item.endDate);
            return item
          })
        });
      }));
  }
}
