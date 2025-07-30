import {Injectable} from '@angular/core';
import {BaseClientCrudService} from '@components/services/base-client-crud.service';
import {OrganizationModel} from '../models/organization.model';

/**
 *
 */
@Injectable({providedIn: 'root'})
export class OrganizationService extends BaseClientCrudService<OrganizationModel> {

  /**
   *
   */
  listModification = 'organization';

  /**
   *
   */
  constructor() {
    super(new OrganizationModel(), 'api/organizations', 'organizationms');
  }

}
