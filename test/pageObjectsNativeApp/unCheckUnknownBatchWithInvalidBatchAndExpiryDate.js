const testData = require('../testdata/testExpectations.json')
const configData = require('../testdata/config.json')
const expect = require('chai').expect
const timeoutWait = require('../utils/setTimeout')
const moment = require('moment')

const expiryDatePattern = /(?<=Expiry:)(.*)(?=Serial)/g
const serialNumberPattern = /(?<=Serial number:)(.*)(?=Product)/g
const gtinPattern = /(?<=Product code:)(.*)(?=Batch)/g
const batchNumberPattern = /(?<=Batch number:).*/g

class unCheckUnkownBatchWithInvalidBatchAndInvalidExpiryDate {

    get batchUnknownTxtMsg() {
        return $("(//android.app.Dialog/descendant::android.view.View)[5]/child::android.widget.TextView")
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

    get productNotFound() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.view.View)/child::android.widget.TextView[1]")
    }

    get prodCodeText() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.view.View)/child::android.widget.TextView[2]")
    }

    get serialNumberText() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.view.View)/child::android.widget.TextView[4]")
    }

    get productCodeText() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.view.View)/child::android.widget.TextView[6]")
    }

    get batchNumberText() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.view.View)/child::android.widget.TextView[8]")
    }

    get expiryDateText() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.view.View)/child::android.widget.TextView[10]")
    }

    async waitTimeout() {
        await timeoutWait.setTimeoutWait(30);
    }

    async uncheckUnknownBatchWithInvalidBatchAndExpiryDateDetailsFetch() {

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

            await timeoutWait.setTimeoutWait(6);

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
            // click on leaflet shield button

            // chai assertions on expiry date, serial number, gtin number and batch Number pattern
            expect(batchUnknownTextMessage).to.equal(configData.batchUnknownBarcodeMessage);
            expect(batchUnknownValidateTextBatchMsg).to.equal(configData.batchUnknownValidateMessage);
            expect(leafletNotFound).to.equal(configData.leafletNotFoundMessage);
            expect(LeafletNotFoundDesc).to.equal(configData.leafletNotFoundDescription);

        // const productNotFound = await this.productNotFound.getText();
        // await timeoutWait.setTimeoutWait(3);
        // const prodCodeTxt = await this.prodCodeText.getText();
        // await timeoutWait.setTimeoutWait(3);

        // console.log(productNotFound);
        // expect(productNotFound).to.equal(configData.productNotFoundMessage);
        // console.log(prodCodeTxt);
        // expect(prodCodeTxt).to.equal(configData.productCodeCombinationMessage);

        // await timeoutWait.setTimeoutWait(3);

        // const datebefore = await this.expiryDateText.getText();
        // const dateafter = moment(datebefore, "DD-MMM-YYYY").format("YYMMDD")
        // console.log(dateafter);

        // console.log(await this.productCodeText.getText())
        // console.log(await this.batchNumberText.getText())
        // console.log(await this.serialNumberText.getText())
        // console.log(dateafter);

        // await timeoutWait.setTimeoutWait(3);

        // expect(await this.productCodeText.getText()).to.equal(testData.prodCode);
        // expect(await this.batchNumberText.getText()).to.equal(testData.batchValue);
        // expect(await this.serialNumberText.getText()).to.equal(testData.batchSerialNumber);
        // expect(dateafter).to.equal(testData.expiry);

    }
}
module.exports = new unCheckUnkownBatchWithInvalidBatchAndInvalidExpiryDate();
