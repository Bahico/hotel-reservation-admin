import {Component, computed, effect, inject, input, signal} from '@angular/core';
import {RoomTypeModel} from 'hotel/entities/room-type/models/room-type.model';
import {DayModel} from 'rate-plan/entities/rate-plan/detail/models/day.model';
import {RatePlanPriceStoreService} from 'rate-plan/entities/rate-plan/detail/pages/price/rate-plan-price-store.service';
import {MonthModel} from 'rate-plan/entities/rate-plan/detail/models/month.model';
import {RatePlanPricesModel} from 'rate-plan/entities/rate-plan-prices/models/rate-plan-prices.model';

@Component({
  selector: 'date-detail',
  templateUrl: 'date-detail.html'
})
export class DayDetail {
  private readonly ratePlanPriceStoreService = inject(RatePlanPriceStoreService);

  roomType = input.required<RoomTypeModel>();
  day = input.required<DayModel>();
  month = input.required<MonthModel>();

  today = computed(() => new Date(this.month().date.getFullYear(), this.month().date.getMonth(), this.day().day));

  oneGuestPrice = signal<RatePlanPricesModel>(null);
  twoGuestPrice = signal<RatePlanPricesModel>(null);
  extraGuestPrice = signal<RatePlanPricesModel>(null);

  isSelected = signal(false);

  constructor() {
    effect(() => {
      for (const item of this.ratePlanPriceStoreService.getRatePlanPrices()) {
        console.log(item)
        if (item.startDate < this.today() && this.today() < item.endDate && item.roomType.roomTypeId === this.roomType().id) {
          switch (item.guestCount) {
            case 1:
              this.oneGuestPrice.set(item);
              break;
            case 2:
              this.twoGuestPrice.set(item);
              break;
            default:
              this.extraGuestPrice.set(item);
              break;
          }
        }
      }
    });
  }
}
