import { When, Then } from 'cucumber';
import { assert } from 'chai';
import InviteDialog from '../screenobjects/components/Invite.dialog';

When('user tap on facebook button', () => {
    InviteDialog.facebookButton.click()
})