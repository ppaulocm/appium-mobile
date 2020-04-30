import { Given, Then, When } from 'cucumber';
import AccountPicker from '../screenobjects/components/accountPicker.dialog'

Given('Player is logged with store account', () => {
    browser.reset()
    AccountPicker.waitForIsShown();
    AccountPicker.account.click()
})
