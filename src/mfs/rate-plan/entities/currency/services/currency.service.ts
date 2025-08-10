import {Injectable} from '@angular/core';
import {BaseClientCrudService} from '@components/services';
import { CurrencyModel } from '../models/currency.model';

@Injectable({providedIn: 'root'})
export class CurrencyService extends BaseClientCrudService<CurrencyModel> {
  listModification = 'currencies';

  constructor() {
    super(new CurrencyModel(), 'api/currencies', 'rateplanms');
  }
}
