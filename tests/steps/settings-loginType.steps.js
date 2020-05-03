import { When, Then } from 'cucumber';
import LoginScreen from '../screen-objects/screens/loginType.screen'

Then('login type screen is shown', () => {
    LoginScreen.waitForIsShown(true);
})

When('player tap on Login with Jogatina', () => {
    LoginScreen.jogatinaLoginType.click()
})






