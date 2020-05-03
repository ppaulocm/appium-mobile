Feature: Verify app behavior when there is no internet connectivity

    Background:
        Given app is opened on main menu screen

    Scenario: Access multiplayer tab without internet connection
            And there is no wifi connection
        When player tap on Multiplayer button
        Then An error indicating that is no connection is shown
            And Wifi is turned on

