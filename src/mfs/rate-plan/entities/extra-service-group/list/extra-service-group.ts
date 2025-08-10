import { Component } from '@angular/core';
import { ExtraServiceGroupService } from '../services/extra-service-group.service';
import { ActivatedRoute } from '@angular/router';
import { ExtraServiceGroupModel } from '../models/extra-service-group.model';
import {MfList} from '@components/components';
import {EntityListPage} from '@components/pages';

@Component({
  selector: 'extra-service-group',
  template: `<mf-list [page]="this"/>`,
  imports: [
    MfList
  ]
})
export default class ExtraServiceGroup extends EntityListPage<ExtraServiceGroupModel> {
  title = 'extra-service-groups';

  constructor(
    readonly extraServiceGroupService: ExtraServiceGroupService,
    readonly activatedRoute: ActivatedRoute
) {
    super(extraServiceGroupService, new ExtraServiceGroupModel(), activatedRoute);
  }
}
