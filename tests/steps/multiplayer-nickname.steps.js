import { When, Then } from 'cucumber';
import NicknameDialog from '../screen-objects/dialogs/changeNickname.dialog'
import MultiplayerScreen from '../screen-objects/screens/multiplayer.screen'
import dictionary from '../data/resx.json'
import { assert } from 'chai';

const resx = dictionary[browser.capabilities.language]
const random = require('crypto-random-string')({ length: 8 });
let newNickname = `player${random}`

When('player insert a new nickname', () => {
    NicknameDialog.playersNicknameTextBox.setValue(newNickname)
})

When('tap on validate button', () => {
    NicknameDialog.verifyNicknameAvailability.click()
})

When('player tap on Save', () => {
    NicknameDialog.verifyNicknameAvailability.click()
})

Then('dialog box open to edit user nickname', () => {
    NicknameDialog.playersNicknameTextBox.clearValue()
})

Then('message indicating nickname availability is displayed', () => {
    assert.equal(NicknameDialog.verifyMessage.getText(), resx.TEXT_NICKNAME_AVAILABILITY)
})

Then('new nickname is shown at top of screen', () => {
    assert.equal(MultiplayerScreen.playersNickname.getText(), newNickname)
})







