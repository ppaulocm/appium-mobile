# Desafio QA Gazeus

- [Desafio QA Gazeus](#desafio-qa-gazeus)
  - [Testes automatizados](#testes-automatizados)
    - [Stack dos testes](#stack-dos-testes)
    - [Instalação do ambiente](#instalação-do-ambiente)
    - [Construção dos testes](#construção-dos-testes)
    - [Configurações de execução](#configurações-de-execução)
    - [Casos de teste automatizados](#casos-de-teste-automatizados)
    - [Executando os testes](#executando-os-testes)
    - [Reports](#reports)
  - [Propostas de automação](#propostas-de-automação)
    
    

## Testes automatizados

### Stack dos testes
  
  - [Webdriverio](https://webdriver.io/)
  - CucumberJs 
  - Appium 
  - NodeJs 

**Considerações:**
> 1. Escolhi usar o Webdriverio porque ele permite execução simultânea de cenários enquanto [WD](https://www.npmjs.com/package/wd)(Webdriver/Selenium 2 client) não. Além disso é mais atualizado que o WD. 
> 
> 2. Por ter mais experiência com o Mocha, resolvi escrever os testes com o cucumber para utilizar um novo framework.
>
> 3. Os testes foram construídos executando a aplicação diretamente no dispositivo MotoG 5S Plus - Android 8.1.0.


### Instalação do ambiente

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

Referência do ambiente de desenvolvimento:
- Node version is 12.16.1
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
   
7. Caso os testes sejam executados no dispositivo, é necessário habilitar o USB Debugging nas configurações de desenvolvedor. 

### Construção dos testes

> **Não achei Accessibility IDs	na aplicação, que seria o selector mais seguro para ser utilizado. No XCUITest é o elemento accessibility-id e no Android é o elemento content-desc. Optei por usar o XPath + resource-id sempre que possível. Por exemplo:**
>
>```js
>"//android.widget.Button[@resource-id='com.jogatina.tranca:id/inviteFriendsBtnFacebook']"
>```

> **Inicialmente iria escrever testes considerando a tela principal do jogo mas não consegui inspecionar nenhum elemento dessa tela. Apenas conseguir acessar a view da tela por inteiro e do banner com anúncio. Minhas tentativas de resolver o problema foram:**

 1. Tentar trocar o cotexto da aplicação para WEBVIEW. Só consegui acessar o contexto NATIVE_APP, talvez o motivo seja o item 3.
 2. Utilizar o UIAutomatorViewer.
 3. Utilizar o debug no chrome mas para isso, a variável [setWebContentsDebuggingEnabled](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/webviews) deveria estar setada como true. Como o app usado foi de produçao, acredito que esteja setada como false.
 4. Algumas issues do github estavam relacionadas com a configuração [setWebViewRenderProcessClient](https://developer.android.com/reference/android/webkit/WebView#setWebViewRenderProcessClient(java.util.concurrent.Executor,%20android.webkit.WebViewRenderProcessClient)). Talvez tenha relação com o resultado que encontrei no appium inspector.

<p align="center">   
    <img src="/docs/img/inspectGame.jpg" width="600">
</p>


### Configurações de execução
1. É necessário uma conta Jogatina e uma conta facebook para executar os testes que devem ser setadas no arquivo tests\data\accounts.json
2. É necessário que o tranca jogatina já tenha permissão de acesso aos dados do facebook.
3. Desabilitar no  Google Play Games a opção de 'Login automático em jogos compatíveis' para que o Login do Google Play não abra quando o jogar carregar. **DESMARCAR A OPÇÃO LOGIN AUTOMÁTICO nas configurações do Play Games .**

<p align="center">   
   <img src="/docs/img/disableAutoLogin.jpg" width="600">
   <img  src="/docs/img/autologingoogle.jpg" width="250">
</p>


4. O cenário de teste considera somente o uso do Wifi. O uso de dados móveis deve estar desabilitado. Essa configuração poderia ter sido desabilitada durante a execução mas era necessário permissões adicionais para interagir com a conexão 4G ou com o modo avião.


### Casos de teste automatizados

1. Teste solicitado: "Efetuar a troca de idioma do device para verificar se as labels do jogo estão corretas na tela inicial - Home. A alteração deve ser feita de Português para Inglês." 

> Scenario: Check main menu labels in current device language
>
> Nesse cenário imaginei que os testes de validação de idioma poderiam ser executados como uma suite a parte. Por isso, criei um >arquivo de configuração para cada idioma, wdio.android.app-en.conf.js e wdio.android.app-pt.conf.js. Ambos executam o mesmo teste. O >teste lê o valor do capability locale para determinar qual o idioma será validado. Os resources que serão validados estão no arquivo >'tests\data\resx.json' Dessa forma, qualquer alteração de resource deve ser atualizada nesse arquivo sem que os testes sejam >atualizados.
 
2. Acessar opção multiplayer sem conexão com a internet.

> Scenario: Access multiplayer tab without internet connection
>
> Esse teste desabilita o wifi e tenta acessar a area online do jogo. Após o erro, o teste é finalizado e o wifi religado.

3. Convidar novos jogadores após logar com facebook.

> Scenario: Invite new players using facebook account
>
> Neste teste é necessário que o Tranca Jogatina tenha permissão para acessar o facebook.

4. Alterar nickname usando a conta do Jogatina. 

> Scenario: Change nickname using Jogatina account - (Possível BUG)
>
> Esse cenário loga com a conta do Jogatina para depois trocar o nickname do jogador. 


### Executando os testes
Os testes podem ser executados ao mesmo tempo ou individualmente com os seguintes comandos:

```js
yarn android-en.app  //todos os testes com idioma do dispositivo em inglês
yarn android-pt.app  //todos os testes com idioma do dispositivo em português

// Suites específicas - basta variar o idioma alterando android-en e android-pt
yarn android-en.app --suite language
yarn android-en.app --suite connection
yarn android-en.app --suite invite
yarn android-en.app --suite nickname
```

**Tempo de execução dos testes**
> Apesar dos testes estarem rodando em um tempo aceitável, após a ultima assertiva, por estar executando diretamente no device, o dispositivo gera um bugreport com dados de utilização do sistema com o nome 'bugreport-sanders_nt-OPS...'. Não consegui desabilitar essa opção. Por isso, após as validações, a finalização da execução demora um tempo adicional para gerar esse report.

### Reports

```js
yarn report:generate //gera o report
yarn report:open //abre o report
```

## Propostas de automação

> Sobre a suíte 'Game Rules', imagino 3 possibilidades para automatizar os testes com focos diferentes. Acredito que vocês já possam ter elas implementadas.
> 
>1. Mockar o cenário inicial da partida com as cartas específica para testar os Casos de Teste da suite 'Game Rules'. Basicamente é carregar uma tela com Jogo já iniciado e apenas validar o resultado de cada ação. 
>
>       Prós: 
>       - Testes que cobririam as regras de negócio seriam rápidos
>       - A solução poderia ser utilizada em vários jogos diferentes
>       - Maior aproximação com a equipe de desenvolvimento
>
>      Contras:
>       - Pode ter uma alta complexidade 
>
>2. Implementar o teste de UI com as regras de negócio para que fique jogando continuadamente fazendo teste exploratórios
>
>       Prós
>       - Testes exploratórios contínuos
>
>       Contras
>       - Não é escalável pois cada jogo teria que funções específicas para atuar como um robô independente.
>       - Demora para achar um bug após algum fix ou release com nova funcionalidade
>
>3. Validar as regras de negócio do jogo utilizando APIs. 
>
>       Prós
>       - Rapidez na execução
>       - Controle total do cenário
>       - Escalável
>
>       Contras
>       - X
>
  
> **Essas opções são complementares e tem diferentes finalidades que conhecendo o sistema seriam aprimoradas.**

