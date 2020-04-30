import { Given, Then, When } from 'cucumber'
import SettingScreen from '../screenobjects/settings.screen'

Then('settings screen is shown', () => {
    SettingScreen.waitForIsShown(true)
})

When('player tap on Login label', () => {
    SettingScreen.login().click()
})

