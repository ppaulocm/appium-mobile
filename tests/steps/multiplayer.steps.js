import { When, Then } from 'cucumber';
import MultiplayerScreen from '../screen-objects/screens/multiplayer.screen'

When('player tap on their username at top os screen', () => {
    MultiplayerScreen.playersNickname.click()
})

Then('multiplayer screen is shown', () => {
    MultiplayerScreen.waitForIsShown(true)
})




