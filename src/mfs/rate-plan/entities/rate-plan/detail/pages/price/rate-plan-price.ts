import {Component, inject, OnInit, signal, ViewChildren, QueryList} from '@angular/core';
import {months} from 'hotel/core/month';
import {weekDaysSmall} from 'hotel/core/week';
import {DayDetail} from 'rate-plan/entities/rate-plan/detail/pages/price/date-detail';
import { RatePlanPriceStoreService } from './rate-plan-price-store.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: "rate-plan-price",
  imports: [
    DayDetail
  ],
  templateUrl: 'rate-plan-price.html',
  styleUrl: 'rate-plan-price.css'
})
export default class RatePlanPrice implements OnInit {
  private readonly ratePlanPriceStoreService = inject(RatePlanPriceStoreService);

  @ViewChildren('dateRef') dateRefs!: QueryList<DayDetail>;

  currentMonth = this.ratePlanPriceStoreService.getCurrentMonth;
  roomTypes = this.ratePlanPriceStoreService.getRoomTypes;
  months = signal(months);
  weekDaysSmall = signal(weekDaysSmall);
  viewMode = signal<'roomTypes' | 'months'>('roomTypes');

  select: boolean;
  selecting = signal(false)

  ngOnInit() {
    this.ratePlanPriceStoreService.loadRoomTypes();
    this.ratePlanPriceStoreService.loadRatePlanPrices();
  }

  onMouseDown(dateRef: DayDetail) {
    this.select = !dateRef.isSelected();
    dateRef.isSelected.set(this.select);
    this.selecting.set(true);
  }

  onMouseEnter(dateRef: DayDetail) {
    if (typeof this.select === 'boolean') {
      dateRef.isSelected.set(this.select);
    }
  }

  onMouseUp() {
    this.select = null;
  }

  cancel() {
    this.selecting.set(false);
  }

  setViewMode(mode: 'roomTypes' | 'months') {
    this.viewMode.set(mode);
  }
}
