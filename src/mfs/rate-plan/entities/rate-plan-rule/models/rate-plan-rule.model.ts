import {Display, Editable, Identification, LengthSize, MaxLength, Required} from '@components/decorators';

/**
 *
 */
export class RatePlanRuleModel {
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
  @MaxLength(4000)
  description: string;
}
