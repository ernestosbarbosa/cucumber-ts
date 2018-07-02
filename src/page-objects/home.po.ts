import { click, TIPO_BUSCA } from "../support/driver";

export class HomePage {

    async clickMenu(menuItem: string) {
        // return await click('[aria-label="' + menuItem + '"]', TIPO_BUSCA.CSS);
    }

    async clickSubMenu(menuItem: string) {
        return await click('[href="/components/' + menuItem + '"]', TIPO_BUSCA.CSS);
    }

    static page() {
        return new HomePage();
    }
}