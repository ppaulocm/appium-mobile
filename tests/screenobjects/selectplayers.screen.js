import AppScreen from './app.screen';

const SELECTORS = {
    // android and ios selector declared according need
    // There is no acessibility-id available
    ANDROID: {
        MAIN_SCREEN: "//android.widget.RelativeLayout[@resource-id='com.jogatina.tranca:id/mainLayout']",
        TWO_PLAYERS_BUTON: "//android.widget.ImageButton[@resource-id='com.jogatina.tranca:id/btn2Players']",
        FOUR_PLAYERS_BUTON: "//android.widget.ImageButton[@resource-id='com.jogatina.tranca:id/btn4Players']",
    },
    IOS: {
        TWO_PLAYERS_BUTON: "",
        FOUR_PLAYERS_BUTON: "",
    }
};

class SelectPlayers extends AppScreen {
    constructor() {
        super(SELECTORS.MAIN_SCREEN);
    }

    get selectTwoPlayers() {
        return $(SELECTORS.ANDROID.TWO_PLAYERS_BUTON)
    }

    get selectFourPlayers() {
        return $(SELECTORS.ANDROID.FOUR_PLAYERS_BUTON)
    }
}

export default new SelectPlayers();
