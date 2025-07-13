import {ModalOptions} from "ng-zorro-antd/modal";

export class EntityUpdateOptions<T> {
  componentInstances?: Partial<T>;
  modalOptions?: ModalOptions;
}
