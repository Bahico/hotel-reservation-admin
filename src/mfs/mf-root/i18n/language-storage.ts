import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class LanguageStorage {

    /**
     * 
     */
    static LANGUAGE_KEY: string = "lang";

    /**
     * 
     */
    readLanguageName(): string {
        return localStorage.getItem(LanguageStorage.LANGUAGE_KEY) ?? "ru";
    }

    /**
     * 
     * @param lang 
     */
    saveLanguageName(lang: string) {
        localStorage.setItem(LanguageStorage.LANGUAGE_KEY, lang);
    }
}