import {DayModel} from 'rate-plan/entities/rate-plan/detail/models/day.model';

export class MonthModel {
  days: DayModel[];

  constructor(
    readonly date: Date
  ) {
    this.initDays();
  }

  initDays() {
    const daysInMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate(); // month is 1–12 here
    const days: DayModel[] = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const weekdayIndex = new Date(this.date.getFullYear(), this.date.getMonth() - 1, day).getDay();
      days.push({
        day,
        weekday: weekdayIndex
      });
    }

    this.days = days;
  }
}
