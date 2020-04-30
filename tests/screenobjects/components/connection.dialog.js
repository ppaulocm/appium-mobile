import AppScreen from '../app.screen';

const SELECTORS = {
    CONNECTION_DIALOG: "//android.widget.TableLayout[@resource-id='com.jogatina.tranca:id/tableLayoutDialogMaker']",
    CONNECTION_DIALOG_TITLE: "//android.widget.TextView[@resource-id='com.jogatina.tranca:id/textViewTitle']",
    CONNECTION_DIALOG_DESCRIPTION: "//android.widget.TextView[@resource-id='com.jogatina.tranca:id/textViewDescription']",
    CONNECTION_OK_BUTTON: "//android.widget.TextView[@resource-id='com.jogatina.tranca:id/textViewButton']"
};

class ConnectionDialog extends AppScreen {
    constructor() {
        super(SELECTORS.CONNECTION_DIALOG);
    }

    get dialogTitle() {
        console.log(SELECTORS.CONNECTION_DIALOG_TITLE)
        return $(SELECTORS.CONNECTION_DIALOG_TITLE)
    }

    get dialogDescription() {
        return $(SELECTORS.CONNECTION_DIALOG_DESCRIPTION)
    }

    get tapOk() {
        return $(SELECTORS.CONNECTION_DIALOG_TITLE)
    }
}

export default new ConnectionDialog();

