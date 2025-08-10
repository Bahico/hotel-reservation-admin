import {Injectable} from '@angular/core';
import {BaseClientCrudService} from '@components/services';
import { PenaltyModel } from '../models/penalty.model';

@Injectable({providedIn: 'root'})
export class PenaltyService extends BaseClientCrudService<PenaltyModel> {
  listModification = 'penalties';

  constructor() {
    super(new PenaltyModel(), 'api/penalties', 'rateplanms');
  }
}
