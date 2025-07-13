import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class NglAmountService {
  toModel(amount: number, ratio: number): number {
    return amount / ratio;
  }

  fromModel(amount: number, ratio: number): number {
    return amount * ratio;
  }

  // noinspection JSMethodCanBeStatic
  private canFormat(amount: number): boolean {
    return amount > 100;
  }
}
