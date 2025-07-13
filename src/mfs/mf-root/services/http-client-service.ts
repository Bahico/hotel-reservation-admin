import {Injectable} from "@angular/core";
import {BaseUrlService} from "./base-url.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

/**
 *
 */
@Injectable({ providedIn: 'root' })
export class HttpClientService {

    /**
     *
     */
    constructor(
        private httpClient: HttpClient,
        private baseUrlService: BaseUrlService) {
    }

    /**
     *
     * @param url
     * @returns
     */
    get(url: string): Observable<any> {
        let withBaseUrl = this.baseUrlService.combineUrl(url);
        return this.httpClient.get(withBaseUrl);
    }

    /**
     *
     * @param url
     * @param body
     * @returns
     */
    post(url: string, body: any): Observable<any> {
        let withBaseUrl = this.baseUrlService.combineUrl(url);
        return this.httpClient.post(withBaseUrl, body);
    }
}
