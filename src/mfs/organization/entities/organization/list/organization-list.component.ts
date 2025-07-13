import {Component} from '@angular/core';
import {EntityListPage} from '@components/pages';
import {OrganizationModel} from '../models/organization.model';
import {OrganizationService} from '../services/organization.service';
import {ActivatedRoute} from '@angular/router';
import {MfList} from '@components/components';
import {RootSharedModule} from '@components/root-shared.module';

/**
 *
 */
@Component({
  providers: [OrganizationService],
  templateUrl: 'organization-list.component.html',
  imports: [MfList, RootSharedModule]
})
export default class OrganizationListComponent extends EntityListPage<OrganizationModel> {

  /**
   *
   */
  title = 'organizations';

  /**
   *
   * @param organizationService
   * @param activatedRoute
   */
  constructor(
    readonly organizationService: OrganizationService,
    readonly activatedRoute: ActivatedRoute,
  ) {
    super(organizationService, new OrganizationModel(), activatedRoute);
  }
}
