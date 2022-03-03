
const LoginPage = require('../pageobjects/loginPage');
const accessAccount= require('../pageobjects/accessAcountPage');
const products= require('../pageobjects/productsPage');
const batchPage= require('../pageobjects/batchesPage');
const digits= require('../pageobjects/digitCalPage');
const path= require('path');
const allureReporter = require('@wdio/allure-reporter').default
const fs=require('fs');
const bwipjs=require('bwip-js');
let temp=""
describe('ePI Automation Testing', () => {
    
    xit('should open the digitcalculator', async() => {
       
        await LoginPage.opensuburl();
        await browser.pause(4000)
        await browser.maximizeWindow();
        await browser.pause(5000)
        await digits.clickCookie();
        await browser.pause(4000)
        const random= Math.floor(1000000000000 + Math.random() * 9000000000000)
        await digits.digitenter(random);
        await browser.pause(4000)
        await digits.caldigit();
        //await digits.copydigit();
        await browser.pause(4000)
        await digits.numbercopy();
        await digits.codeCopy();
        await digits.concat1();
        temp= await digits.concat1()
        console.log("temp is "+temp)
        
    });



    it('should open ePI landing page', async () => {

        allureReporter.addFeature('Landing Page');
        allureReporter.addSeverity('Critical');
        await LoginPage.open();
        await browser.pause(4000)
        await browser.maximizeWindow();

    });

    it('should open Enterprise Wallet', async() => {
        allureReporter.addFeature('Enterprise Wallet Login');
        await LoginPage.openEnterpriseWallet();
        await browser.pause(4000);
        
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        
        
    });
    it('should open Access Account and enter Details', async() => {
        //allureReporter.addFeature('Access Account')
         await accessAccount.clickAccessAccount();
         await browser.pause(4000)
         await accessAccount.userNameClrEnt();
         await browser.pause(2000)
         await accessAccount.userNameClrEnt("kpepiwdio");
         await browser.pause(2000)
         await accessAccount.Enterbutton();
         await browser.pause(10000)
    });

    xit('should open the Products page and add product details', async() => {
       
        const frame = await browser.$('iframe[frameborder=\'0\']');
        await browser.switchToFrame(frame);
        await browser.pause(5000)
        await products.clickProduct();
        await browser.pause(6000);
        await products.addProduct(); 
        await browser.pause(4000);
        await products.gtinClrEnt();
        await browser.pause(2000)
        await products.gtinClrEnt(temp);
        await browser.pause(2000)
        await products.brandName("Dolo 650"); 
        await browser.pause(2000)
        await products.productDescription("Dolo-650 Tablet 15's contains 'Paracetamol' which is a mild analgesic and fever reducer"); 
        await browser.pause(4000)
       const filePath = path.join(__dirname, '/leafletImages/entresto.jpg');
      //  const filepath= "C:/Users/naveeng/epi-test-automation/test/leafletImages/entresto.jpg"
        console.log(filePath);
        await browser.$("//input[@type=\'file\']").addValue(filePath)
       //await browser.$(".fa fa-pencil-square-o editable-icon").addValue(filepath);
        await browser.pause(5000);
        await products.adverseEvents(); 
        await browser.pause(4000);
        await products.antiCounterfeiting(); 
        await browser.pause(4000);
        await products.batchRecalled(); 
        await browser.pause(4000);
        await products.batchExpired(); 
        await browser.pause(4000);
        await products.patientInfo(); 
        await browser.pause(4000)
       // await products.Cancel(); 
        await products.Save();
        await browser.pause(4000)
     });


/// batches page
    xit('should Create Batches Page', async() => {
        
        const frame = await browser.$("//iframe[@class='hydrated']");
        await browser.switchToFrame(frame);
        await batchPage.Batch(); 
        await browser.pause(4000);
        await batchPage.addBatch(); 
        await browser.pause(2000);
        await batchPage.siteName("Dolo-650 Tablet 15's"); 
        await browser.pause(2000);
                     
        const selectBox = await browser.$('//psk-select[@class=\'default-select hydrated\']//select[@class=\'form-control\']');
        //await browser.pause(2000)
        // await selectBox.selectByAttribute('value', temp);
        // await browser.pause(3000); 
        await selectBox.selectByAttribute('value', '44044691809461');  
        await browser.pause(4000);
        //date
       // await browser.$('input[placeholder=\'dd/mm/yyyy\']').addvalue('02/11/2023');
       let expiryDate = "2029-05-28"
       await browser.execute((date) => {
           (function () {
               let event = new Event('change');
               let datePicker = document.querySelector("input[placeholder='dd/mm/yyyy']")
               datePicker.value = date;
               datePicker.dispatchEvent(event);
           })();
       }, expiryDate);
        //enable dateselection
        await browser.$("//label[normalize-space()='Enable day selection']").isEnabled();
        await browser.pause(1000);
        //video source
        await browser.$("//textarea[@placeholder='Add video source']").
        setValue("https://cdnapisec.kaltura.com/html5/html5lib/v2.92/mwEmbedFrame."+
       " php/p/2076321/uiconf_id/46847003/entry_id/1_cuq6u28l?wid=_2076321&iframeembed=true"+
       "&playerId=kaltura_player&entry_id=1_cuq6u28l&flashvars%5bstreamerType%5d=auto&amp;"+
       "flashvars%5blocalizationCode%5d=en&amp;flashvars%5bleadWithHTML5%5d=true&amp;"+
       "flashvars%5bsideBarContainer.plugin%5d=true&amp;flashvars%5bsideBarContainer."+
       "position%5d=left&amp;flashvars%5bsideBarContainer.clickToClose%5d=true&amp;"+
       "flashvars%5bchapters.plugin%5d=true&amp;flashvars%5bchapters.layout%5d=vertical&amp;"+
       "flashvars%5bchapters.thumbnailRotator%5d=false&amp;flashvars%5bstreamSelector.plugin%5d=true&"+
       "amp;flashvars%5bEmbedPlayer.SpinnerTarget%5d=videoHolder&amp;flashvars%5bdualScreen.plugin%5d=true&"+
       "amp;flashvars%5bhotspots.plugin%5d=1&amp;flashvars%5bKaltura.addCrossoriginToIframe%5d=true&amp;"+
       "&wid=1_iueede1t")
        await browser.pause(1000);
        //enable incorrect expiration date verification
        await browser.$("//label[normalize-space()='Enable Incorrect Expiration Date Verification']").isEnabled();
        await browser.pause(1000);
        //expiration date verification       
        await browser.$("//label[normalize-space()='Enable Expired Expiration Date Verification']").isEnabled();
    // enable serial number verification
        await browser.pause(1000);
        await browser.$("//label[normalize-space()='Enable Serial Number Verification']").isEnabled();
        await browser.pause(1000);
        // manage serial numbers dropdown
        await browser.$('//psk-select[@class=\'hydrated\']//select[@class=\'form-control\']').addValue('update-valid-serial')

        //const manageserialdropdown=await browser.$("//psk-select[@class='hydrated']//select[@class='form-control']").click()
        await browser.pause(1000);
        //await manageserialdropdown.click()
        //await manageserialdropdown.selectByAttribute('value', 'update-valid-serial');
        await browser.$('//textarea[@value=\'@actionModalModel.serialNumbers\']').setValue("55,44,66");
       
        await browser.pause(4000);
        await browser.$("//button[normalize-space()='Accept']").click()
        // await browser.$("//psk-button[@class='marketplace-manager-button hydrated']//button[@class='btn btn-primary'][normalize-space()='Cancel']").click()
        // await browser.pause(3000);
        // //batch msg
        await browser.$("//textarea[@placeholder='This text will be displayed to user after Barcode is scanned']").setValue("Sample")
        await browser.pause(2000);
        //add epi leaflet
        await browser.$("//button[normalize-space()='+ Add ePI']").click()
        await browser.pause(2000);
        //video source
        await browser.$("//textarea[@value='@modalData.product.videoSource']").setValue("https://cdnapisec.kaltura.com/html5/html5lib/v2.92/mwEmbedFrame.php/p/2076321/uiconf_id/46847003/entry_id/1_cuq6u28l?wid=_2076321&iframeembed=true&playerId=kaltura_player&entry_id=1_cuq6u28l&flashvars%5bstreamerType%5d=auto&amp;flashvars%5blocalizationCode%5d=en&amp;flashvars%5bleadWithHTML5%5d=true&amp;flashvars%5bsideBarContainer.plugin%5d=true&amp;flashvars%5bsideBarContainer.position%5d=left&amp;flashvars%5bsideBarContainer.clickToClose%5d=true&amp;flashvars%5bchapters.plugin%5d=true&amp;flashvars%5bchapters.layout%5d=vertical&amp;flashvars%5bchapters.thumbnailRotator%5d=false&amp;flashvars%5bstreamSelector.plugin%5d=true&amp;flashvars%5bEmbedPlayer.SpinnerTarget%5d=videoHolder&amp;flashvars%5bdualScreen.plugin%5d=true&amp;flashvars%5bhotspots.plugin%5d=1&amp;flashvars%5bKaltura.addCrossoriginToIframe%5d=true&amp;&wid=1_iueede1t")
        await browser.pause(2000);

        // upload leaflet folder
        await browser.$('//input[@type=\'file\']').addValue(path.join(__dirname, '/src/Entresto'));
        await browser.pause(4000);
        
        await browser.$("//button[normalize-space()='Accept']").scrollIntoView()
        await browser.$("//button[normalize-space()='Accept']").click()
        await browser.pause(10000);
        await browser.$("//psk-button[@data-tag=\'add-batch\']").click()
        await browser.pause(4000);
    });

    xit('should generate barcode', async() => {
        const frame = await browser.$("//iframe[@class='hydrated']");
        await browser.switchToFrame(frame);
        await batchPage.Batch(); 
        await browser.pause(4000);
        const gtinNumber=await browser.$("//div[normalize-space()='44044691809461']").getText()
        const expiryDate=await browser.$("div:nth-child(11)").getText()
        const expdate=await expiryDate.replace('','')
        const expdate1=await expdate.replace('', '')
        const serialNum="345456";
        const batchNO= await browser.$("//div[normalize-space()='IG9175']").getText()
        const barcode='(01)'+gtinNumber+'(17)'+expdate+'(10)'+batchNO+'(21)'+serialNum
        console.log(barcode)
      //  await browser.pause(2000)
      //  await browser.url('https://barcode.tec-it.com/barcode.ashx?data='+barcode+'&code=DataMatrix&dmsize=Default')
      //  await browser.pause(10000);
        bwipjs.toBuffer({
          
            bcid:   'gs1datamatrix',   
            text:    barcode,        // Text to encode
            backgroundcolor: '#ffffff;',
            padding: 5
        }, function (err, buff) {
            if (err) {
                console.log("error")
            } else {
                fs.writeFileSync('/Users/naveeng/AppData/Local/Android/Sdk/emulator/resources/custom.png', buff)
                console.log("image generated")
            }
        });        
       
     //   await browser.execute("document.body.style.zoom='400%'");
      //  await browser.saveScreenshot('/Users/naveeng/AppData/Local/Android/Sdk/emulator/resources/custom.png')
        await browser.deleteSession()
        
    });

});


