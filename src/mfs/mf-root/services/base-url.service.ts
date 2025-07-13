import {UrlBuilder} from "../helpers/url-builder";

/**
 *
 */
export abstract class BaseUrlService {

    /**
     *
     */
    abstract getBaseUrl(): string;

    /**
     *
     * @param url
     */
    combineUrl(url: string): string {
        return UrlBuilder.combine(this.getBaseUrl(), url);
    }
}
