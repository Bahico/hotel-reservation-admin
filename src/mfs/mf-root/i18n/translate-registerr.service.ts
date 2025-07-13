import {Injectable} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
import {TranslateInfoParser} from "./translate-info-parser";
import {LanguageInfo} from "./language-info";

/**
 *
 */
@Injectable({providedIn: 'root'})
export class TranslateRegisterr {

    /**
     *
     */
    constructor(private translate: TranslateService) {}

    /**
     *
     * @param translate
     */
    register(translate: any) {
        if (!translate)
            return;

        const parser = new TranslateInfoParser();
        let infos = parser.parse(translate);

        infos.forEach(f => this.registerInfo(f));
    }

    /**
     *
     * @param info
     */
    private registerInfo(info: LanguageInfo) {
        let lang = this.translate.translations[info.lang];
        if (!lang)
            this.translate.translations[info.lang] = {};

        this.translate.translations[info.lang][info.key] = info.value;
    }
}
