import {Directive, ElementRef, Input} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

export type BooleanBadgeType = 'boolean' | 'success' | 'active' | string;

@Directive({
    selector: '[boolean-badge]',
    standalone: true
})
export class BooleanBadgeDirective {
    @Input() type: BooleanBadgeType;
    @Input() reverse?: boolean;

    badgeMap = new Map<boolean, string>([
        [true, 'ant-tag-success'],
        [false, 'ant-tag-error'],
        [null, 'ant-tag-error'],
        [undefined, 'ant-tag-error'],
    ]);

    private readonly directiveDestroyed = new Subject<never>();

    constructor(
      private elRef: ElementRef<HTMLElement>,
      private translateService: TranslateService
    ) {}

    @Input('boolean-badge')
    set updateValue(value: boolean) {
        if (this.type) {
            this.translateService.onLangChange
                .pipe(takeUntil(this.directiveDestroyed))
                .subscribe(() => (this.elRef.nativeElement.innerText = this.translateService.instant(`global.${this.type}.${value}`)));
            this.elRef.nativeElement.innerText = this.translateService.instant(`global.${this.type}.${!!value}`);
        }
        this.elRef.nativeElement.className = `ant-tag ${this.badgeMap.get(this.getValue(value))}`;
    }

    getValue(value: boolean): boolean {
        return this.reverse ? !value : value;
    }
}
