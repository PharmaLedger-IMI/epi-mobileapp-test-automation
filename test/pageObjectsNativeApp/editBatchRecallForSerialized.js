const LeafletFetchData = require('../utils/utilitiesReuseFunctions')
const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect
const timeoutWait=require('../utils/setTimeout')

const expiryDatePattern = /(?<=Expiry:)(.*)(?=Serial)/g
const serialNumberPattern = /(?<=Serial number:)(.*)(?=Product)/g
const gtinPattern = /(?<=Product code:)(.*)(?=Batch)/g
const batchNumberPattern = /(?<=Batch number:).*/g


class EditBatchRecallForSerialzed{

    get recalledTextBatch(){
        return $("//android.widget.TextView[@text='Batch Recalled']")
    }

    get recalledTxtMsg(){
        return $("(//android.app.Dialog/descendant::android.view.View)[5]")
    }

    get closeBtnMsg(){
        return $("//android.widget.Button[@text='Close']")
    }

    get prodInfoMsg(){
        return $("//android.widget.TextView[@text='Dolo-650']")
    }

    get leafletShieldInfoBtn(){
       return $("//android.widget.Image[@text='leaflet-verified']")
    }

    get productDescription(){
        return $("(//android.widget.TextView[@text=\"Dolo-650 Tablet 15's contains 'Paracetamol' which is a mild analgesic and fever reducer\"])");
    }

    get batchInfoTxtMsg(){
        return $("//android.widget.TextView[@text='Batch Info']")
    }

    get productLeafletInfoDetails(){
        return $("(//android.app.Dialog/descendant::android.view.View)[6]")
    }

    async waitTimeout(){
        await timeoutWait.setTimeoutwait(30);
    }

    
    async editBatchRecallSerailzedFetch(){
        // recalled text message
        const recalledMsg=await this.recalledTxtMsg.getText();
        console.log(recalledMsg);
        await timeoutWait.setTimeoutTime(2);
       // close button click
        await this.closeBtnMsg.click();
        await timeoutWait.setTimeoutTime(2);
        // recalled text message 
        await this.recalledTextBatch.getText();
        await timeoutWait.setTimeoutTime(2);
        // product info message
        await this.prodInfoMsg.getText();
        await timeoutWait.setTimeoutTime(2);
        await this.productDescription.getText();
        await timeoutWait.setTimeoutTime(2);
        // click on leaflet shield button
        await this.leafletShieldInfoBtn.click();
        await timeoutWait.setTimeoutTime(2);
        // btach info text message 
        await this.batchInfoTxtMsg.getText();
        await timeoutWait.setTimeoutTime(2);
        // leaflet product information details
        await this.productLeafletInfoDetails.getText();
        await timeoutWait.setTimeoutTime(2);

        expect(recalledMsg).to.equal(browser.testExpectations.batchRecallMessage);
        await commonFunctions.leafletDetailsFetchAndValidateData(this.productLeafletInfoDetails);

    
    }

}
module.exports=new EditBatchRecallForSerialzed();