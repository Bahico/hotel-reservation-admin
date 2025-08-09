import { Component } from '@angular/core';
import { CustomerInformationService } from '../services/customer-information.service';
import { ActivatedRoute } from '@angular/router';
import { CustomerInformationModel } from '../models/customer-information.model';
import {MfList} from '@components/components';
import {EntityListPage} from '@components/pages';

@Component({
  selector: 'customer-information',
  template: `<mf-list [page]="this"/>`,
  imports: [
    MfList
  ]
})
export default class CustomerInformation extends EntityListPage<CustomerInformationModel> {
  title = 'customer-informations';

  constructor(
    readonly customerInformationService: CustomerInformationService,
    readonly activatedRoute: ActivatedRoute
) {
    super(customerInformationService, new CustomerInformationModel(), activatedRoute);
  }
}
