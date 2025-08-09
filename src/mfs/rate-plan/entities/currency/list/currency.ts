import { Component } from '@angular/core';
import { CurrencyService } from '../services/currency.service';
import { ActivatedRoute } from '@angular/router';
import { CurrencyModel } from '../models/currency.model';
import {MfList} from '@components/components';
import {EntityListPage} from '@components/pages';

@Component({
  selector: 'currency',
  template: `<mf-list [page]="this"/>`,
  imports: [
    MfList
  ]
})
export default class Currency extends EntityListPage<CurrencyModel> {
  title = 'currencies';

  constructor(
    readonly currencyService: CurrencyService,
    readonly activatedRoute: ActivatedRoute
) {
    super(currencyService, new CurrencyModel(), activatedRoute);
  }
}
