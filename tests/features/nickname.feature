Feature: Change nickname
    This scenario consider that facebook app exists on device/emulator and has facebook permission allow to Tranca Jogatina.

    Background:
        Given player is logged with store account
        Given app is opened on main menu screen

    Scenario: Change nickname using Jogatina account
        When player tap on settings button
        Then settings screen is shown
        When player tap on Login label
        Then login type screen is shown
        When player tap on Login with Jogatina
        Then login screen is shown
        When player makes login with valid values
        Then multiplayer screen is shown
        When player tap on their username at top os screen
        Then dialog box open to edit user nickname
        When player insert a new nickname
            And tap on validate button
        Then message indicating nickname availability is displayed
        When player tap on Save
        Then new nickname is shown at top of screen


