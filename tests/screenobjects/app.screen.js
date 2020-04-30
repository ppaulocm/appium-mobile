import { DEFAULT_TIMEOUT } from '../Constants/constants';

export default class AppScreen {
    constructor(selector) {
        this.selector = selector;
    }

    waitForIsShown(isShown = true) {
        console.log("this.selector")
        console.log(this.selector)
        return $(this.selector).waitForDisplayed(30000, !isShown);
    }

    isDisplayed() {
        return $(this.selector).isDisplayed();
    }
}
