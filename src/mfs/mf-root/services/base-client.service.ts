import { Inject, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base-service';

/**
 * Base client for basic entity
 * TModel Model for entity
 */
export abstract class BaseClientService<TModel> extends BaseService<TModel> {


  /**
   *
   * @param classType
   * @protected
   */
  protected constructor(
    @Inject(String) private readonly classType: TModel
  ) {
    super();
  }
}
