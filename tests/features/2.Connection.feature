Feature: Verify app behavior when there is no internet connectivity

    # //Background:
    # //Given Player is logged with store account

    Scenario: Access multiplayer tab without internet connection
        Given app is opened on main menu screen
            And there is no wifi connection
        When player tap on Multiplayer button
        Then An error indicating that is no connection is shown
        Then Wifi is turned on

