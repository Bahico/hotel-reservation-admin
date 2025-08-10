import {Injectable} from '@angular/core';
import {BaseClientCrudService} from '@components/services';
import { ExtraServiceGroupModel } from '../models/extra-service-group.model';

@Injectable({providedIn: 'root'})
export class ExtraServiceGroupService extends BaseClientCrudService<ExtraServiceGroupModel> {
  listModification = 'extra-service-groups';

  constructor() {
    super(new ExtraServiceGroupModel(), 'api/extra-service-groups', 'rateplanms');
  }
}
