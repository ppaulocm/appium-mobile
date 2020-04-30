import AppScreen from './app.screen';

const SELECTORS = {
    ANDROID: {
        MAIN_SCREEN: "//android.widget.TableLayout[@resource-id='com.jogatina.tranca:id/tableLayoutDialogMaker']",
        PLAYER_NICK_TEXTBOX: "//android.widget.EditText[@resource-id='com.jogatina.tranca:id/editText1']",
        VERIFY_NICKNAME: "//android.widget.TextView[@resource-id='com.jogatina.tranca:id/textViewButtonExtra']"
    },
    IOS: {
        MAIN_SCREEN: "",
        PLAYER_NICK_TEXTBOX: ""
    }
};

class SelectPlayers extends AppScreen {
    constructor() {
        super(SELECTORS.MAIN_SCREEN);
    }

    get playersNicknameTextBox() {
        return $(SELECTORS.ANDROID.PLAYER_NICK_TEXTBOX)
    }

    get verifyNickname() {
        return $(SELECTORS.ANDROID.PLAYER_NICK_TEXTBOX)
    }
}

export default new SelectPlayers();
