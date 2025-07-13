import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class GetEndpoint {
  private readonly apiBaseUrl = 'http://176.96.241.59:8080';

  getEndPoint(api: string, microservice?: string): string {
    if (!microservice) {
      return `${this.apiBaseUrl}/${api}`;
    }
    return `${this.apiBaseUrl}/services/${microservice}/${api}`;
  }
}
