import {Component, Input, OnInit} from '@angular/core';
import {EntityViewOptions} from './entity-view-options.model';
import {Router} from '@angular/router';
import {NzModalRef} from 'ng-zorro-antd/modal';
import {NzListComponent, NzListItemComponent} from 'ng-zorro-antd/list';
import {TranslateModule} from '@ngx-translate/core';
import {DatePipe} from '@angular/common';
import {NgxMaskPipe} from 'ngx-mask';
import {ElementResolverDirective, BooleanBadgeDirective} from '@components/directive';
import {NzImageDirective} from 'ng-zorro-antd/image';
import {NzButtonComponent} from 'ng-zorro-antd/button';

export interface DataWithType {
    json?: EntityViewOptions[];
    images?: EntityViewOptions[];
    array?: EntityViewOptions[];
}

@Component({
    templateUrl: 'entity-view-modal.component.html',
    styleUrl: 'entity-view-modal.component.scss',
    imports: [
        NzListComponent,
        TranslateModule,
        NzListItemComponent,
        DatePipe,
        NgxMaskPipe,
        BooleanBadgeDirective,
        NzImageDirective,
        NzButtonComponent,
        ElementResolverDirective
    ]
})
export class EntityViewModalComponent implements OnInit {
    @Input() id: number;
    @Input() titleTranslation: string;
    @Input() data: EntityViewOptions[] = [];
    modalRef: NzModalRef;

    dataWithType: DataWithType = {
        json: [],
        images: [],
        array: []
    };

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        this.data.filter(item => item.type === 'link' && !Array.isArray(item.value)).forEach(filtered => (filtered.value = [filtered.value]));
        this.changeData();
    }

    changeData() {
        const removeItems: number[] = [];
        for (let i = 0; i < this.data.length; i++) {
            switch (this.data[i].type) {
                case 'array': {
                    this.dataWithType.array.push(this.data[i]);
                    removeItems.push(i);
                    break;
                }
                case 'images-url':
                    this.dataWithType.images.push(this.data[i]);
                    removeItems.push(i);
                    break;
                case 'json':
                    this.dataWithType.images.push(this.data[i]);
                    removeItems.push(i);
                    break
            }
        }
        this.removeItem(removeItems);
    }

    removeItem(removeItems: number[]) {
        removeItems.forEach((item, index) => this.data.splice(item - index, 1))
    }

    instanceOfHTMLElement(value: any): boolean {
        return value instanceof HTMLElement;
    }

    executeLink(item: EntityViewOptions, value: any): void {
        if (item.link) {
            item.link(value);
        }
    }

    close(): void {
        this.modalRef.close();
    }

    log(item: EntityViewOptions): void {
        this.router.navigate([item.options.routerLink], {queryParams: item.options.queryParams});
        this.close();
    }
}
