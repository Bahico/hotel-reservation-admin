import {Component, signal, ViewEncapsulation} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  encapsulation: ViewEncapsulation.None
})
export class App {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['uz', 'en']);
    this.translate.setDefaultLang('uz');
    this.translate.use('uz');
  }
}
