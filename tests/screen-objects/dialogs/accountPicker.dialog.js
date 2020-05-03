import AppScreen from '../app.screen';

const SELECTORS = {
    ANDROID: {
        DIALOG_CONTAINER: "//android.widget.LinearLayout[@resource-id='com.google.android.gms:id/account_picker_container']",
        ACCOUNT_PICKER: "//android.widget.FrameLayout[@resource-id='com.google.android.gms:id/account_particle_disc']"
    },
    IOS: { DIALOG_CONTAINER: "", ACCOUNT_PICKER: "" }
};

class AccountPicker extends AppScreen {
    constructor() {
        super(SELECTORS.ANDROID.DIALOG_CONTAINER);
    }

    get account() {
        return $(SELECTORS.ANDROID.ACCOUNT_PICKER)
    }
}

export default new AccountPicker();

