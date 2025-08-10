import {Injectable} from '@angular/core';
import {BaseClientCrudService} from '@components/services';
import { <%= classify(name) %>Model } from '../models/<%= name %>.model';

@Injectable({providedIn: 'root'})
export class <%= classify(name) %>Service extends BaseClientCrudService<<%= classify(name) %>Model> {
  listModification = '<%= pluralize %>';

  constructor() {
    super(new <%= classify(name) %>Model(), 'api/<%= pluralize %>');
  }
}
