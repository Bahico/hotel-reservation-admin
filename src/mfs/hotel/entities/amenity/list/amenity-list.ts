import { Component } from "@angular/core";
import {EntityListPage} from '@components/pages';
import {AmenityModel} from '../models/amenity.model';
import {AmenityService} from '../services/amenity.service';
import {ActivatedRoute} from '@angular/router';
import {MfList} from '@components/components';
import {RootSharedModule} from '@components/root-shared.module';

@Component({
  imports: [MfList, RootSharedModule],
  providers: [AmenityService],
  template: `
    <mf-list [page]="this"/>
  `
})
export default class AmenityList extends EntityListPage<AmenityModel> {
  title = 'amenities';

  constructor(
    readonly amenityService: AmenityService,
    readonly activatedRoute: ActivatedRoute
  ) {
    super(amenityService, new AmenityModel(), activatedRoute);
  }
}
