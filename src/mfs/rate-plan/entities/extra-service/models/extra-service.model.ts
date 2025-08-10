import {
  Display,
  Editable,
  EditableEnum,
  Identification,
  LengthSize,
  MaxLength,
  Relation,
  Required
} from '@components/decorators';
import {ExtraServiceChargeType} from './extra-service-charge.type';
import {ExtraServiceType} from 'rate-plan/entities/extra-service/models/extra-service.type';
import {CurrencyService} from 'rate-plan/entities/currency/services/currency.service';
import {CurrencyModel} from 'rate-plan/entities/currency/models/currency.model';
import {ExtraServiceGroupModel} from 'rate-plan/entities/extra-service-group/models/extra-service-group.model';
import {ExtraServiceGroupService} from 'rate-plan/entities/extra-service-group/services/extra-service-group.service';

/**
 *
 */
export class ExtraServiceModel {
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

  /**
   *
   */
  @Display
  @EditableEnum(ExtraServiceChargeType)
  @Required
  chargeType: ExtraServiceChargeType;

  /**
   *
   */
  @Display
  @EditableEnum(ExtraServiceType)
  @Required
  type: ExtraServiceType;

  /**
   *
   */
  @Display
  @Editable
  @Required
  price: number;

  /**
   *
   */
  @Display
  @Editable
  useCount: number;

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
    service: ExtraServiceGroupService,
    label: 'name'
  })
  @Display
  @Editable
  group: ExtraServiceGroupModel;
}
