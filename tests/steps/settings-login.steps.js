import { When, Then } from 'cucumber';
import LoginJogatina from '../screen-objects/screens/loginJogatina.screen'
import accounts from '../data/accounts.json'

Then('login screen is shown', () => {
    LoginJogatina.waitForIsShown(true)
})

When('player makes login with valid values', () => {
    let email = accounts.login.jogatina.email
    let password = accounts.login.jogatina.passoword

    LoginJogatina.jogatinaEmail.setValue(email)
    LoginJogatina.jogatinaPassword.setValue(password)
    LoginJogatina.playNow.click()
})









