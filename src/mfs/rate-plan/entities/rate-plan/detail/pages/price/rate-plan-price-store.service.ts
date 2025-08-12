import {inject, Injectable, signal} from "@angular/core";
import {MonthModel} from "../../models/month.model";
import {RoomTypeModel} from "hotel/entities/room-type/models/room-type.model";
import {RoomTypeService} from "hotel/entities/room-type/services/room-type.service";
import {RatePlanPricesService} from "rate-plan/entities/rate-plan-prices/services/rate-plan-prices.service";
import {RatePlanPricesModel} from 'rate-plan/entities/rate-plan-prices/models/rate-plan-prices.model';
import {RatePlanModel} from 'rate-plan/entities/rate-plan/models/rate-plan.model';

@Injectable({providedIn: 'root'})
export class RatePlanPriceStoreService {
    private readonly roomTypeService = inject(RoomTypeService);
    private readonly ratePlanPricesService = inject(RatePlanPricesService);

    private readonly months = signal<MonthModel[]>([]);
    private readonly currentMonth = signal<MonthModel | null>(null);
    private readonly roomTypes = signal<RoomTypeModel[]>([]);
    private readonly ratePlanPrices = signal<RatePlanPricesModel[]>([]);
    private readonly ratePlan = signal<RatePlanModel>(null);

    constructor() {
        this.currentMonth.set(new MonthModel(new Date()));
        this.months.set([this.currentMonth()]);
    }

    setRatePlan(ratePlan: RatePlanModel) {
      this.ratePlan.set(ratePlan);
    }

    get getMonths() {
        return this.months.asReadonly();
    }

    setMonths(months: MonthModel[]) {
        this.months.set(months);
    }

    get getCurrentMonth() {
        return this.currentMonth.asReadonly();
    }

    setCurrentMonth(month: MonthModel) {
        this.currentMonth.set(month);
    }

    get getRoomTypes() {
        return this.roomTypes.asReadonly();
    }

    loadRoomTypes() {
        this.roomTypeService
        .getAll({})
        .subscribe(data => this.roomTypes.set(data.body));
    }

    get getRatePlanPrices() {
      return this.ratePlanPrices.asReadonly()
    }

    loadRatePlanPrices() {
      this.ratePlanPricesService
        .getAll({
          "ratePlanId.equals": this.ratePlan().id,
        })
        .subscribe(data => this.ratePlanPrices.set(data.body));
    }
}
