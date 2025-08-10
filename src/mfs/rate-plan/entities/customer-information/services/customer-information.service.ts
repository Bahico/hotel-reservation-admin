import {Injectable} from '@angular/core';
import {BaseClientCrudService} from '@components/services';
import { CustomerInformationModel } from '../models/customer-information.model';

@Injectable({providedIn: 'root'})
export class CustomerInformationService extends BaseClientCrudService<CustomerInformationModel> {
  listModification = 'customer-informations';

  constructor() {
    super(new CustomerInformationModel(), 'api/customer-informations', 'rateplanms');
  }
}
