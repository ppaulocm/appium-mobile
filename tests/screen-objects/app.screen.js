import { DEFAULT_TIMEOUT } from '../data/constants';

export default class AppScreen {
    constructor(selector) {
        this.selector = selector;
    }

    waitForIsShown(isShown = true) {
        return $(this.selector).waitForDisplayed(DEFAULT_TIMEOUT, !isShown);
    }

    isDisplayed() {
        return $(this.selector).isDisplayed();
    }
}
