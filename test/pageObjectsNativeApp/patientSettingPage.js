const timeoutWait=require('../utils/setTimeout')
const testData=require('../testData/configTest.json')

//let val="epiqa"
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

    get menuBackBtn(){
        return $("//android.widget.Image[@text='menu-back']")
    }

    get scanDataMatrix(){
        return $("//android.widget.Button[@text='Scan Now']")
    }

    async waitLaunchURL(){

       await this.allowCamera.click();
       await timeoutWait.setTimeoutwait(60);
       await timeoutWait.waitforelement(this.hoverMenuSettings);
    }


//   blockchainval(){
//    return val
//   }
 
    async patientsettingsScan(setBlockChainValue){
        
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
        await this.setupBlockChainNet.setValue(setBlockChainValue);
        await timeoutWait.setTimeoutTime(3);
       //click on save button to save the setting
        await this.saveBtnBlockChain.click();
        await timeoutWait.setTimeoutTime(3);
        // click on back button 
        await this.menuBackBtn.click();
        await timeoutWait.setTimeoutTime(3);

    }

    async scan2DImageProcess(){

        // click on scan 2D Matrix data
        await this.scanDataMatrix.click();
        await timeoutWait.setTimeoutTime(5);


    }

}

module.exports= new PatientSettingPage();