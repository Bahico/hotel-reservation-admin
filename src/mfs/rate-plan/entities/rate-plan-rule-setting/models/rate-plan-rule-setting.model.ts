import {Display, Editable, EditableEnum, Identification, LengthSize, Relation, Required} from '@components/decorators';
import {SettingType} from 'rate-plan/entities/rate-plan-rule-setting/models/setting.type';
import {CurrencyService} from 'rate-plan/entities/currency/services/currency.service';
import {CurrencyModel} from 'rate-plan/entities/currency/models/currency.model';
import {RatePlanRuleModel} from 'rate-plan/entities/rate-plan-rule/models/rate-plan-rule.model';
import {RatePlanRuleService} from 'rate-plan/entities/rate-plan-rule/services/rate-plan-rule.service';

/**
 *
 */
export class RatePlanRuleSettingModel {
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
  @Required
  startTime: string;

  /**
   *
   */
  @Display
  @Editable
  @Required
  endTime: string;

  /**
   *
   */
  @Display
  @Editable
  @Required
  isActive: boolean;

  /**
   *
   */
  @Display
  @EditableEnum(SettingType)
  @Required
  settingType: SettingType;

  /**
   *
   */
  @Display
  @Editable
  rate: number;

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
    service: RatePlanRuleService,
    label: 'name'
  })
  @Display
  @Editable
  rule: RatePlanRuleModel;
}
