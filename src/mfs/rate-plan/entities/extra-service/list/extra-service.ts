import { Component } from '@angular/core';
import { ExtraServiceService } from '../services/extra-service.service';
import { ActivatedRoute } from '@angular/router';
import { ExtraServiceModel } from '../models/extra-service.model';
import {MfList} from '@components/components';
import {EntityListPage} from '@components/pages';

@Component({
  selector: 'extra-service',
  template: `<mf-list [page]="this"/>`,
  imports: [
    MfList
  ]
})
export default class ExtraService extends EntityListPage<ExtraServiceModel> {
  title = 'extra-services';

  constructor(
    readonly extraServiceService: ExtraServiceService,
    readonly activatedRoute: ActivatedRoute
) {
    super(extraServiceService, new ExtraServiceModel(), activatedRoute);
  }
}
