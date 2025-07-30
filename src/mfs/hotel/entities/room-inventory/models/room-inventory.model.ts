import { Display, Editable, Identification, Relation, Required } from '@components/decorators';
import { RoomTypeModel } from '../../room-type/models/room-type.model';
import { RoomTypeService } from '../../room-type/services/room-type.service';

/**
 *
 */
export class RoomInventoryModel {

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
  availableRoomsCount: number;

  /**
   *
   */
  @Relation({
    service: RoomTypeService,
    label: 'name'
  })
  @Display
  @Editable
  @Required
  roomType: RoomTypeModel;
}
