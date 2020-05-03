import { Given } from 'cucumber';
import AccountPicker from '../screen-objects/dialogs/accountPicker.dialog'

Given('player is logged with store account', () => {
    AccountPicker.waitForIsShown();
    AccountPicker.account.click()
})
