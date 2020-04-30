import AppScreen from './app.screen';

const SELECTORS = {
    // android and ios selector declared according need
    // There is no acessibility-id available
    ANDROID: {
        PLAY_NOW_BUTON: "//android.widget.Button[@resource-id='com.jogatina.tranca:id/buttonSinglePlayer']",
    },
    IOS: {
        PLAY_NOW_BUTON: "",
    },
    MORE_GAMES_BUTTON: "//android.widget.Button[@resource-id='com.jogatina.tranca:id/buttonMoreGames']",
    PLAY_MULTIPLAYER_BUTTON: "//android.widget.Button[@resource-id='com.jogatina.tranca:id/buttonMultiPlayer']",
    ONLINE_PLAYERS: "//android.widget.TextView[@resource-id='com.jogatina.tranca:id/textViewPlayersOnline']",
    INVITE_FRIENDS_BUTON: "//android.widget.ImageButton[@resource-id='com.jogatina.tranca:id/buttonInviteFriends']",
    OPTIONS_BUTTON: "//android.widget.ImageButton[@resource-id='com.jogatina.tranca:id/buttonOptions']",
    ACHIEVEMENTS_BUTTON: "//android.widget.ImageButton[@resource-id='com.jogatina.tranca:id/buttonAchievements']",
    CROSS_PROMOTION_IMAGE: "//android.widget.ImageView[@resource-id='com.jogatina.tranca:id/imageViewCrossPromotion']",
    MAIN_SCREEN: "//android.widget.ImageView[@resource-id='com.jogatina.tranca:id/imageViewLogo']",
    CONTINUE_BUTTON: "//android.widget.TextView[@resource-id='com.jogatina.tranca:id/textViewButton']"
};

class MainScreen extends AppScreen {
    constructor() {
        browser.reset()
        super(SELECTORS.MAIN_SCREEN);
    }

    get moreGamesButton() {
        return $(SELECTORS.MORE_GAMES_BUTTON)
    }

    get playNowButton() {
        //only for example purporse

        const selector = driver.isAndroid
            ? SELECTORS.ANDROID.PLAY_NOW_BUTON
            : SELECTORS.IOS.PLAY_NOW_BUTON

        return $(selector)
    }

    get playMultiplayerButton() {
        return $(SELECTORS.PLAY_MULTIPLAYER_BUTTON)
    }

    get onlinePlayersText() {
        return $(SELECTORS.ONLINE_PLAYERS)
    }

    get invitePlayersButton() {
        return $(SELECTORS.INVITE_FRIENDS_BUTON)
    }

    get continueButton() {
        return $(SELECTORS.CONTINUE_BUTTON)
    }

    get settingsButton() {
        return $(OPTIONS_BUTTON)
    }
}

export default new MainScreen();

// INPUT: '~text-input',
// INPUT_TEXT: '~input-text-result',
// SWITCH: '~switch',
// SWITCH_TEXT: '~switch-text',
// DROP_DOWN: '~select-Dropdown',
// ACTIVE_BUTTON: '~button-Active',
// IN_ACTIVE_BUTTON: '~button-Inactive',