Feature: Verify english language

    Background:
        Given Player is logged with store account

    Scenario: Check main menu labels in english
        Given app is opened on main menu screen
        Then the main menu screen labels are shown in english


