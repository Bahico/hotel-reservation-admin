import { Component } from '@angular/core';
import { PenaltyService } from '../services/penalty.service';
import { ActivatedRoute } from '@angular/router';
import { PenaltyModel } from '../models/penalty.model';
import {MfList} from '@components/components';
import {EntityListPage} from '@components/pages';

@Component({
  selector: 'penalty',
  template: `<mf-list [page]="this"/>`,
  imports: [
    MfList
  ]
})
export default class Penalty extends EntityListPage<PenaltyModel> {
  title = 'penalties';

  constructor(
    readonly penaltyService: PenaltyService,
    readonly activatedRoute: ActivatedRoute
) {
    super(penaltyService, new PenaltyModel(), activatedRoute);
  }
}
