let val="epiqa"
class PatientSettingPage{

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

       await browser.pause(28000);
       await browser.waitUntil( () => 
          this.hoverMenuSettings, 
       { 
         timeout:7400, 
         timeoutMsg:"Error message not poulated"
       })
    }

    // async hideDeviceKeyboard(){
    //     if (await browser.isKeyboardShown()) {
    //         await browser.hideKeyboard();
    //      }
    // }

  blockchainval(){
   return val
  }
 
    async patientsettingsScan(blockchainval){
             
        await this.hoverMenuSettings.click();
        await setTimeout(()=>{
            console.log("inside timeout");
        },3300);
        await this.settingsBtn.click();
        await setTimeout(()=>{
            console.log("inside timeout");
        },3300);
        await this.appBlockchainNetwork.click();
        await setTimeout(()=>{
            console.log("inside timeout");
        },3300);
        await this.setupBlockChainNet.click();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2300);
      // await browser.hideKeyboard();
        //await browser.hideDeviceKeyboard('pressKey', 'Done');
        await this.setupBlockChainNet.clearValue();
        await setTimeout(()=>{
            console.log("inside timeout");
        },3300);
        await this.setupBlockChainNet.setValue(blockchainval);
        await setTimeout(()=>{
            console.log("inside timeout");
        },2300);
        //await browser.hideDeviceKeyboard('pressKey', 'Done');
        await this.saveBtnBlockChain.click();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2300);
        await this.menuBackBtn.click();
        await setTimeout(()=>{
            console.log("inside timeout");
        },3100);

    }

    async scan2DImageProcess(){

        await this.scanDataMatrix.click();
        await setTimeout(()=>{
            console.log("inside timeout");
        },5500);


    }

}

module.exports= new PatientSettingPage();