const testData = require('../testdata/testExpectations.json')
const configData = require('../testdata/config.json')
const expect = require('chai').expect
const timeoutWait = require('../utils/setTimeout')
const moment = require('moment')

const expiryDatePattern = /(?<=Expiry:)(.*)(?=Serial)/g
const serialNumberPattern = /(?<=Serial number:)(.*)(?=Product)/g
const gtinPattern = /(?<=Product code:)(.*)(?=Batch)/g
const batchNumberPattern = /(?<=Batch number:).*/g

class UnCheckIncorrectExpiryDateInProductAndBatch {


    get incorrectTextBatch() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.widget.TextView)[2]")
    }

    get incorrectBatchLearnMore() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.widget.TextView)[3]")
    }

    get incorrectPopUpMsg() {
        return $("(//android.app.Dialog/descendant::android.view.View[5]/child::android.widget.TextView)")
    }

    get closeIncorrectPopUpMsg() {
        return $("(//android.app.Dialog/descendant::android.view.View)[3]/child::android.widget.Button")
    }

    get leafletNotFoundText() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.view.View)[2]/child::android.widget.TextView[3]")
    }

    get leafletNotFoundProdDesc() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.view.View)[2]/child::android.widget.TextView[4]")
    }

    async waitTimeout() {
        await timeoutWait.setTimeoutWait(32);
       
    }


    async unCheckIncorrectExpiryDateInProductAndBatchDetailsFetch() {

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

        const incorrectTxtBatch = await this.incorrectTextBatch.getText();
        await timeoutWait.setTimeoutWait(3);
        await this.incorrectBatchLearnMore.click();
        await timeoutWait.setTimeoutWait(3);
        await this.incorrectPopUpMsg.getText();
        await timeoutWait.setTimeoutWait(3);
        await this.closeIncorrectPopUpMsg.click();
        await timeoutWait.setTimeoutWait(3);
        const leafletNotFound = await this.leafletNotFoundText.getText();
        await timeoutWait.setTimeoutWait(2);
        const LeafletNotFoundDesc = await this.leafletNotFoundProdDesc.getText();
        await timeoutWait.setTimeoutWait(2);
        // click on leaflet shield button

        // chai assertions on expiry date, serial number, gtin number and batch Number pattern
        expect(incorrectTxtBatch).to.equal(configData.incorrectExpiryDateLabelMessage)
        expect(leafletNotFound).to.equal(configData.leafletNotFoundMessage);
        expect(LeafletNotFoundDesc).to.equal(configData.leafletNotFoundDescription);

    }

}

module.exports = new UnCheckIncorrectExpiryDateInProductAndBatch();