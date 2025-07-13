import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
    selector: '[element-resolver]',
    standalone: true
})
export class ElementResolverDirective {
    constructor(private elementRef: ElementRef<HTMLElement>) {
    }

    @Input('element-resolver')
    set updateValue(value: HTMLElement) {
        if (value) {
            this.elementRef.nativeElement.append(value);
        }
    }
}
