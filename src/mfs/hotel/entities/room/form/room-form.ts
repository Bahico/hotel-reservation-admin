import {Component, computed, inject} from '@angular/core';
import {EntityFormPage} from '@components/pages';
import {RootSharedModule} from '@components/root-shared.module';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {InputManager} from '@components/logics';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {RoomModel} from 'hotel/entities/room/models/room.model';
import {RoomService} from 'hotel/entities/room/services/room.service';
import {NgComponentOutlet} from '@angular/common';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {NzUploadChangeParam, NzUploadComponent, NzUploadXHRArgs} from 'ng-zorro-antd/upload';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {Subscription} from 'rxjs';

@Component({
  templateUrl: 'room-form.html',
  imports: [NzDatePickerModule, RootSharedModule, ReactiveFormsModule, NgComponentOutlet, NzButtonComponent, NzUploadComponent, NzIconDirective]
})
export class RoomForm extends EntityFormPage<RoomModel> {
  override title = 'reservations';

  /**
   *
   */
  fileType: any

  constructor(
    readonly roomService: RoomService,
  ) {
    super(roomService, new RoomModel());
  }




  /**
   *
   */
  protected readonly inputManager = inject(InputManager);

  /**
   *
   */
  fields = computed(() => this.getFields());

  /**
   *
   */
  isEdit = computed(() => !!this.formGroup?.get('id')?.value)

  override ngOnInit() {
    super.ngOnInit();
  }

  /**
   *
   */
  closeModal() {
    this.modalRef.close();
  }
  customUpload = (item: NzUploadXHRArgs): Subscription => {
    const {file, onSuccess, onError} = item;
    const itemId: number = this.formGroup.get('id').value
    return this.roomService.uploadImage(itemId, file.name).subscribe({next:()=>{
          this.alertService.success('success');
          alert('message')
      }, error:()=>{
      this.alertService.error('error');
        alert('message')
      }})

  };
  /**
   *
   */
  getControl(name: string) {
    return <FormControl>this.formGroup.get(name);
  }
  handleChange({file}: NzUploadChangeParam): void {
    const status = file.status;
    this.fileType = file
    if (status === 'done') {
      this.alertService.success(this.translateService.instant('data-successfully-uploaded'));
    } else if (status === 'error') {
      this.alertService.error(this.translateService.instant('upload-file-failed'));
    }
  }
  override submit() {
    super.submit();
  }
}
