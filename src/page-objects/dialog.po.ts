import { waitForElementVisible, TIPO_BUSCA, setValue, click, getText } from "../support/driver";

export class DialogPage {

    $input = '[placeholder="What\'s your name?"]';
    $pickOne = '[class="mat-raised-button"]';

    $dialogTitleResult = 'h1.mat-dialog-title';

    async setInputValue(text: string) {
        await waitForElementVisible(this.$input, TIPO_BUSCA.CSS).then(() => {
            setValue(this.$input, text, TIPO_BUSCA.CSS);
        })
    }

    async selectPickOne() {
        await click(this.$pickOne, TIPO_BUSCA.CSS);
    }

    async getModalMessage() {
        return await waitForElementVisible(this.$dialogTitleResult, TIPO_BUSCA.CSS).then(() => {
            return getText(this.$dialogTitleResult, TIPO_BUSCA.CSS);
        })
    }


    static page() {
        return new DialogPage();
    }
}