import {Display, Editable, EditableEnum, Identification, LengthSize, Required} from '@components/decorators';
import {CancellationPolicyType} from './cancellation-policy.type';
import {CancellationPolicyChargeType} from './cancellation-policy-charge.type';

/**
 *
 */
export class CancellationPolicyModel {
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
  @EditableEnum(CancellationPolicyType)
  @Required
  type: CancellationPolicyType;

  /**
   *
   */
  @Display
  @EditableEnum(CancellationPolicyChargeType)
  @Required
  chargeType: CancellationPolicyChargeType;

  /**
   *
   */
  @Display
  @Editable
  @Required
  rate: number;
}
