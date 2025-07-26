import {Component, forwardRef, input, OnInit, signal} from '@angular/core';
import {FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Observable} from 'rxjs';
import {BaseModelComponent} from '@components/components';
import {NzSelectModule} from 'ng-zorro-antd/select';

@Component({
  selector: 'select-entity',
  templateUrl: 'select-input.component.html',
  imports: [
    FormsModule,
    NzSelectModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SelectEntityComponent)
    }
  ]
})
export class SelectEntityComponent extends BaseModelComponent implements OnInit {
  label = input.required<string>();
  value = input<string>();
  requestFunc = input.required<(query: any) => Observable<any>>();

  data = signal<any[]>([]);

  ngOnInit() {
    this.search();
  }

  change() {
    this.onChange(this.itemValue());
  }

  search(searchLabel?: string) {
    if (!this.requestFunc()) {
      throw new Error('Not implemented');
    }

    const query = {}

    if (searchLabel) {
      query[this.label() + '.contains'] = searchLabel;
    }

    this.requestFunc()(query)
      .subscribe(data => {
        this.data.set(data.body)
      })
  }
}
