This repository contains scripts to test native Android ePI mobile app. This repo is dependent on https://github.com/PharmaLedger-IMI/epi-test-automation.

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


1) Appium Server - Install Appium from https://appium.io/ select appium installation file.

2) Appium Inspector- Install Appium Inspector from releases section from github repository https://github.com/appium/appium-inspector/releases website and run installation file.

3) Android Studio - After Installation SDK Manager Path should be set to Andoird sdk from system and necesary sdk platform and sdk tools should be selected and installed in the system.

4) Install Node.js - Download node.js from https://nodejs.org/en/ Set the Node.js path in environment variables.

5) Set Environment Variable path for Android -- set Android Home Path till sdk located in system and set the tools and platform tools directory in path varaible.


### Step 3: Setup config and static data

Edit epi-mobileapp-test-automation > test > testdata > config.json file to do following

1) Setup the blockchain network value in patients settings wallet under ```setBlockChainNetwork``` property
2) Remaining fields are related to epiphany messages that is shown in mobile app during various scenarios. Change it according to expected values
 

### Step 4: wdio.conf.native.app setup 

Follow the steps to add in wdio.conf.native.app file:

1) Set the capabilities settings required for Appium.
2) Set the specs files to execute all specs files in serial mode.
3) Set the services and allure reporter dependencies for Appium.
4) Set the Mochaopts timeout and Connection retry timeout as required to execute both web based and mobile native application 
