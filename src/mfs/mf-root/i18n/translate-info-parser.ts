import { LanguageInfo } from "./language-info";

/**
 * 
 */
export class TranslateInfoParser {

    /**
     * 
     */
    private currentKey: string[] = [];

    /**
     * 
     */
    private currentInfos: LanguageInfo[] = [];

    /**
     * 
     * @param translate 
     */
    parse(translate: any): LanguageInfo[] {
        let result = new Array<LanguageInfo>()
        for (let key in translate) {
            this.currentKey = [];
            this.currentInfos = [];

            this.parseProp(key, translate);
            result.push(...this.currentInfos);
        }

        return result;
    }

    /**
     * 
     * @param key 
     * @param obj 
     */
    private parseProp(key: string, obj: any) {
        let fieldObj = obj[key];
        if (!this.isValue(fieldObj)) {
            this.currentKey.push(key);

            this.parseProps(key, fieldObj);
            this.currentKey.pop();
            return;
        }

        let info = new LanguageInfo();
        info.key = this.currentKey.join(".");
        info.value = fieldObj as string;
        info.lang = key;

        this.currentInfos.push(info);
    }

    /**
     * 
     * @param key 
     * @param obj 
     */
    private parseProps(key: string, obj: any) {
        for (let key in obj) {
            this.parseProp(key, obj);
        }
    }

    /**
     * 
     * @param obj 
     * @returns 
     */
    public isValue(obj: any) {
        return typeof obj == 'string' || obj instanceof String;
    }
}