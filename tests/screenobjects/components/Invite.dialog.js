import AppScreen from '../app.screen';

const SELECTORS = {
    INVITE_DIALOG: "//android.widget.RelativeLayout[@resource-id='com.jogatina.tranca:id/dialogShareContent']",
    INVITE_FACEBOOK_DIALOG: "//android.widget.Button[@resource-id='com.jogatina.tranca:id/com.jogatina.tranca:id/inviteFriendsBtnFacebook']"
};

class InviteDialog extends AppScreen {
    constructor() {
        super(SELECTORS.INVITE_DIALOG);
    }

    get facebookButton() {
        return $(SELECTORS.INVITE_FACEBOOK_DIALOG)
    }
}

export default new InviteDialog();

