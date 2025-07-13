import {Component, inject, input, OnInit, signal} from "@angular/core";
import {ICON_LIST} from "./icon-list";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  standalone: true,
  template: `
    <span style="display: flex; align-items: center; width: 100%" [innerHTML]="iconHtml()"></span>
  `,
  selector: 'icon-list'
})
export class IconComponent implements OnInit {
  private readonly sanitizer = inject(DomSanitizer);

  icon = input.required<string>();
  iconHtml = signal<SafeHtml>(undefined);

  ngOnInit() {
    this.setIconHtml();
  }

  setIconHtml(iconName: string = this.icon()) {
    this.iconHtml.set(this.sanitizeHtml(this.iconElement(iconName)));
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  iconElement(iconName: string) {
    return ICON_LIST.find(item => item.name === iconName)?.icon;
  }
}
