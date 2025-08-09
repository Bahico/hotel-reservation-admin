import {Injectable} from '@angular/core';
import {BaseClientCrudService} from '@components/services';
import { CancellationPolicyModel } from '../models/cancellation-policy.model';

@Injectable({providedIn: 'root'})
export class CancellationPolicyService extends BaseClientCrudService<CancellationPolicyModel> {
  listModification = 'cancellation-policies';

  constructor() {
    super(new CancellationPolicyModel(), 'api/cancellation-policies', 'rateplanms');
  }
}
