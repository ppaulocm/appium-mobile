import AppScreen from '../app.screen';

const SELECTORS = {
    ANDROID: {
        MAIN_SCREEN: "//android.widget.TableLayout[@resource-id='com.jogatina.tranca:id/tableLayoutDialogMaker']",
        PLAYER_NICK_TEXTBOX: "//android.widget.EditText[@resource-id='com.jogatina.tranca:id/editText1']",
        VERIFY_NICKNAME: "//android.widget.TextView[@resource-id='com.jogatina.tranca:id/textViewButtonExtra']",
        VERIFY_NICKNAME_MESSAGE: "//android.widget.TextView[@resource-id='com.jogatina.tranca:id/textViewDescription']"
    },
    IOS: {
        MAIN_SCREEN: "",
        PLAYER_NICK_TEXTBOX: ""
    }
};

class NicknameDialog extends AppScreen {
    constructor() {
        super(SELECTORS.ANDROID.MAIN_SCREEN);
    }

    get playersNicknameTextBox() {
        return $(SELECTORS.ANDROID.PLAYER_NICK_TEXTBOX)
    }

    get verifyNicknameAvailability() {
        return $(SELECTORS.ANDROID.VERIFY_NICKNAME)
    }

    get verifyMessage() {
        return $(SELECTORS.ANDROID.VERIFY_NICKNAME_MESSAGE)
    }
}

export default new NicknameDialog();
