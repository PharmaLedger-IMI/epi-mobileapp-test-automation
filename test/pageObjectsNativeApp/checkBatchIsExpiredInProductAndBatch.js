const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect
const timeout=require('../utils/setTimeout')
const moment = require('moment')

const expiryDatePattern = /(?<=Expiry:)(.*)(?=Serial)/g
const serialNumberPattern = /(?<=Serial number:)(.*)(?=Product)/g
const gtinPattern = /(?<=Product code:)(.*)(?=Batch)/g
const batchNumberPattern = /(?<=Batch number:).*/g


class CheckBatchIsExpiredInProductAndBatch{

    get incorrectTxtMsg(){
        return $("(//android.app.Dialog/descendant::android.view.View)[5]/child::android.widget.TextView")
    }

    get closeBtnMsg(){
        return $("//android.widget.Button[@text='Close']")
    }

    get incorrectTextBatch(){
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.widget.TextView)[2]")
    }

    get incorrectBatchLearnMore(){
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.widget.TextView)[3]")
    }

    get incorrectPopUpMsg(){
        return $("(//android.app.Dialog/descendant::android.view.View[5]/child::android.widget.TextView)")
    }

    get closeincorrectPopUpMsg(){
        return $("(//android.app.Dialog/descendant::android.view.View)[3]/child::android.widget.Button")
    }

    get productInfo(){
        return $("(//android.view.View[@resource-id='leaflet-header']/descendant::android.widget.TextView)[1]")
    }
    get productDescription(){
        return $("(//android.view.View[@resource-id='leaflet-header']/descendant::android.widget.TextView)[2]");
    }

    get leafletVerifiedShiledBtn(){
        return $("(//android.view.View[@resource-id='leaflet-header']/descendant::android.widget.Image)[1]")
    }

    get batchInfo(){
        return $("(//android.app.Dialog/descendant::android.view.View/child::android.widget.TextView)[1]")
    }

    get productLeafletInfoDetails(){
        return $("(//android.app.Dialog/descendant::android.view.View)[5]/child::android.view.View")
    }

    get leafletType() {
        return $("(//android.view.View[@resource-id='leaflet-header']/descendant::android.view.View)[3]/child::android.view.View[@resource-id='ion-sel-1']")
    }

    get leafletTypeEpi(){
        return $("(//android.app.Dialog[@resource-id='ion-overlay-1']/descendant::android.view.View)[1]/child::android.widget.Button[2]")
    }

    get leafletProdDescriptionType(){
        return $("(//android.view.View[@resource-id='leaflet-content']/descendant::android.view.View)[2]/child::android.widget.TextView[2]")
    }

    async waitTimeout() {
        await timeout.setTimeoutWait(38);
      //  await timeout.waitForElement(this.smpcDocType);

    }

 
    async checkBatchIsExpiredInProductAndBatchFetch(){

        let deviceScreenDimensions = await driver.getWindowRect();
    
        await driver.touchPerform([
            {
            action : 'tap',
            options: {
            x: Math.floor(deviceScreenDimensions.width * 0.49),
            y: Math.floor(deviceScreenDimensions.height * 0.49)
            }
        }
        ]);

        await timeout.setTimeoutWait(8);

        const incorrectMsg=await this.incorrectTxtMsg.getText();
        console.log(incorrectMsg);
        await timeoutWait.setTimeoutTime(2);
       // close button click
        await this.closeBtnMsg.click();
        await timeoutWait.setTimeoutTime(3);
        await this.incorrectTextBatch.getText();
        await timeoutWait.setTimeoutTime(3);
        // product info message
        await this.incorrectBatchLearnMore.click();
        await timeoutWait.setTimeoutTime(3);
        await this.incorrectPopUpMsg.getText();
        await timeoutWait.setTimeoutTime(3);
        await this.closeincorrectPopUpMsg.click();
        await timeoutWait.setTimeoutTime(3);
        await this.productInfo.getText();
       // expect(this.productInfo.getText()).to.not.equal(null);
        await timeout.setTimeoutTime(3);
        //get text of product information description
        await this.productDescription.getText();
        await timeout.setTimeoutTime(3);
        //click on leaflet Shieled Button
        await this.leafletVerifiedShiledBtn.click();
        await timeout.setTimeoutTime(3);
        // get batch info text
        await this.batchInfo.getText();
        await timeout.setTimeoutTime(3);
        // get leaflet product details information
        await this.productLeafletInfoDetails.getText();
        await timeout.setTimeoutTime(3);
        

        const leafletInfoDetailsFetch = await this.productLeafletInfoDetails.getText();
        console.log("Prod Info Details of Leaflet is:"+" "+leafletInfoDetailsFetch)
        const leafletInfoFetch = leafletInfoDetailsFetch.replace(':',"=");
        console.log("Batch Info Details of Leaflet is: "+ leafletInfoFetch);

         // log output for expiry date, serial number, gtin number and batch Number pattern
         console.log(leafletInfoDetailsFetch.match(expiryDatePattern)[0]);
         console.log(leafletInfoDetailsFetch.match(serialNumberPattern)[0]);
         console.log(leafletInfoDetailsFetch.match(gtinPattern)[0]);
         console.log(leafletInfoDetailsFetch.match(batchNumberPattern)[0]);
 
         await timeout.setTimeoutTime(3);

         const datebefore=leafletInfoDetailsFetch.match(expiryDatePattern)[0];
         const dateafter=moment(datebefore, "DD-MMM-YYYY").format("YYMMDD")
         console.log(dateafter);

         // chai assertions on expiry date, serial number, gtin number and batch Number pattern
         expect(leafletInfoDetailsFetch.match(gtinPattern)[0]).to.equal(testData.prodCode);
         expect(leafletInfoDetailsFetch.match(batchNumberPattern)[0]).to.equal(testData.batchValue);
         expect(leafletInfoDetailsFetch.match(serialNumberPattern)[0]).to.equal(testData.batchSerialNumber);
         expect(dateafter).to.equal(testData.expiry);

         await this.closeLeafletBtn.click();
         await timeout.setTimeoutTime(3);
 
         await this.leafletType.click();
         await timeout.setTimeoutWait(3);
 
         await this.leafletTypeEpi.click();
         await timeout.setTimeoutWait(4);
 
         let deviceScreenDimensions2 = await driver.getWindowRect();
         await driver.touchPerform([
             {
             Element : this.leafletProdLevelDescType,
             action : 'tap',
             options: {
             x: Math.floor(deviceScreenDimensions2.width * 0.49),
             y: Math.floor(deviceScreenDimensions2.height * 0.60)
             }
         }
         ]);
 
         const prodLeafletDescription = await this.leafletProdLevelDescType.getText();
         console.log(prodLeafletDescription);
           
    }
        
}

module.exports=new CheckBatchIsExpiredInProductAndBatch();