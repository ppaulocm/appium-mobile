- [Test Cases](#test-cases)
  - [Test Cases - Settings](#test-cases---settings)
    - [Settings - Login](#settings---login)
    - [Settings - Game Level](#settings---game-level)
  - [Game Play](#game-play)
    - [Game Screen](#game-screen)
    - [Game Rules](#game-rules)
    - [Game Logic - Negative Workflow](#game-logic---negative-workflow)
  - [Multiplayer](#multiplayer)
- [Possible bugs](#possible-bugs)

## Test Cases

> Escrevi alguns casos de teste e os demais apenas coloquei a descrição.

### Test Cases - Settings

#### Settings - Login 

1. **Register new user creating a Jogatina account**

Description: This test case validates app behavior when a new user creates a new account on Jogatina.

Pre-Condition: No user must be logged on app

Steps:
   1. Access the app Tranca Jogatina
   2. Access Settings button
   3. Tap on 'Login or Sign' link
   4. Tap on Sign Up
   5. Fill fields with valid email and password. Email must no be associated with an existent account. 
   6. Tap on 'Create Account' button
   
Expected Result: Account must be created and generic username must be displayed at top pf multiplayer screen.

Pos Condition: User is logged with new Jogatina account and able to play online.

2. Register an user that was already register before (#BUG5)
3. Try to register an user that was already register informing a new password (#BUG6)
4. Register an new user using an email with special characters. Ex:select*from@gmail.com ([#BUG7)


#### Settings - Game Level 
1. **Change Difficulty level**

Description: This test case validates app behavior when player change game difficulty level in Portuguese. (#BUG1)

Pre-Condition: none

Steps:
   1. Access the app Tranca Jogatina
   2. Access Settings button
   3. Tap on 'Difficulty Level' button
      1. Result: Dialog opens with Normal option selected.

   4. Tap on Hard option
   5. Tap on 'Difficulty Level' button again
      1. Result: Dialog opens with Hard option selected.
   6. Tap on Easy option
   5. Tap on 'Difficulty Level' button again
      1. Result: Dialog opens with Easy option selected.
   6. Tap on Normal option
   7. Tap on 'Difficulty Level' button again
      1. Result: Dialog opens with Normal option selected.
   
Expected Result: All changes must be made successfully.

Pos Condition: Normal option must be selected.


2. This test case validates app behavior when player change game difficulty level in English. 

### Game Play

#### Game Screen 

1. **Start new game, leave game and back to the same game**

Description: This test case validates app behavior when player abandon the game and back to the same game

Pre-Condition: Application cache must be cleaned.

Steps:
   1. Access the app Tranca Jogatina
   2. Access 'Play Now!' button
   3. Tap on '2 Players'
      1. Game screen is shown
   4. User must save cards ordering and the card that is on the 'Discard'
   5. Tap on Menu button
   6. Navigate to button 'Abandon the game' at bottom of screen
   7. Tap button 'Abandon the game'
   8. Tap on exit
      1. Main app screen is shown
   9.  Access 'Play Now!' button
       1.  Dialog open asking to continue previous game or start a new one
   10. Tap on continue button

Expected Result: Game must be the same. Cards must be the same and respect same order. The card at 'Discard' area must be the same

Pos Condition: The same game must be loaded and user must be able to play it.
   
#### Game Rules 

1. Draw a card from the pile and discard a different one
2. Draw a card from the pile and discard the same
3. Draw a card from the pile and put 3 cards of same value on the table without use card '2'
4. Draw a card from the pile and put 3 cards of same value on the table using card '2'
5. Draw a card from the pile and put 3 cards in sequence of the same suit on the table without use card '2'
6. Draw a card from the pile and put 3 cards in sequence of the same suit on the table using card '2'
7. Draw a card from the discard pile and put 3 cards of same value on the table without use card '2'
8. Draw a card from the discard pile and put 3 cards of same value on the table using card '2'
9. Draw a card from the discard pile and put 3 cards in sequence of the same suit on the table without use card '2'
10. Draw a card from the discard pile and put 3 cards in sequence of the same suit on the table using card '2'
11. Draw a card from the pile and put some '3' of red suit card on the table

#### Game Logic - Negative Workflow

1. Put 3 cards in sequence on the table without draw from pile
2. Put 3 cards with same value on the table without draw from pile
3. Put 3 cards on the table that forms a sequence but with different suits
4. Draw card from pile during adversary action
5. Put red 3 card before draw from pile
6. Add card 2 in a sequence that already have a card 2 
7. Add card 2 in a set of 3 equal cards that already have a card 2 
8. Finish game without canastra layed on table

### Multiplayer

1. Initiate an online match as guest (#BUG3)
2. Initiate an online match as Jogatina User (#BUG3)
3. Initiate an online game logged with facebook account
4. Initiate an online game using Jogatina account and does not draw any card until player time ending

## Possible bugs
> Descrevi alguns possíveis bugs apesar de achar que alguns deles possam ser instabilidades ou alguma restrição. Os bugs 5, 6 e 7 na verdade eu descrevi porque imaginei alguma inconsistência na base.

**1. It is not possible to set difficulty level as Easy when app language is Portuguese.** [#BUG1]

Steps:
1. Open app
2. Access Settings button
3. Access item 'Difficulty Level'
4. Select 'Easy' option
5. Access item 'Difficulty Level' again

**Expecte Result:**
Easy option must be selected.

**Found Result:**
Hard option is selected.

**Environment:**
Device: Moto G5S Plus - Android: 8.1.0 - Connection: WIFI

Evidence on: /docs/img/levelbug.mp4

---

**2. Rule exhibition has visual problems.** [#BUG2]

Steps:
1. Open app
2. Tap 'Play Now!' Button 
3. Tap on '2 players'
4. Access menu inside game screen
5. Access question mark icon at top area

**Expecte Result:**
Rules must be shown with a uniform background and without overwrited tests.

**Found Result:**
Rules background has different colors (Black and white) and texts are overwrited.

**Environment:**
Device: Moto G5S Plus - Android: 8.1.0 - Connection: WIFI

Evidence on: /docs/img/rule.mp4

---

**3. [Intermitent] - It is not possible to initiate a multiplayer game as guest or using a Jogatina account** [#BUG3]

Steps:
1. Open app
2. Tap 'Multiplayer' Button 
3. Select login 'later'
4. Access button 2 players as guest

**Expecte Result:**
Game is initiated.

**Found Result:**
Multiplayer screen is shown and game does not begin.

**Environment:**
Device: Moto G5S Plus - Android: 8.1.0 - Connection: WIFI

Evidence on: /docs/img/multiplayerguestbug.mp4

---

**4. Change nickname using Jotagina account** [#BUG4]

Steps:
1. Open app
2. Access Settings button
3. Access Login 
4. Access 'Login with Jogatina'
5. Fill login fields with valide user and password
6. Tap 'Play Now'
7. Tap on username button at the top of screen
8. Insert new username
9. Tap 'Verify' button
10. If user is unique, Tap on save

**Expecte Result:**
New  nickname must be shown at top of screen.

**Found Result:**
Old nickname is shown at top of screen. New nickname is shown only if user change screen and come back to multiplayer screen.

**Environment:**
Device: Moto G5S Plus - Android: 8.1.0 - Connection: WIFI

Evidence on: /docs/img/changenicknamebug.mp4


---

**5. It is possible to Sign up twice with same email and password** [#BUG5]
> **This bug is to check any inconsistency on database.** 

Steps:
  1. Open app
  2. Access Settings button
  3. Access Login or Sign in link
  4. Tap on Sign Up
  5. Fill email and password with valid values. Email must not being used before
  6. Tap on create account
  7. Close app and repeat steps until step 'Fill email and password with valid values. Email must not being used before'.
  
  Expected result:
  Error must indicate that email it's already signed up.

  Found result:
  App works as a new account was signed up. 

---

**6. It is possible to register an user that was already register informing a new password.** [#BUG6]
> **This bug is to check any inconsistency on database.**

Steps:
  1. Open app
  2. Access Settings button
  3. Access Login or Sign in link
  4. Tap on Sign Up
  5. Fill email and password with valid values. Email must correspond to a existent account and password must be a different one.
  
Expected result:
Error must indicate that email it's already signed up.

Found result:
Generic error message appears indicating that service is not acessible.

**7. There is no treatment for special characters on sing up functionallity** [#BUG7]
> **This bug is to check any inconsistency on database.**

Steps:

  1. Open app
  2. Access Settings button
  3. Access Login or Sign in link
  4. Tap on Sign Up
  5. Fill email as 'select*from' and valid password
  
Expected result:
Error must indicate that email is invalid.

Found result:
User is signed up.
