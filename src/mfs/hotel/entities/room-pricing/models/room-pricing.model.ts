import { Display, Editable, Identification, Relation, Required } from '@components/decorators';
import { RoomTypeService } from '../../room-type/services/room-type.service';
import { RoomTypeModel } from '../../room-type/models/room-type.model';

/**
 *
 */
export class RoomPricingModel {

  /**
   *
   */
  @Identification
  id: number;

  /**
   *
   */
  @Display()
  @Editable()
  @Required
  date: Date;

  /**
   *
   */
  @Display()
  @Editable()
  @Required
  price: number;

  /**
   *
   */
  @Relation({
    service: RoomTypeService,
    label: 'name'
  })
  @Display()
  @Editable()
  @Required
  roomType: RoomTypeModel;
}
