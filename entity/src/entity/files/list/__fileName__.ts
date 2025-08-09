import { Component } from '@angular/core';
import { <%= classify(name) %>Service } from '../services/<%= name %>.service';
import { ActivatedRoute } from '@angular/router';
import { <%= classify(name) %>Model } from '../models/<%= name %>.model';
import {MfList} from '@components/components';
import {EntityListPage} from '@components/pages';

@Component({
  selector: '<%= name  %>',
  template: `<mf-list [page]="this"/>`,
  imports: [
    MfList
  ]
})
export default class <%= classify(name) %> extends EntityListPage<<%= classify(name) %>Model> {
  title = '<%= pluralize %>';

  constructor(
    readonly <%= camel %>Service: <%= classify(name) %>Service,
    readonly activatedRoute: ActivatedRoute
) {
    super(<%= camel %>Service, new <%= classify(name) %>Model(), activatedRoute);
  }
}
