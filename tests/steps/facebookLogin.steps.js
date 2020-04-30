import { When, Then } from 'cucumber';
import { assert } from 'chai';
import InviteDialog from '../screenobjects/components/Invite.dialog';
import FacebookLoginScreen from '../screenobjects/facebookLogin.screen'

When('login using valid credentials', (text) => {
    FacebookLoginScreen.email.setValue(text)
})

Then('facebook login page is opened', (text) => {
    FacebookLoginScreen.password.setValue(text)
})

Then('facebook page open with a list of players friends', () => {
    FacebookLoginScreen.submit.click()
})





