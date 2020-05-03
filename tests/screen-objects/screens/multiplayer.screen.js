import AppScreen from '../app.screen';

const SELECTORS = {
    ANDROID: {
        LOGGED_PLAYER_NAME_TEXT: "//android.widget.TextView[@resource-id='com.jogatina.tranca:id/playerNick']",
        MULTIPLAYER_SCREEN: "//android.widget.RelativeLayout[@resource-id='com.jogatina.tranca:id/mainLayout']",
    },
    IOS: {}
};

class MultiplayerScreen extends AppScreen {
    constructor() {
        super(SELECTORS.ANDROID.MULTIPLAYER_SCREEN);
    }

    get playersNickname() {
        return $(SELECTORS.ANDROID.LOGGED_PLAYER_NAME_TEXT)
    }

    get selectFourPlayers() {
        return $(SELECTORS.ANDROID.FOUR_PLAYERS_BUTON)
    }

    get changeNickNamePopup() {

    }
}

export default new MultiplayerScreen();
