import { Then } from 'cucumber';
import { assert } from 'chai';
import MainMenu from '../screen-objects/screens/mainmenu.screen'
import dictionary from '../data/resx.json'
const resx = dictionary[browser.capabilities.language]

Then('the main menu screen labels are shown according device language', function () {
    assert.equal(MainMenu.playNowButton.getText(), resx.BUTTON_PLAY_NOW)
    assert.equal(MainMenu.playMultiplayerButton.getText(), resx.BUTTON_MULTIPLAYER)
    assert.include(MainMenu.onlinePlayersText.getText(), resx.TEXT_ONLINE_PLAYERS)
    assert.equal(MainMenu.moreGamesButton.getText(), resx.BUTTON_MORE_GAMES)
    // best validation for TEXT_ONLINE_PLAYERS uses regex
});
