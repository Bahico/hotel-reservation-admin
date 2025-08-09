import {Display, Editable, EditableEnum, Identification, LengthSize, Relation, Required} from '@components/decorators';
import {RatePlanStatus} from './rate-plan.status';
import {RatePlanType} from './rate-plan.type';
import {CurrencyService} from 'rate-plan/entities/currency/services/currency.service';
import {CurrencyModel} from 'rate-plan/entities/currency/models/currency.model';
import {CancellationPolicyModel} from 'rate-plan/entities/cancellation-policy/models/cancellation-policy.model';
import {CancellationPolicyService} from 'rate-plan/entities/cancellation-policy/services/cancellation-policy.service';

/**
 *
 */
export class RatePlanModel {
  /**
   *
   */
  @Identification
  id: number;

  /**
   *
   */
  @Display
  @Editable
  @LengthSize(3, 250)
  @Required
  name: string;

  /**
   *
   */
  @Display
  @Editable
  @LengthSize(3, 250)
  @Required
  shortName: string;

  /**
   *
   */
  @Display
  @EditableEnum(RatePlanStatus)
  @Required
  status: RatePlanStatus;

  /**
   *
   */
  @Display
  @EditableEnum(RatePlanType)
  @Required
  type: RatePlanType

  /**
   *
   */
  @Display
  @Editable
  @Required
  startDate: Date;

  /**
   *
   */
  @Display
  @Editable
  endDate: Date;

  /**
   *
   */
  @Relation({
    service: CurrencyService,
    label: 'name'
  })
  @Display
  @Editable
  currency: CurrencyModel;

  /**
   *
   */
  @Relation({
    service: CancellationPolicyService,
    label: 'name'
  })
  @Display
  @Editable
  cancellationPolicy: CancellationPolicyModel;
}
