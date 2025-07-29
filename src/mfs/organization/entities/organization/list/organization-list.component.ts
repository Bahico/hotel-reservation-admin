import {AfterViewInit, Component} from '@angular/core';
import {EntityListPage} from '@components/pages';
import {OrganizationModel} from '../models/organization.model';
import {OrganizationService} from '../services/organization.service';
import {ActivatedRoute} from '@angular/router';
import {MfList} from '@components/components';
import {RootSharedModule} from '@components/root-shared.module';
import {TranslateRegisterr} from '@components/i18n';
import {OrganizationTranslate} from 'organization/translates';

/**
 *
 */
@Component({
  providers: [OrganizationService],
  templateUrl: 'organization-list.component.html',
  imports: [MfList, RootSharedModule]
})
export default class OrganizationListComponent extends EntityListPage<OrganizationModel> implements AfterViewInit {

  /**
   *
   */
  title = 'organizations';

  /**
   *
   * @param organizationService
   * @param activatedRoute
   * @param translateRegister
   */
  constructor(
    readonly organizationService: OrganizationService,
    readonly activatedRoute: ActivatedRoute,
    private readonly translateRegister: TranslateRegisterr
  ) {
    super(organizationService, new OrganizationModel(), activatedRoute);
  }

  ngAfterViewInit() {
    this.translateRegister.register(OrganizationTranslate);
  }
}
