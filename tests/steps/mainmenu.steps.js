import { Given, Then, When } from 'cucumber'
import { assert } from 'chai'
import MainMenu from '../screen-objects/screens/mainmenu.screen'
import SelectPlayers from '../screen-objects/screens/selectplayers.screen'
import InviteDialog from '../screen-objects/dialogs/Invite.dialog'
import ConnectionDialog from '../screen-objects/dialogs/connection.dialog'

const { After } = require('cucumber');
import { enableWifi } from '../screen-objects/bin/utils'

import dictionary from '../data/resx.json'
const resx = dictionary[browser.capabilities.language]

Given('app is opened on main menu screen', () => {
    MainMenu.waitForIsShown(true);
})

Given('there is no wifi connection', () => {
    enableWifi(false)
})

When('user tap on play now button', () => {
    MainMenu.playNowButton.click()
})

When('user tap on 2 players button', () => {
    SelectPlayers.selectTwoPlayers.click()
})

When('player tap on Multiplayer button', () => {
    MainMenu.playMultiplayerButton.click()
})

When('player tap on continue', () => {
    MainMenu.continueButton.click()
})

When('player tap on invite friends button', () => {
    MainMenu.invitePlayersButton.click()
})

When('player tap on settings button', () => {
    MainMenu.settingsButton.click()
})

Then('dialog box open with invite sharing button', () => {
    InviteDialog.waitForIsShown(true)
})

Then('An error indicating that is no connection is shown', () => {
    assert.equal(ConnectionDialog.dialogDescription.getText(), resx.TEXT_NO_INTERNET_CONNECTION_DESCRIPTION)
})

Then('Wifi is turned on', () => {
    enableWifi(true)
})

Then('PLAY NOW button\'s text must be in english', function () {
    assert.equal(MainMenu.playNowButton.getText(), "PLAY NOW!")
})

Then(/^the response status is (.*)$/, function (status) {
    assert.equal(this.responseStatus, status)
});

Then('Screen to select number of players is displayed', () => {
    assert.equal(
        true, true
    );
})

When('I Open the app', () => {
    assert.equal(
        MainMenu.playNowButton.getText(),
        'PLAY NOW2!',
    );

    assert.equal(
        MainMenu.playMultiplayerButton.getText(),
        'MULTIPLAYER',
    );

});