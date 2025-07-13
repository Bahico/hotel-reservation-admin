import { Injector, NgModule } from '@angular/core';
import { TranslateRegisterr } from '@components/i18n';
import { RootTranslate } from './root-translate';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { TranslateModule } from '@ngx-translate/core';
import { EntityService } from '@components/components';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FormsModule } from '@angular/forms';
import { en_US, NzI18nService, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);

export let InjectorInstance: Injector;

@NgModule({
  providers: [
    EntityService,
    NzModalService,
    provideNzI18n(en_US),
  ],
  imports: [TranslateModule, FormsModule],
  exports: [TranslateModule, FormsModule],
})
export class RootSharedModule {
  constructor(
    translate: TranslateRegisterr,
    injector: Injector,
    i18n: NzI18nService
  ) {
    translate.register(RootTranslate);
    InjectorInstance = injector;
    i18n.setLocale(en_US);
  }
}
