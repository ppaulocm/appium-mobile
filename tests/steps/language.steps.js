import { Then } from 'cucumber';
import { assert, expect } from 'chai';
import MainMenu from '../screenobjects/mainmenu.screen';
import dictionary from '../Constants/resx.json'
const resx = dictionary[browser.capabilities.language]

Then('the main menu screen labels are shown in english', function () {
    assert.equal(MainMenu.playNowButton.getText(), resx.BUTTON_PLAY_NOW)
    assert.equal(MainMenu.playMultiplayerButton.getText(), resx.BUTTON_MULTIPLAYER)
    assert.include(MainMenu.onlinePlayersText.getText(), resx.TEXT_ONLINE_PLAYERS)
    assert.equal(MainMenu.moreGamesButton.getText(), resx.BUTTON_MORE_GAMES)
    // best validation for TEXT_ONLINE_PLAYERS uses regex
});
