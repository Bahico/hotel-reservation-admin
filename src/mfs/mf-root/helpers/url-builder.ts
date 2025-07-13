import { SymbolsHelper } from "./symbols.helper";

/**
 * 
 */
export class UrlBuilder {

    /**
     * 
     * @param url1 
     * @param url2 
     */
    static combine(url1: string, url2: string): string {
        if (!url1 || url1.length == 0)
            return url1;

        if (url1.endsWith(SymbolsHelper.backSlash))
            url1 = url1.substring(0, url1.length - 1);

        if (url2.startsWith(SymbolsHelper.backSlash))
            url2 = url2.substring(1, url2.length);

        return url1 + SymbolsHelper.backSlash + url2;
    }

}