const SELECTORS = {
    ANDROID: {
        TEXT: '*//android.widget.TextView',
        TEXT_FIELD: '*//android.widget.EditText',
    },
    IOS: {
        GENERIC_TEXT: null,
        TEXT_ELEMENT:
            "-ios predicate string:type == 'XCUIElementTypeStaticText'",
    },
};

/**
 * Get the text of an element (including all child elements)
 *
 * @param {element} element
 * @param {boolean} isXpath
 *
 * @return {string}
 */
export function getTextOfElement(element, isXpath = false) {
    let visualText;

    try {
        if (driver.isAndroid) {
            visualText = element
                .$$(SELECTORS.ANDROID.TEXT)
                .reduce(
                    (currentValue, el) => `${currentValue} ${el.getText()}`,
                    '',
                );
        } else {
            const iosElement = isXpath
                ? element.$$(SELECTORS.IOS.TEXT_ELEMENT)
                : element;

            if (isXpath) {
                visualText = element
                    .$$(SELECTORS.IOS.TEXT_ELEMENT)
                    .reduce(
                        (currentValue, el) => `${currentValue} ${el.getText()}`,
                        '',
                    );
            } else {
                visualText = iosElement.getText();
            }
        }
    } catch (e) {
        visualText = element.getText();
    }

    return visualText.trim();


}

export function enableWifi(boolean) {
    let wifiStatus = browser.getNetworkConnection()
    if (boolean) {
        if (wifiStatus != 2) { browser.toggleWiFi() }
    } else {
        if (wifiStatus == 2) { browser.toggleWiFi() }
    }
}

export function turnOffWifi() {
    //  Object containing ConnectionType, set bitmask as value for type key in object. 
    //  Airplane Mode (1), Wi-Fi only (2), Wi-Fi and data (6), 4G (8), 3G (10), 2G (20).
    console.log((browser.getNetworkConnection() === 2))
    if (browser.getNetworkConnection() === 2) {
        browser.toggleWiFi()
    }
}