import AppScreen from './app.screen';

const SELECTORS = {
    ANDROID: {
        SEARCH_RESULT_FRAME: "//android.widget.FrameLayout[@resource-id='com.android.vending:id/search_results']",
    },
    IOS: {
        SEARCH_RESULT_FRAME: "",
    }
};

class AppStore extends AppScreen {
    get getSearchScreen() {
        return $(SELECTORS.ANDROID.SEARCH_RESULT_FRAME)
    }
}

export default new AppStore();

