import AppScreen from '../app.screen';

const SELECTORS = {
    FACEBOOK_LOGIN_SCREEN: "//android.view.View[@resource-id='page']",
    FACEBOOK_LOGIN_EMAIL: "//android.widget.EditText[@resource-id='m_login_email']",
    FACEBOOK_LOGIN_PASSWORD: "//android.widget.EditText[@resource-id='m_login_password']",
    FACEBOOK_LOGIN_SUBMIT: "//android.view.View[@resource-id='login_form']/*/android.widget.Button",
    FACEBOOK_LOGGED_SCREEN: "//android.view.View[@resource-id='m-future-page-header-title']"
};

class FacebookLoginScreen extends AppScreen {
    constructor() {
        super(SELECTORS.FACEBOOK_LOGIN_SCREEN);
    }

    get email() {
        return $(SELECTORS.FACEBOOK_LOGIN_EMAIL)
    }

    get password() {
        return $(SELECTORS.FACEBOOK_LOGIN_PASSWORD)
    }

    get submit() {
        return $(SELECTORS.FACEBOOK_LOGIN_SUBMIT)
    }

    get LoggedScreen() {
        return $(SELECTORS.FACEBOOK_LOGGED_SCREEN)
    }
}

export default new FacebookLoginScreen();
