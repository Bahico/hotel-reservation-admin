import {Injectable} from '@angular/core';
import {BaseClientCrudService} from '@components/services';
import { ExtraServiceModel } from '../models/extra-service.model';

@Injectable({providedIn: 'root'})
export class ExtraServiceService extends BaseClientCrudService<ExtraServiceModel> {
  listModification = 'extra-services';

  constructor() {
    super(new ExtraServiceModel(), 'api/extra-services', 'rateplanms');
  }
}
