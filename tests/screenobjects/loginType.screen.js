import AppScreen from './app.screen';

const SELECTORS = {
    ANDROID: {
        LOGIN_TYPE_SCREEN: "//android.widget.LinearLayout[@resource-id='com.jogatina.tranca:id/linearLayoutLoginButtons']",
        JOGATINA_LOGIN_BUTTON: "//android.widget.Button[@resource-id='com.jogatina.tranca:id/btnLogin']"
    },
    IOS: {

    }
};

class SettingsScreen extends AppScreen {
    constructor() {
        super(SELECTORS.ANDROID.LOGIN_TYPE_SCREEN);
    }

    get jogatinaLoginType() {
        return $(SELECTORS.ANDROID.JOGATINA_LOGIN_BUTTON)
    }
}

export default new SettingsScreen();
