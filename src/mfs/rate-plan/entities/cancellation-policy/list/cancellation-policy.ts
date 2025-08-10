import { Component } from '@angular/core';
import { CancellationPolicyService } from '../services/cancellation-policy.service';
import { ActivatedRoute } from '@angular/router';
import { CancellationPolicyModel } from '../models/cancellation-policy.model';
import {MfList} from '@components/components';
import {EntityListPage} from '@components/pages';

@Component({
  selector: 'cancellation-policy',
  template: `<mf-list [page]="this"/>`,
  imports: [
    MfList
  ]
})
export default class CancellationPolicy extends EntityListPage<CancellationPolicyModel> {
  title = 'cancellation-policies';

  constructor(
    readonly cancellationPolicyService: CancellationPolicyService,
    readonly activatedRoute: ActivatedRoute
) {
    super(cancellationPolicyService, new CancellationPolicyModel(), activatedRoute);
  }
}
