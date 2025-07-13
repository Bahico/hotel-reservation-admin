import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { NzMessageService } from "ng-zorro-antd/message";

/**
 * 
 */
@Injectable({ providedIn: 'root' })
export class DataSubmitToastrService {

    /**
     *
     */
    constructor(
        private message: NzMessageService,
        private translate: TranslateService
    ) {
    }

    /**
     * 
     */
    submitSuccess() {
        let msg = this.translate.instant('dataSubmitSuccess');
        this.message.success(msg);
    }

    /**
     * 
     */
    submitError() {
        let msg = this.translate.instant('dataSubmitError');
        this.message.error(msg);
    }
}