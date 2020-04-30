Feature: Invite new Players
    This scenario consider that facebook is already installed on device/emulator and has permissions are allowed to Tranca Jogatina.

    Background:
        Given app is opened on main menu screen

    Scenario: Invite new players using facebook account
        When player tap on invite friends button
        Then dialog box open with invite sharing button
        When user tap on facebook button
        Then facebook login page is opened
        When login using valid credentials
        Then facebook page open with a list of players friends



