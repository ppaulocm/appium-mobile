# Desafio QA Gazeus

- [Desafio QA Gazeus](#desafio-qa-gazeus)
  - [Testes automatizados](#testes-automatizados)
    - [Stack dos testes](#stack-dos-testes)
    - [Instalação do ambiente:](#instalação-do-ambiente)
    - [Configurações de execução.](#configurações-de-execução)
    - [Considerações sobre a construção dos testes](#considerações-sobre-a-construção-dos-testes)
    - [Casos de teste automatizados](#casos-de-teste-automatizados)
  - [Test Cases](#test-cases)
    - [Test Cases - Settings](#test-cases---settings)
      - [Settings - Login](#settings---login)
      - [Settings - Game Level](#settings---game-level)
    - [Test Cases - Game Play](#test-cases---game-play)
      - [Game Screen](#game-screen)
      - [Game Rules](#game-rules)
      - [Game Logic - Negative Workflow](#game-logic---negative-workflow)
    - [Multiplayer](#multiplayer)
  - [Possible bugs](#possible-bugs)

## Testes automatizados

### Stack dos testes
  
  - [Webdriverio](https://webdriver.io/)
  - CucumberJs 
  - Appium 
  - NodeJs 

> **Considerações:**
> 1. Escolhi usar o Webdriverio porque ele permite execução simultânea de cenários enquanto [WD](https://www.npmjs.com/package/wd)(Webdriver/Selenium 2 client) não. Além disso é mais atualizado que o WD. 
> 
> 2. Por ter mais experiência com o Mocha, resolvi escrever os testes com o cucumber para utilizar um novo framework.
>
> 3. Os testes foram construídos executando a aplicação diretamente no dispositivo MotoG 5S Plus - Android 8.1.0.


### Instalação do ambiente:

Requisitos:
1. NodeJS previamente instalado
2. Java
3. Download Android SDK (Baixar pelo Android Studio)
4. Appium

```js
npm install -g appium   // instalar o appium
npm install -g appium-doctor   // instalar o appium doctor 
appium-doctor   //verificar algum problema na instalação do appium
```

> Referência do ambiente de desenvolvimento
Node version is 12.16.1
- info AppiumDoctor  ✔ ANDROID_HOME is set to: C:\Users\...\AppData\Local\Android\Sdk
- info AppiumDoctor  ✔ JAVA_HOME is set to: C:\Program Files (x86)\Java\jre1.8.0_251
- info AppiumDoctor  ✔ adb exists at: C:\Users\...\AppData\Local\Android\Sdk\platform-tools\adb.exe 
- info AppiumDoctor  ✔ android exists at: C:\Users\...\AppData\Local\Android\Sdk\tools\android.bat  
- info AppiumDoctor  ✔ emulator exists at: C:\Users\...\AppData\Local\Android\Sdk\tools\emulator.exe
- info AppiumDoctor  ✔ JAVA_HOME\bin is set to: C:\Program Files (x86)\Java\jre1.8.0_251\bin


5. Clone Project or download project
https://github.com/ppaulocm/appium-tranca-mobile

6. Install project and dependences
   ```js
    npm i
   ```

### Configurações de execução.
1. É necessário uma conta Jogatina e uma conta facebook para executar os testes que devem ser setadas no arquivo tests\data\accounts.json
2. É necessário que o tranca jogatina já tenha permissão de acesso aos dados do facebook.
3. Desabilitei no  Google Play Games a opção de Login automático em jogos compatíveis para que o Login do Google Play não abra quando o jogar carregar. **DESMARCAR A OPÇÃO LOGIN AUTOMÁTICO nas configurações do Play Games .**

<p align="center">   
   <img src="/docs/img/disableAutoLogin.jpg" width="600">
   <img  src="/docs/img/autologingoogle.jpg" width="250">
</p>


4. O cenário de teste considera somente o uso do Wifi. O uso de dados móveis deve estar desabilitado. Poderia ter desabilitado essa configuração em tempo de execução mas era necessário permissões adicionais para interagir com a conexão 4G.
   
### Considerações sobre a construção dos testes

> **Não achei Accessibility IDs	na aplicação, que seria o selector mais seguro e com maior chance de compartilhamento entre Android/IOS. Optei por usar o XPath + resource-id sempre que possível. Por exemplo:**
>
>```js
>"//android.widget.Button[@resource-id='com.jogatina.tranca:id/inviteFriendsBtnFacebook']"
>```

> **Inicialmente iria escrever testes considerando a tela principal do jogo mas não consegui inspecionar nenhum elemento dessa tela. Apenas conseguir ver a view da tela por inteiro e do banner com anúncio. Minhas tentativas de resolver o problema foram:**

 1. Buscar trocar o cotexto da aplicação para WEBVIEW, sem sucesso.
 2. Utilizar o UIAutomatorViewer.
 3. Utilizar o debug no chrome mas para isso, a variável [setWebContentsDebuggingEnabled](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/webviews) deveria estar setada como true. Como o app usado foi de produçao, acredito que esteja setada como false.
 4. Algumas issues do github estavam relacionadas com a configuração [setWebViewRenderProcessClient](https://developer.android.com/reference/android/webkit/WebView#setWebViewRenderProcessClient(java.util.concurrent.Executor,%20android.webkit.WebViewRenderProcessClient)). Talvez tenha relação com o resultado que encontrei no appium.


<img src="/docs/img/inspectGame.jpg">
 

> **Tempo de execução dos testes**
> Apesar dos testes estarem rodando em um tempo aceitável, após a ultima assertiva, por estar executando diretamente no device, o dispositivo gera um bugreport com dados de utilização do sistema com o nome 'bugreport-sanders_nt-OPS...'. Não consegui desabilitar essa opção. Por isso, após as validações,a finalização da execução demora um tempo adicional para gerar esse report.


### Casos de teste automatizados

1. Teste solicitado: "Efetuar a troca de idioma do device para verificar se as labels do jogo estão corretas na tela inicial - Home. A alteração deve ser feita de Português para Inglês." (Scenario: Check main menu labels in current device language)

    Nesse cenário imaginei que os testes de validação de idioma poderiam ser executados como uma suite a parte. Por isso, criei um arquivo de configuração para cada idioma,wdio.android.app-en.conf.js e wdio.android.app-pt.conf.js. Ambos executam o mesmo teste. O teste lê o valor do capability locale para determinar qual o idioma será validado. Os resources que serão validados estão no arquivo 'tests\data\resx.json' Dessa forma, qualquer alteração de resource deve ser atualizada nesse arquivo sem que os testes sejam atualizados.
 
2. Acessar opção multiplayer sem conexão com a internet.(Scenario: Access multiplayer tab without internet connection)
   
    Esse teste desabilita o wifi e tenta acessar a area online do jogo. Após o erro, o teste é finalizado e o wifi religado.

3. Convidar novos jogadores após logar com facebook. (Scenario: Invite new players using facebook account)

    Neste teste é necessário que o Tranca Jogatina tenha permissão para acessar o facebook.

4. Alterar nickname usando a conta do Jogatina. (Scenario: Change nickname using Jogatina account) - (Possível BUG)




## Test Cases
Escrevi alguns casos de teste e os demais apenas coloquei a descrição. Sobre a suíte 'Game Rules', imaginao duas possibilidades para automatizar os testes com focos diferentes. Acredito que vocês já possam ter elas implementadas.

1. Mockar o cenário inicial da partida com as cartas específica para testar os Casos de Teste da suite 'Game Rules'. Basicamente é carregar uma tela com Jogo já iniciado e apenas validar o resultado de cada ação. 

Prós: 
- Testes que cobririam as regras de negócio seriam rápidos
- A solução poderia ser utilizada em vários jogos diferentes
- Maior aproximação com a equipe de desenvolvimento

Contra:
- Pode ter uma alta complexidade 

2. Implementar o teste de UI com as regras de negócio para que fique jogando continuadamente fazendo teste exploratórios
Prós
- Testes exploratórios contínuos

Contras
- Não é escalável pois cada jogo teria que funções específicas para atuar como um robo independente.
- Demora para achar um bug após algum fix ou release com nova funcionalidade
  

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

2. Register an user that was already register before (BUG)
3. Try to register an user that was already register informing a new password (BUG)
4. Register an new user using an email with special characters. Ex:select*from@gmail.com (BUG)


#### Settings - Game Level 
1. **Change Difficulty level**

Description: This test case validates app behavior when player change game difficulty level in Portuguese. (Bug)
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

### Test Cases - Game Play

#### Game Screen 

1. **Start new game, leave game and back to the same game**

Description: This test case validates app behavior when player abandon the game and back to the same game
Pre-Condition: Application cache must be cleaned.
Steps:
   1. Access the app Tranca Jogatina
   2. Access 'Play Now!' button
   3. Tap on '2 Players'
      1. Game screen is shown
   4. User must save cards Ordering and the card that is on the 'Discard'
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
   
2. Start new game, leave game and start a new game

3. Reordering cards by suit and alphanumeric ordering


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

1. Initiate an online match as guest (BUG)
2. Initiate an online match as Jogatina User (BUG)
3. Initiate an online game logged with facebook account
4. Initiate an online game using Jogatina account and does not draw any card until player time ending


## Possible bugs
Apesar de não conhecer as regras de negócio do aplicativo, adicionei alguns cenários que possuem bug ou limitações.

**1. Não é possível setar o nível de dificuldade do jogo para fácil quando o sistema está em português**

Steps:
1. Abrir a aplicação
2. Acessar o menu Settings
3. Acessar o item 'Nivel de Dificuldade'
4. Selecionar a opção fácil
5. Acessar novamente o item 'Nivel de Dificuldade'

**Expecte Result:**
A opção fácil deveria estar selecionada

**Found Result:**
A opção difícil está selecionada

**Environment:**
Device: Moto G5S Plus
Android: 8.1.0
Connection: WIFI

![bug#1](/docs/img/levelbug.mp4)

---

**2. Exibição de regra apresenta problema de exibição**
Steps:
1. Abrir a aplicação
2. Acessar 'Jogar Agora!'
3. Acessar '2 Jogadores'
4. Acessar o Menu dentro do jogo
5. Acessar o ícone de interrogação no topo da tela

**Expecte Result:**
Regras devem ser exibidas com fundo uniforme e sem que o texto esteja sobrescrito, possibilitando a leitura do mesmo.

**Found Result:**
Há diferença da cor de background ao rolar a tela e o textos estão sobrescritos.

Device: Moto G5S Plus
Android: 8.1.0
Connection: WIFI

![bug#2](/docs/img/rule.mp4)

---

**3. [Intermitente] - Não é possível fazer login online usando a conta Jogatina ou como visitante**
Steps:
1. Abrir a aplicação
2. Access button 'MULTIPLAYER' 
3. Select login 'later'
4. Access button 2 players as guest

**Expecte Result:**
Game is initiated.

**Found Result:**
Multiplayer screen is shown and game does not begin.

Device: Moto G5S Plus
Android: 8.1.0
Connection: WIFI

![bug#3](/docs/img/multiplayerguestbug.mp4)

---

**4. Change nickname using Jotagina account**
Pre-requiremt: No user must be logged

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

Device: Moto G5S Plus
Android: 8.1.0
Connection: WIFI

![bug#4](/docs/img/changenicknamebug.mp4)

---

**5. It is possible to Sign in twice with same email and password**
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

**6. It is possible to Sign in twice with same email and password**
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
**This bug is to check any inconsistency on database.**

**7. There is no treatment for special characters on sing up functionallity**
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
