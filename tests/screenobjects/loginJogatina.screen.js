import AppScreen from './app.screen';

const SELECTORS = {
    ANDROID: {
        LOGIN_SCREEN: "//android.widget.FrameLayout[@resource-id='com.jogatina.tranca:id/content']",
        JOGATINA_EMAIL_TEXTBOX: "//android.widget.EditText[@resource-id='com.jogatina.tranca:id/inputEmail']",
        JOGATINA_PASSWORD_TEXTBOX: "//android.widget.EditText[@resource-id='com.jogatina.tranca:id/inputPwd']",
        JOGATINA_PLAYNOW_BUTTON: "//android.widget.Button[@resource-id='com.jogatina.tranca:id/btnPlayNow']",
    },
    IOS: {

    }
};

class LoginJogatina extends AppScreen {
    constructor() {
        super(SELECTORS.ANDROID.LOGIN_SCREEN);
    }

    get jogatinaEmail() {
        return $(SELECTORS.ANDROID.JOGATINA_EMAIL_TEXTBOX)
    }

    get jogatinaPassword() {
        return $(SELECTORS.ANDROID.JOGATINA_PASSWORD_TEXTBOX)
    }

    get playNow() {
        return $(SELECTORS.ANDROID.JOGATINA_PLAYNOW_BUTTON)
    }
}

export default new LoginJogatina();
