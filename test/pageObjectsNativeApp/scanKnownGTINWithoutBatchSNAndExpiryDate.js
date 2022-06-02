const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect
const timeoutWait = require('../utils/setTimeout')
const moment = require('moment')
const configData = require('../testdata/config.json')

class scanKnownGTIN {

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

    get prodInfoMsg() {
        return $("(//android.view.View[@resource-id='leaflet-header']/descendant::android.widget.TextView)[1]")
    }

    get productDescription() {
        return $("(//android.view.View[@resource-id='leaflet-header']/descendant::android.widget.TextView)[2]");
    }

    get leafletShieldInfoBtn() {
        return $("(//android.view.View[@resource-id='leaflet-header']/descendant::android.widget.Image)[1]")
    }

    get batchInfoTxtMsg() {
        return $("(//android.app.Dialog/descendant::android.view.View/child::android.widget.TextView)[1]")
    }

    get productLeafletInfoDetails() {
        return $("(//android.app.Dialog/descendant::android.view.View)[5]/child::android.view.View")
    }

    async waitTimeout() {
        await timeoutWait.setTimeoutWait(33);
    }

    async scanknownGTINWithoutBatchSNAndExpiryDateDetailsFetch() {

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
       
        // product info message
        const prodInfoMsg = await this.prodInfoMsg.getText();
        await timeoutWait.setTimeoutWait(2);
        const prodDesc = await this.productDescription.getText();
        await timeoutWait.setTimeoutWait(2);

        console.log(prodInfoMsg);
        expect(prodInfoMsg).includes(configData.prodName);
        console.log(prodDesc);
        expect(prodDesc).to.equal(configData.prodDesc);
        console.log(batchUnknownTextMessage);
        expect(batchUnknownTextMessage).to.equal(configData.batchUnknownBarcodeMessage);
        console.log(batchUnknownValidateTextBatchMsg);
        expect(batchUnknownValidateTextBatchMsg).to.equal(configData.batchUnknownValidateMessage);

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

    async scanKnownGTINWithoutBatchSNAndExpiryDateLeafletDetailsFetch() {

        // click on leaflet shield button
        await this.leafletShieldInfoBtn.click();
        await timeoutWait.setTimeoutWait(2);
        // btach info text message 
        const batchInfo = await this.batchInfoTxtMsg.getText();
        await timeoutWait.setTimeoutWait(2);
        // leaflet product information details
        await this.productLeafletInfoDetails.getText();
        await timeoutWait.setTimeoutWait(2);

        const leafletInfoDetailsFetch = await this.productLeafletInfoDetails.getText();
        console.log("Prod Info Details of Leaflet is:" + " " + leafletInfoDetailsFetch)
        const leafletInfoFetch = leafletInfoDetailsFetch.replace(':', "=");
        console.log("Batch Info Details of Leaflet is: " + leafletInfoFetch);

        // log output for expiry date, serial number, gtin number and batch Number pattern
        console.log(leafletInfoDetailsFetch.match(expiryDatePattern)[0]);
        console.log(leafletInfoDetailsFetch.match(serialNumberPattern)[0]);
        console.log(leafletInfoDetailsFetch.match(gtinPattern)[0]);
        console.log(leafletInfoDetailsFetch.match(batchNumberPattern)[0]);
        
        await timeoutWait.setTimeoutWait(3);

        const datebefore = leafletInfoDetailsFetch.match(expiryDatePattern)[0];
        const dateafter = moment(datebefore, "DD-MMM-YYYY").format("YYMMDD")
        console.log(dateafter);

        // chai assertions on expiry date, serial number, gtin number and batch Number pattern
        expect(leafletInfoDetailsFetch.match(gtinPattern)[0]).to.equal(testData.prodCode);
        expect(leafletInfoDetailsFetch.match(batchNumberPattern)[0]).to.equal(testData.batchValue);
        expect(leafletInfoDetailsFetch.match(serialNumberPattern)[0]).to.equal(testData.batchSerialNumber);
        expect(dateafter).to.equal(testData.expiry);

        console.log(batchInfo);
        expect(batchInfo).to.equal(configData.batchInfoMessage);

    }


}
module.exports = new scanKnownGTIN();