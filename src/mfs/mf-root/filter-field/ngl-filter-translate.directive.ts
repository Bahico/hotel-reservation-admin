import {Directive, ElementRef, inject, input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';

@Directive({
    selector: '[ngl-filter-translate]'
})
export class NglFilterTranslateDirective implements OnInit, OnChanges, OnDestroy {
    translate = input('', {alias: 'ngl-filter-translate'});
    nextTranslate = input<string>();

    private readonly destroy$ = new Subject<void>();
    private readonly translateService = inject(TranslateService);

    constructor(private readonly el: ElementRef) {}

    ngOnInit(): void {
        this.handleLangChange();
    }

    ngOnChanges(): void {
        this.change();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    handleLangChange(): void {
        this.translateService.onLangChange.pipe(takeUntil(this.destroy$)).subscribe(() => this.change());
    }

    private change(): void {
        if (this.nextTranslate()) {
            this.translateService
                .get(this.nextTranslate(), {text: this.translateService.instant(this.translate())})
                .pipe(takeUntil(this.destroy$))
                .subscribe((translatedText: string) => (this.el.nativeElement.innerHTML = translatedText));
        } else {
            this.translateService
                .get(this.translate())
                .pipe(takeUntil(this.destroy$))
                .subscribe((translatedText: string) => (this.el.nativeElement.innerHTML = translatedText));
        }

    }
}
