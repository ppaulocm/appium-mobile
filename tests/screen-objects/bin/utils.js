import { DEFAULT_BROWSER_PAUSE } from '../../data/constants'

export function enableWifi(status) {
    let wifiStatus = browser.getNetworkConnection()
    if (status) {
        if (wifiStatus != 2) {
            toggle()
        }
    } else {
        if (wifiStatus == 2) {
            toggle()
        }
    }
}

function toggle() {
    browser.toggleWiFi()
    browser.pause(DEFAULT_BROWSER_PAUSE)
}

//todo
// create function to validate wifi status in order to change browser.pause
