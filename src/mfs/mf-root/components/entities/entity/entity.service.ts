import { inject, Injectable } from '@angular/core';
import { EntityDeleteOptions } from './entity-delete/entity-delete-options.model';
import { EntityUpdateOptions } from '@components/components';
import { ModalOptions, NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { EntityDeleteModalComponent } from './entity-delete/entity-delete-modal.component';
import {EntityViewOptions} from './entity-view/entity-view-options.model';
import {EntityViewModalComponent} from './entity-view/entity-view-modal.component';

@Injectable({ providedIn: 'root'})
export class EntityService {
  private readonly modalService = inject(NzModalService);

  /**
   * For entity update modal create with outside component
   * @param options
   */
  update<T>(options: EntityUpdateOptions<T>): NzModalRef {
    const modalRef = this.modalService.create({
        ...options.modalOptions,
        nzFooter: null,
        nzTitle: '',
        nzClosable: false,
        nzWidth: "800px"
      });

      if (options.componentInstances) {
        options.componentInstances['modalRef'] = modalRef;
        Object.keys(options.componentInstances).forEach(key => (modalRef.componentInstance[key] = options.componentInstances[key]));
      }

      return modalRef;
  }

  /**
   *
   * @param options
   * @param id
   */
  view(options: EntityViewOptions[], id: number | string): NzModalRef | null {
      const modalRef = this.modalService.create(this.getModalOption(EntityViewModalComponent));

      modalRef.componentInstance.modalRef = modalRef;
      modalRef.componentInstance.id = id;
      modalRef.componentInstance.data = options;

      return modalRef;

  }

  /**
   * for entity delete create modal
   * @param options
   */
  delete(options: EntityDeleteOptions): NzModalRef {
      const modalRef = this.modalService.create(this.getModalOption(EntityDeleteModalComponent));

      modalRef.componentInstance.modalRef = modalRef;
      modalRef.componentInstance.useFunction = options.useFunction;
      modalRef.componentInstance.event = options.event;
      modalRef.componentInstance.translateKey = options.alertTranslation;
      modalRef.componentInstance.translateValues = options.alertTranslationValue;

      return modalRef;
  }

  // history(options: EntityHistoryOptions): NzModalRef {
  //     const modalRef = this.modalService.create(this.getModalOption(EntityAuditHistoryModalComponent));
  //
  //     modalRef.componentInstance.modalRef = modalRef;
  //     modalRef.componentInstance.qualifiedName = options.qualifiedName;
  //     modalRef.componentInstance.entityId = '' + options.entityId;
  //     modalRef.componentInstance.i18nPrefix = options.i18nPrefix;
  //     modalRef.componentInstance.isAdapter = options.isAdapter;
  //
  //     return modalRef;
  // }

  /**
   * For all modal options
   * @param content
   */
  getModalOption(content: any): ModalOptions {
    return {
      nzFooter: null,
      nzTitle: '',
      nzContent: content,
      nzClosable: false
    };
  }
}
