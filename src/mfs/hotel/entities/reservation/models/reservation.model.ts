import { Display, Editable, EditableEnum, Identification, Relation, Required } from '@components/decorators';
import { ReservationStatus } from './reservation.status';
import { RoomService } from '../../room/services/room.service';
import { RoomModel } from '../../room/models/room.model';

/**
 *
 */
export class ReservationModel {

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
  checkInDate: Date;

  /**
   *
   */
  @Display()
  @Editable()
  @Required
  checkOutDate: Date;

  /**
   *
   */
  @Display()
  @Editable()
  @Required
  totalPrice: number;

  /**
   *
   */
  @EditableEnum(ReservationStatus)
  @Display()
  @Required
  status: ReservationStatus;

  /**
   *
   */
  @Relation({
    service: RoomService,
    label: 'number'
  })
  @Display()
  @Editable()
  @Required
  room: RoomModel;
}
