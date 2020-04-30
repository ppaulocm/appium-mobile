import { When, Then } from 'cucumber';
import LoginScreen from '../screenobjects/loginType.screen'

Then('login type screen is shown', () => {
    LoginScreen.waitForIsShown(true);
})

When('player tap on Login with Jogatina', () => {
    LoginScreen.jogatinaLoginType.click()
})






