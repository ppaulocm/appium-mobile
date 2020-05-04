import { When, Then } from 'cucumber';
import FacebookLoginScreen from '../screen-objects/screens/facebookLogin.screen'
import accounts from '../data/accounts.json'

let email = accounts.login.facebook.email
let password = accounts.login.facebook.passoword


When('login using valid credentials', () => {
    FacebookLoginScreen.email.setValue(email)
    FacebookLoginScreen.password.setValue(password)
    FacebookLoginScreen.submit.click()
})

Then('facebook login page is opened', () => {
    FacebookLoginScreen.waitForIsShown(true)
})

Then('facebook page open with a list of players friends', () => {
    FacebookLoginScreen.LoggedScreen
})