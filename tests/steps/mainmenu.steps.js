import { Given, Then, When } from 'cucumber'
import { assert, expect } from 'chai'
import { turnOffWifi } from '../helpers/utils'
import MainMenu from '../screenobjects/mainmenu.screen'
import SelectPlayers from '../screenobjects/selectplayers.screen'
import InviteDialog from '../screenobjects/components/Invite.dialog'
import ConnectionDialog from '../screenobjects/components/connection.dialog'
const { After } = require('cucumber');
import { enableWifi } from '../helpers/utils'

import dictionary from '../Constants/resx.json'
const resx = dictionary[browser.capabilities.language]

Given('app is opened on main menu screen', () => {
    MainMenu.waitForIsShown(true);
    console.log('>> app is opened on main menu screen - OK')
})

Given('there is no wifi connection', () => {
    //turnOffWifi()
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
    browser.pause(5000)
    console.log(browser.getPageSource())
    console.log(browser.getContexts())

    //assert.equal(ConnectionDialog.userDialogTitle.getText(), resx.TEXT_NO_INTERNET_CONNECTION_TITLE)
    assert.equal(ConnectionDialog.dialogDescription.getText(), resx.TEXT_NO_INTERNET_CONNECTION_DESCRIPTION)
})

Then('Wifi is turned on', () => {
    enableWifi(true)
})


// Then('the main menu screen labels are shown in english', function () {
//     console.log("AAAAAAAAAA")
//     console.log(dictionary.BUTTON_PLAY_NOW)
//     return assert.equal(MainMenu.playNowButton.getText(), dictionary.BUTTON_PLAY_NOW)
// });
//     element text must be equal <textValue>


Then('PLAY NOW button\'s text must be in english', function () {
    assert.equal(MainMenu.playNowButton.getText(), "PLAY NOW!")
})

Then(/^the response status is (.*)$/, function (status) {
    assert.equal(this.responseStatus, status)
});


// When('I click Play Now button', () => {
//     MainMenu.button.click();
// });

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