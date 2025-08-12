import {Component, OnInit, signal} from '@angular/core';
import {ActivatedRoute, RouterOutlet} from '@angular/router';
import {RatePlanModel} from 'rate-plan/entities/rate-plan/models/rate-plan.model';
import {NzSwitchComponent} from 'ng-zorro-antd/switch';
import {FormsModule} from '@angular/forms';
import {RatePlanStatus} from 'rate-plan/entities/rate-plan/models/rate-plan.status';
import {RatePlanService} from 'rate-plan/entities/rate-plan/services/rate-plan.service';
import {RatePlanPriceStoreService} from 'rate-plan/entities/rate-plan/detail/pages/price/rate-plan-price-store.service';

@Component({
  selector: 'rate-plan-detail',
  imports: [
    NzSwitchComponent,
    FormsModule,
    RouterOutlet
  ],
  templateUrl: 'rate-plan-detail.html'
})
export default class RatePlanDetail implements OnInit {
  ratePlan = signal<RatePlanModel>(null);

  ratePlanStatus = RatePlanStatus;

  constructor(
    private readonly ratePlanService: RatePlanService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly ratePlanPriceStoreService: RatePlanPriceStoreService
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.ratePlan.set(data['ratePlan']);
      this.ratePlanPriceStoreService.setRatePlan(data['ratePlan']);
    })
  }

  changeRatePlanStatus() {
    this.ratePlan.update(item => ({...item, status: item.status === RatePlanStatus.ACTIVE ? RatePlanStatus.INACTIVE : RatePlanStatus.ACTIVE}));
    this.ratePlanService.submit(this.ratePlan()).subscribe();
  }
}
