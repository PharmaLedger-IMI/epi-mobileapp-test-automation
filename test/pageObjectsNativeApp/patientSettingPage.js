const timeoutWait = require('../utils/setTimeout')
const configData=require('../testdata/config.json');
const { AppiumDriver } = require('appium/build/lib/appium');
class PatientSettingPage{

    get allowCamera(){
        return $("id=com.android.permissioncontroller:id/permission_allow_button");
    }

    get hoverMenuSettings(){
        return $("//android.widget.Image[@text='menu-light']")
    }

    get settingsBtn(){
        return $("//android.widget.Button[@text='Settings']")
    }

    get appBlockchainNetwork(){
        return $("//android.widget.Button[@text='Application Blockchain network Setup Network']")
    }

    get setupBlockChainNet(){
        return $("(//android.widget.EditText)[1]")
    }

    get saveBtnBlockChain(){
        return $("//android.widget.Button[@text='SAVE']")
    }

    get clickRefreshTimePeriod(){
        return $("//android.widget.Button[@text='Setup refresh period Application refresh period for status update']")
    }

    get setRefreshTimePeriod(){
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.view.View/child::android.widget.EditText)[1]")
    }

    get saveRefreshTimePeriod(){
        return $("//android.widget.Button[@text='SAVE']")
    }

    get menuBackBtn(){
        return $("//android.widget.Image[@text='menu-back']")
    }

    get scanDataMatrix(){
        return $("//android.widget.Button[@text='Scan Now']")
    }

    async waitLaunchURL(){

        await this.allowCamera.click();
        console.log("Clicked on allow camera")
        await timeoutWait.setTimeoutWait(55);
        console.log("wait timeout")
        await timeoutWait.waitForElement(this.hoverMenuSettings);
    }
 
    async patientsettingsScan(){
        
        // console.log("waiting  patientsettingsScan")
        // await browser.pause(80000);
        // hover over menu settings 
        await this.hoverMenuSettings.click();
        await timeoutWait.setTimeoutTime(3);
        // click on setting button 
        await this.settingsBtn.click();
        await timeoutWait.setTimeoutTime(3);
        // click on the block chain Network
        await this.appBlockchainNetwork.click();
        await timeoutWait.setTimeoutTime(3);
        // click on block chain value text
        await this.setupBlockChainNet.click();
        await timeoutWait.setTimeoutTime(3);
        await this.setupBlockChainNet.clearValue();
        await timeoutWait.setTimeoutTime(3);
        // set up the value epiqa for block chain 
        await this.setupBlockChainNet.setValue(configData.setBlockChainNetwork);
        await timeoutWait.setTimeoutTime(3);
       //click on save button to save the setting
        await this.saveBtnBlockChain.click();
        await timeoutWait.setTimeoutTime(3);

        // click on back button 
        await this.menuBackBtn.click();
        await timeoutWait.setTimeoutTime(3);


        // set refresh time period
        
       // await this.browser.execute('mobile: scroll', {direction: 'down'});
    //    await browser.touchAction({
    //     action: 'tap', x:30, y:80, element: this.clickRefreshTimePeriod
    //    })

        // await browser.touchAction(['press',{ action: 'moveTo', x:0, y:200, element: this.clickRefreshTimePeriod },'release']);
        // await timeoutWait.setTimeoutTime(3);
        // await this.clickRefreshTimePeriod.click();
        // await timeoutWait.setTimeoutTime(3);
        // await this.setRefreshTimePeriod.click();
        // await timeoutWait.setTimeoutTime(3);
        // await this.setRefreshTimePeriod.clearValue();
        // await timeoutWait.setTimeoutTime(3);
        // await this.setRefreshTimePeriod.setValue(configData.setRefreshTimePeriod);
        // await timeoutWait.setTimeoutTime(3);
        // await this.saveRefreshTimePeriod.click();
        // await timeoutWait.setTimeoutTime(3);

    }

    async scan2DImageProcess(){

        // click on scan 2D Matrix data
        await this.scanDataMatrix.click();
        await timeoutWait.setTimeoutTime(5);


    }

}

module.exports= new PatientSettingPage();