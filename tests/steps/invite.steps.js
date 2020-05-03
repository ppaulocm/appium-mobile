import { When, Then } from 'cucumber';
import InviteDialog from '../screen-objects/dialogs/Invite.dialog'

When('user tap on facebook button', () => {
    InviteDialog.facebookButton.click()
})