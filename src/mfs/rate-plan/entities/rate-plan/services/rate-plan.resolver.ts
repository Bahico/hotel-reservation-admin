import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {RatePlanModel} from 'rate-plan/entities/rate-plan/models/rate-plan.model';
import {inject} from '@angular/core';
import {RatePlanService} from 'rate-plan/entities/rate-plan/services/rate-plan.service';

export const ratePlanResolver: ResolveFn<RatePlanModel> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const userStore = inject(RatePlanService);
  const ratePlanId = route.paramMap.get('id')!;
  return userStore.getById(ratePlanId);
};
