# Desafio QA Gazeus

- [Desafio QA Gazeus](#desafio-qa-gazeus)
  - [Testes automatizados](#testes-automatizados)
    - [Stack Escolhida:](#stack-escolhida)
    - [Instalação do ambiente:](#instalação-do-ambiente)
    - [Configurações de execução.](#configurações-de-execução)
    - [Considerações sobre a construção dos testes](#considerações-sobre-a-construção-dos-testes)
    - [Comentários Gerais](#comentários-gerais)
    - [Casos de teste automatizados](#casos-de-teste-automatizados)
  - [Test Cases](#test-cases)
    - [Test Cases - Settings](#test-cases---settings)
    - [Test Cases - Game Play Offline](#test-cases---game-play-offline)
      - [Fluxos negativos](#fluxos-negativos)
    - [Test Cases - Game Play Online](#test-cases---game-play-online)
  - [Possible bugs](#possible-bugs)

## Testes automatizados

### Stack Escolhida:
  
  - [Webdriverio](https://webdriver.io/)
  - CucumberJs 
  - Appium 
  - NodeJs 

> **Considerações:**
> 1. Escolhi usar o Webdriverio porque ele permite execução simultânea de cenários enquanto [WD](https://www.npmjs.com/package/wd)(Webdriver/Selenium 2 client) não. Além disso é mais atualizado que o WD. 
> 
> 2. Trabalho atualmente com o Mocha então resolvi escrever os testes com o cucumber para utilizar algo diferente do que uso no dia a dia. 
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

> Requisitos do appium são:
info AppiumDoctor  ✔ Node version is 12.16.1
info AppiumDoctor  ✔ ANDROID_HOME is set to: C:\Users\...\AppData\Local\Android\Sdk
info AppiumDoctor  ✔ JAVA_HOME is set to: C:\Program Files (x86)\Java\jre1.8.0_251
info AppiumDoctor  ✔ adb exists at: C:\Users\...\AppData\Local\Android\Sdk\platform-tools\adb.exe 
info AppiumDoctor  ✔ android exists at: C:\Users\...\AppData\Local\Android\Sdk\tools\android.bat  
info AppiumDoctor  ✔ emulator exists at: C:\Users\...\AppData\Local\Android\Sdk\tools\emulator.exe
info AppiumDoctor  ✔ JAVA_HOME\bin is set to: C:\Program Files (x86)\Java\jre1.8.0_251\bin


2. Clone Project or download project
https://github.com/ppaulocm/appium-tranca-mobile

3. Install project and dependences
   ```js
    npm i
   ```

### Configurações de execução.
1. É necessário uma conta Jogatina e uma conta facebook para executar os testes que devem ser setadas no arquivo .....
2. É necessário que o tranca jogatina já tenha permissão de acesso aos dados do facebook.
3. Por testar em um aplicativo no device, considerei que já existe uma conta do google play configurada e também que esteja com o autologin habilitado.
   
   ![autologin](/docs/img/autologingoogle.jpg)
4. O cenário de teste considera somente o uso do Wifi. O uso de dados móveis deve estar desabilitado. Poderia ter desabilitado essa configuração em tempo de execução mas era necessário permissões adicionais para interagir com a conexão 4G.
   
### Considerações sobre a construção dos testes

> **Não achei Accessibility IDs	na aplicação, que seria o selector mais seguro e com maior chance de compartilhamento entre Android/IOS. Optei por usar o XPath + resource-id  sempre que possível. Por exemplo:**
>
>```js
>"//android.widget.Button[@resource-id='com.jogatina.tranca:id/inviteFriendsBtnFacebook']"
>```

> **Inicialmente iria escrever testes considerando a tela principal do jogo mas não consegui inspecionar nenhum elemento dessa tela. Apenas conseguir ver a view da tela por inteiro e do banner com anúncio.**
> Minhas tentativas foram:
> 1. Buscar trocar o cotexto da aplicação para WEBVIEW, sem sucesso.
> 2. Utilizar o UIAutomatorViewer.
> 3. Utilizar o debug no chrome mas para isso, a variável [setWebContentsDebuggingEnabled](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/webviews) deveria estar setada como true. Como o app usado foi de produçao, acredito que esteja setada como false.
> 4. Algumas issues do github estavam relacionadas com a configuração [setWebViewRenderProcessClient](https://developer.android.com/reference/android/webkit/WebView#setWebViewRenderProcessClient(java.util.concurrent.Executor,%20android.webkit.WebViewRenderProcessClient)). Talvez tenha relação com o resultado que encontrei no appium.
>
>
> ![inspectGame](/docs/img/inspectGame.jpg)


> **Tempo de execução dos testes**
> Apesar dos testes estarem rodando em um tempo aceitável, após a ultima assertiva, por estar executando diretamente no device, o dispositivo gera um bugreport com dados de utilização do sistema com o nome 'bugreport-sanders_nt-OPS...'. Não consegui desabilitar essa opção. Por isso, após as validações,a finalização da execução demora um tempo adicional para gerar esse report.

### Comentários Gerais
1. O link de compartilhamento está sem o https -> http://www.jogatina.com/site/share/tranca

### Casos de teste automatizados

1. Teste solicitado: "Efetuar a troca de idioma do device para verificar se as labels do jogo estão corretas na tela inicial - Home. A alteração deve ser feita de Português para Inglês."

    Nesse cenário imaginei que os testes de validação de idioma poderiam ser executados como uma suite a parte. Por isso, criei um arquivo de configuração para cada idioma,wdio.android.app-en.conf.js e wdio.android.app-pt.conf.js. Ambos executam o mesmo teste. O teste lê o valor do capability locale para determinar qual o idioma será validado. Os resources que serão validados estão no arquivo ......... Dessa forma, qualquer alteração de resource deve ser atualizada nesse arquivo sem que os testes sejam atualizados.

################ [gif dos testes] ######################


2. Acessar opção multiplayer sem conexão com a internet.
   
    Esse teste desabilita o wifi e tenta acessar a area online do jogo. Após o erro, o teste é finalizado e o wifi religado.

3. Convidar novos jogadores após logar com facebook

    Neste teste é necessário que o Tranca Jogatina tenha permissão para acessar o facebook.

4. Alterar nickname usando a conta do Jogatina (Possível BUG)

 Gostaríamos que fosse escolhido 3 (três ou mais) fluxos para desenvolver testes de interface automatizados com BDD em qualquer tela do aplicativo.



## Test Cases
Escrevi alguns casos de teste e os demais apenas coloquei a descrição. A maioria dos CTs são relativos as funcionalidades do game.

### Test Cases - Settings
1. Alterar nível de dificuldade para fácil e confirmar o nível entrando na tela, voltar para normal e depois modificar para dificil (BUG)
2. Tentar cadastrar um usuário já cadastrado (BUG)
3. Tentar alterar a senha de um usuário já cadastrado na tela de cadastro (BUG)
4. Cadastrar novo usuário com email som caracteres especiais. Ex: select*from@gmail.com (BUG)

### Test Cases - Game Play Offline

Iniciar o jogo, abandonar a partida e voltar para a mesma partida
Iniciar o jogo, abandonar a partida e iniciar um novo jogo
Reordenar as cartas por naipe e ordenação alfanumérica

Cenários passíveis de automação considerando alta probabilidade de acontecerem:
Comprar carta do monte e jogar outra carta no lixo
Comprar carta do monte e jogar a mesma carta no lixo
Comprar carta do lixo e baixar uma trinca na mesa sem a carta 2
Comprar carta do lixo e baixar uma trinca na mesa com a carta 2 
Comprar carta do lixo e baixar uma sequencia na mesa sem a carta 2
Comprar carta do lixo e baixar uma sequencia na mesa com a carta 2

Cenários com menor probabilidade de acontecer e por isso com menor prioridade de automação
Baixar 3 vermelho na mesa depois de comprar qualquer carta
Baixar 3 vermelho na mesa antes de comprar qualquer carta 
Adicionar carta 2 em uma sequencia que já tenha uma carta 2
Adicionar carta 2 em uma 'trinca' que já tenha uma carta 2

#### Fluxos negativos
Baixar cartas na mesa antes de comprar
Baixar cartas na mesa de que formam sequencia numérica de naipes diferentes
Comprar carta do monte durante jogada do adversário

### Test Cases - Game Play Online

Initiate an online match as guest (BUG)
Initiate an online match as Jogatina User (BUG)
Iniciar um jogo online logado com a conta do facebook
Iniciar um jogo online logado na conta Jogatina e não fazer nenhuma ação até que o tempo acabe



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
