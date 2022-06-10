const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect
const timeoutWait = require('../utils/setTimeout')
const moment = require('moment')
const configData = require('../testdata/config.json')

class uncheckBatchIsUnknownFlagWithOnlyValidGTINMatrix {

    get batchUnknownTxtMsg() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.app.Dialog/descendant::android.view.View)[4]/child::android.widget.TextView")
    }

    get closeBtnMsg() {
        return $("//android.widget.Button[@text='Close']")
    }

    get batchUnknownValidateTextBatch() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.widget.TextView)[2]")
    }

    get batchUnknownLearnMore() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.widget.TextView)[3]")
    }

    get batchUnknownPopUpMsg() {
        return $("(//android.app.Dialog/descendant::android.view.View[5]/child::android.widget.TextView)")
    }

    get closeBatchUnknownPopUpMsg() {
        return $("(//android.app.Dialog/descendant::android.view.View)[3]/child::android.widget.Button")
    }

    get leafletNotFoundText() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.view.View)[2]/child::android.widget.TextView[3]")
    }

    get leafletNotFoundProdDesc() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.view.View)[2]/child::android.widget.TextView[4]")
    }

    async waitTimeout() {
        await timeoutWait.setTimeoutWait(33);
    }

    async uncheckBatchIsUnknownFlagWithOnlyValidGTINMatrixDetailsFetch() {

        let deviceScreenDimensions = await driver.getWindowRect();

        await driver.touchPerform([
            {
                action: 'tap',
                options: {
                    x: Math.floor(deviceScreenDimensions.width * 0.49),
                    y: Math.floor(deviceScreenDimensions.height * 0.49)
                }
            }
        ]);

        await timeoutWait.setTimeoutWait(8);

        // failedSN text message 
        const batchUnknownTextMessage = await this.batchUnknownTxtMsg.getText();
        await timeoutWait.setTimeoutWait(3);
        // product info message
        await this.closeBtnMsg.click();
        await timeoutWait.setTimeoutWait(3);
        const batchUnknownValidateTextBatchMsg = await this.batchUnknownValidateTextBatch.getText();
        await timeoutWait.setTimeoutWait(3);
        await this.batchUnknownLearnMore.click();
        await timeoutWait.setTimeoutWait(3);
        await this.batchUnknownPopUpMsg.getText();
        await timeoutWait.setTimeoutWait(3);
        await this.closeBatchUnknownPopUpMsg.click();
        await timeoutWait.setTimeoutWait(3);
        const leafletNotFound = await this.leafletNotFoundText.getText();
        await timeoutWait.setTimeoutWait(2);
        const LeafletNotFoundDesc = await this.leafletNotFoundProdDesc.getText();
        await timeoutWait.setTimeoutWait(2);

        console.log(batchUnknownTextMessage);
        expect(batchUnknownTextMessage).to.equal(configData.batchUnknownBarcodeMessage);
        console.log(batchUnknownValidateTextBatchMsg);
        expect(batchUnknownValidateTextBatchMsg).to.equal(configData.batchUnknownValidateMessage);
        console.log(leafletNotFound);
        expect(leafletNotFound).to.equal(configData.leafletNotFoundMessage);
        console.log(LeafletNotFoundDesc);
        expect(LeafletNotFoundDesc).to.equal(configData.leafletNotFoundDescription);

    }

}
module.exports = new uncheckBatchIsUnknownFlagWithOnlyValidGTINMatrix();