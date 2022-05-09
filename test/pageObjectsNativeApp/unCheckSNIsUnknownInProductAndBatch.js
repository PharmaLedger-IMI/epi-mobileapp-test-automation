const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect
const timeoutWait=require('../utils/setTimeout')
const moment = require('moment')

const expiryDatePattern = /(?<=Expiry:)(.*)(?=Serial)/g
const serialNumberPattern = /(?<=Serial number:)(.*)(?=Product)/g
const gtinPattern = /(?<=Product code:)(.*)(?=Batch)/g
const batchNumberPattern = /(?<=Batch number:).*/g


class UncheckSNIsUnknownInProductAndBatch{


    //failedSN Batch 
    get failedSNTextBatch(){
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.widget.TextView)[2]")
    }

    get failedSNBatchLearnMore(){
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.widget.TextView)[3]")
    }

    get failedSNPopUpMsg(){
        return $("(//android.app.Dialog/descendant::android.view.View[5]/child::android.widget.TextView)")
    }

    get closeFailedSNPopUpMsg(){
        return $("(//android.app.Dialog/descendant::android.view.View)[3]/child::android.widget.Button")
    }

    get leafletNotFoundText(){
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.view.View)[2]/child::android.widget.TextView[3]")
    }

    get leafletNotFoundProdDesc(){
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.view.View)[2]/child::android.widget.TextView[4]")
    }

    async waitTimeout(){
        await timeoutWait.setTimeoutWait(30);
        await timeoutWait.waitForElement(this.failedSNTextBatch);

    }

    
    async uncheckSNIsUnknownInProductAndBatchFetch(){
    
        // failedSN text message 
        await this.failedSNTextBatch.getText();
        await timeoutWait.setTimeoutTime(3);
        // product info message
        await this.failedSNBatchLearnMore.click();
        await timeoutWait.setTimeoutTime(3);
        await this.failedSNPopUpMsg.getText();
        await timeoutWait.setTimeoutTime(3);
        await this.closeFailedSNPopUpMsg.click();
        await timeoutWait.setTimeoutTime(3);
        await this.leafletNotFoundText.getText();
        await timeoutWait.setTimeoutTime(2);
        await this.leafletNotFoundProdDesc.getText();
        await timeoutWait.setTimeoutTime(2);
        // click on leaflet shield button

         // chai assertions on expiry date, serial number, gtin number and batch Number pattern
         expect(leafletNotFoundText).to.equal("Leaflet Not Displayed");
         expect(leafletNotFoundProdDesc).to.equal("The leaflet for this product can't be displayed due to validation settings.");        

    
    }

}
module.exports=new UncheckSNIsUnknownInProductAndBatch();