import AppScreen from '../app.screen';

const SELECTORS = {
    USER_DIALOG: "//android.widget.TableLayout[@resource-id='com.jogatina.tranca:id/tableLayoutDialogMaker']",
    USER_DIALOG_TITLE: "//android.widget.TextView[@resource-id='com.jogatina.tranca:id/textViewTitle']",
    USER_DIALOG_DESCRIPTION: "//android.widget.TextView[@resource-id='com.jogatina.tranca:id/textViewDescription']",
    USER_DIALOG_OK_BUTTON: "//android.widget.TextView[@resource-id='com.jogatina.tranca:id/textViewButton']",
};

class UserDialog extends AppScreen {
    constructor() {
        super(SELECTORS.USER_DIALOG);
    }

    get userDialogTitle() {
        return $(SELECTORS.USER_DIALOG_TITLE)
    }

    get userDialogDescription() {
        return $(SELECTORS.USER_DIALOG_DESCRIPTION)
    }

    // I don't know if there is another alerts with more than one button, so I call userDialogOkButton
    get userDialogOkButton() {
        return $(SELECTORS.USER_DIALOG_OK_BUTTON)
    }
}

export default new UserDialog();

//<android.view.View resource-id="u_0_4"></android.view.View>