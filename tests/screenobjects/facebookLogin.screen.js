import AppScreen from './app.screen';

const SELECTORS = {
    FACEBOOK_LOGIN_EMAIL: "//android.widget.EditText[@resource-id='m_login_email']",
    FACEBOOK_LOGIN_PASSWORD: "//android.widget.EditText[@resource-id='m_login_password']",
    FACEBOOK_LOGIN_SUBMIT: "//android.view.View[@resource-id='login_form']/*/android.widget.Button",
    FACEBOOK_LOGGED_SCREEN: "//android.view.View[@resource-id='m-future-page-header-title']"
};

class FacebookLoginScreen extends AppScreen {
    constructor() {
        //todo
        super(SELECTORS.INVITE_DIALOG);
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





// // email => <android.widget. resource-id="m_login_email">
// //     password => </android.widget.EditText><android.widget.EditText resource-id="m_login_password">

// //         entrar => /hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/
// //         android.widget.LinearLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View[1]/
// //         android.view.View[3]/android.view.View[2]


// android.view.View[@resource-id='login_form']- working pro form - entrar
//     - entrar

//     //android.view.View[@resource-id='login_form'>

//     < android.view.View resource - id="m-future-page-header-title" > -> facebook logado
