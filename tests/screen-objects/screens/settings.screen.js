import AppScreen from '../app.screen';

const SELECTORS = {
    ANDROID: {
        SETTING_SCREEN: "//android.widget.FrameLayout[@resource-id='android:id/content']",
        LOGIN_LINK: "//android.widget.TextView[@resource-id='com.jogatina.tranca:id/textViewPrefsTitleLine2']",
        JOGATINA_LOGIN_BUTTON: "//android.widget.Button[@resource-id='com.jogatina.tranca:id/btnLogin']",
        JOGATINA_EMAIL_TEXTBOX: "//android.widget.EditText[@resource-id='com.jogatina.tranca:id/inputEmail']",
        JOGATINA_PASSWORD_TEXTBOX: "//android.widget.EditText[@resource-id='com.jogatina.tranca:id/inputPwd']",
        JOGATINA_PLAYNOW_BUTTON: "//android.widget.Button[@resource-id='com.jogatina.tranca:id/btnPlayNow']",
    },
    IOS: {

    }
};

class SettingsScreen extends AppScreen {
    constructor() {
        super(SELECTORS.ANDROID.SETTING_SCREEN);
    }

    get login() {
        return $(SELECTORS.ANDROID.LOGIN_LINK)
    }

    get jogatinaLogin() {
        return $(SELECTORS.ANDROID.JOGATINA_LOGIN_BUTTON)
    }
}

export default new SettingsScreen();
