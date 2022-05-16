### Step 1: Clone the workspace

```sh
$ git clone https://github.com/PharmaLedger-IMI
epi-mobile-test-automation.git
```

After the repository was cloned, you must install all the dependencies.

```sh
$ cd epi-mobile-test-automation

$ npm install
```

### Step 2: Appium Setup and IDE Setup

```prerequisite for Appium setup steps

1) Appium Server - Install Appium from https://appium.io/ select appium installation file.

2) Appium Inspector- Install Appium Inspector from releases section from github repository https://github.com/appium/appium-inspector/releases website and run installation file.

3) Android Studio - After Installation SDK Manager Path should be set to Andoird sdk from system and necesary sdk platform and sdk tools should be selected and installed in the system.

4) Install Node.js - Download node.js from https://nodejs.org/en/ Set the Node.js path in environment variables.

5) Set Environment Variable path for Android -- set Android Home Path till sdk located in system and set the tools and platform tools directory in path varaible.

````Any IDE Setup can be choosen for scripting so all steps are configured with epi-test-automation web based application please follow steps in README.md file project link as https://github.com/PharmaLedger-IMI/epi-test-automation.git 


### Step 3: config file setup

Config file can be edited according to your Requirement as follows:

1)setup the blockchain value in patients settings wallet.
2)setup all the required fields that can be edited according to requirement of the project.
 

### Step 4: wdio.conf.native.app setup 

Follow the steps to add in wdio.conf.native.app file:

1) set the Capabilities settings required for Appium.
2) set the specs files to execute all specs files in serial mode.
3) set the services and allure reporter dependencies for Appium.
4) set the Mochaopts timeout and Connection retry timeout as required to execute both web based and mobile native application 
