const testData = require('../testdata/testExpectations.json')
const configData = require('../testdata/config.json')
const expect = require('chai').expect
const timeoutWait = require('../utils/setTimeout')
const moment = require('moment')

const expiryDatePattern = /(?<=Expiry:)(.*)(?=Serial)/g
const serialNumberPattern = /(?<=Serial number:)(.*)(?=Product)/g
const gtinPattern = /(?<=Product code:)(.*)(?=Batch)/g
const batchNumberPattern = /(?<=Batch number:).*/g


class UncheckBatchIsExpiredInProductAndExpiredInBatch {


    //recalled Batch 
    get incorrectTextBatch() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.widget.TextView)[2]")
    }

    get incorrectBatchLearnMore() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.widget.TextView)[3]")
    }

    get incorrectPopUpMsg() {
        return $("(//android.app.Dialog/descendant::android.view.View[5]/child::android.widget.TextView)")
    }

    get closeincorrectPopUpMsg() {
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
        await timeoutWait.waitForElement(this.incorrectTextBatch);

    }


    async uncheckBatchIsExpiredInProductAndExpiredInBatchFetch() {


        // recalled text message 
        const incorrectBatch = await this.incorrectTextBatch.getText();
        await timeoutWait.setTimeoutTime(3);
        // product info message
        await this.incorrectBatchLearnMore.click();
        await timeoutWait.setTimeoutTime(3);
        await this.incorrectPopUpMsg.getText();
        await timeoutWait.setTimeoutTime(3);
        await this.closeincorrectPopUpMsg.click();
        await timeoutWait.setTimeoutTime(3);
        const leafletNotFound = await this.leafletNotFoundText.getText();
        await timeoutWait.setTimeoutTime(2);
        const LeafletNotFoundDesc = await this.leafletNotFoundProdDesc.getText();
        await timeoutWait.setTimeoutTime(2);
        // click on leaflet shield button

        // chai assertions on expiry date, serial number, gtin number and batch Number pattern
        expect(incorrectBatch).to.equal(configData.expiredBatchLabelMessage)
        expect(leafletNotFound).to.equal(configData.leafletNotFoundMessage);
        expect(LeafletNotFoundDesc).to.equal(configData.leafletNotFoundDescription);

    }

}
module.exports = new UncheckBatchIsExpiredInProductAndExpiredInBatch();