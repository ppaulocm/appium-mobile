Feature: Verify language

    Background:
        Given player is logged with store account

    Scenario: Check main menu labels in current device language
        Given app is opened on main menu screen
        Then the main menu screen labels are shown according device language


