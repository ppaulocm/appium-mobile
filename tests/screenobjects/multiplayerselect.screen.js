import AppScreen from './app.screen';

const SELECTORS = {
    ANDROID: {
        PLAYER_NICK_TEXT: "//android.widget.TextView[@resource-id='com.jogatina.tranca:id/playerNick']",
        MAIN_SCREEN: "//android.widget.RelativeLayout[@resource-id='com.jogatina.tranca:id/mainLayout']",
    },
    IOS: {

    }
};

class SelectPlayers extends AppScreen {
    constructor() {
        super(SELECTORS.MAIN_SCREEN);
    }

    get playersNickname() {
        return $(SELECTORS.ANDROID.PLAYER_NICK_TEXT)
    }

    get selectFourPlayers() {
        return $(SELECTORS.ANDROID.FOUR_PLAYERS_BUTON)
    }

    get changeNickNamePopup() {

    }
}

export default new SelectPlayers();
