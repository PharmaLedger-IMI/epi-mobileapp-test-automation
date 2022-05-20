const testData = require('../testdata/testExpectations.json')
const configData = require('../testdata/config.json')
const expect = require('chai').expect
const timeoutWait = require('../utils/setTimeout')
const moment = require('moment')

const expiryDatePattern = /(?<=Expiry:)(.*)(?=Serial)/g
const serialNumberPattern = /(?<=Serial number:)(.*)(?=Product)/g
const gtinPattern = /(?<=Product code:)(.*)(?=Batch)/g
const batchNumberPattern = /(?<=Batch number:).*/g


class InvalidSerailNumberWithBatchRecalled {

    get recalledTxtMsg() {
        return $("(//android.app.Dialog/descendant::android.view.View)[5]/child::android.widget.TextView")
    }

    get closeBtnMsg() {
        return $("//android.widget.Button[@text='Close']")
    }

    //failedSN Batch 
    get failedSNTextBatch() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.widget.TextView)[2]")
    }

    get failedSNLearnMore() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.widget.TextView)[3]")
    }

    get failedSNPopUpMsg() {
        return $("(//android.app.Dialog/descendant::android.view.View[5]/child::android.widget.TextView)")
    }

    get closeFailedSNPopUpMsg() {
        return $("(//android.app.Dialog/descendant::android.view.View)[3]/child::android.widget.Button")
    }

    get leafletNotFoundText() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.view.View)[2]/child::android.widget.TextView[3]")
    }

    get leafletNotFoundProdDesc() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.view.View)[2]/child::android.widget.TextView[4]")
    }

    async waitTimeout() {
        await timeoutWait.setTimeoutWait(30);
        await timeoutWait.waitForElement(this.recalledTxtMsg);

    }


    async invalidSerailNumberWithBatchRecalledFetch() {

        // recalled text message
        const recalledMsg = await this.recalledTxtMsg.getText();
        console.log(recalledMsg);
        await timeoutWait.setTimeoutTime(2);
        // close button click
        await this.closeBtnMsg.click();
        await timeoutWait.setTimeoutTime(3);
        // recalled text message 
        const failedSNBatch = await this.failedSNTextBatch.getText();
        await timeoutWait.setTimeoutTime(3);
        // product info message
        await this.failedSNLearnMore.click();
        await timeoutWait.setTimeoutTime(3);
        await this.failedSNPopUpMsg.getText();
        await timeoutWait.setTimeoutTime(3);
        await this.closeFailedSNPopUpMsg.click();
        await timeoutWait.setTimeoutTime(3);
        const leafletNotFound = await this.leafletNotFoundText.getText();
        await timeoutWait.setTimeoutTime(2);
        const LeafletNotFoundDesc = await this.leafletNotFoundProdDesc.getText();
        await timeoutWait.setTimeoutTime(2);
        // click on leaflet shield button

        // chai assertions on expiry date, serial number, gtin number and batch Number pattern
        expect(failedSNBatch).to.equal(configData.combinationScenario2)
        expect(leafletNotFound).to.equal(configData.leafletNotFoundMessage);
        expect(LeafletNotFoundDesc).to.equal(configData.leafletNotFoundDescription);


    }

}
module.exports = new InvalidSerailNumberWithBatchRecalled();