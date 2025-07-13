import {Router} from '@angular/router';

/**
 *
 */
export class UrlHelper {

    /**
     *
     */
    static getCurrentFormUrl(): string {
        return window.location.pathname.replace("list", "form");
    }

    /**
     *
     */
    static getCurrentListFormUrl(): string {
        let index = window.location.pathname.indexOf("/form");
        let url = window.location.pathname.substring(0, index);

        return url + "/list";
    }

    /**
     *
     */
    static getCurrentAddFormUrl(): string {
        let index = window.location.pathname.indexOf("/form");
        let url = window.location.pathname.substring(0, index);

        return url + "/form";
    }

    /**
     *
     */
    static getRouteUrlWithoutParams(router: Router): string | null {
        if (!router?.url) {
            return null;
        }

        return router.url.split('?')[0];
    }
}
