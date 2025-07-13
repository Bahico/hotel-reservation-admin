import {Component} from '@angular/core';
import {PositionService} from '../services/position.service';
import {ActivatedRoute} from '@angular/router';
import {EntityListPage} from '@components/pages';
import {PositionModel} from '../model/position.model';
import {RootSharedModule} from '@components/root-shared.module';
import {MfList} from '@components/components';

/**
 *
 */
@Component({
  imports: [RootSharedModule, MfList],
  providers: [PositionService],
  templateUrl: 'position-list.component.html'
})
export class PositionListComponent extends EntityListPage<PositionModel> {
  title = 'positions';

  /**
   *
   * @param positionService
   * @param activatedRoute
   */
  constructor(
    readonly positionService: PositionService,
    readonly activatedRoute: ActivatedRoute
  ) {
    super(positionService, new PositionModel(), activatedRoute);
  }

  click(): void {
    console.log('click');
  }
}
