const testData = require('../testdata/testExpectations.json')
const configData = require('../testdata/config.json')
const expect = require('chai').expect
const timeoutWait = require('../utils/setTimeout')
const moment = require('moment')

const expiryDatePattern = /(?<=Expiry:)(.*)(?=Serial)/g
const serialNumberPattern = /(?<=Serial number:)(.*)(?=Product)/g
const gtinPattern = /(?<=Product code:)(.*)(?=Batch)/g
const batchNumberPattern = /(?<=Batch number:).*/g


class UpdateBatchToResetSN {


    //recalled Batch 
    get failedSNBatch() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.widget.TextView)[2]")
    }

    get failedSNLearnMore() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.widget.TextView)[3]")
    }

    get failedSNPopUpMsg() {
        return $("(//android.app.Dialog/descendant::android.view.View[5]/child::android.widget.TextView)")
    }

    get closeFailedSNPopUpMsg() {
        return $("(//android.app.Dialog/descendant::android.view.View[3]/child::android.widget.Button)")
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
        await timeoutWait.setTimeoutWait(30);
        await timeoutWait.waitForElement(this.failedSNBatch);

    }


    async updateBatchToResetSerialNumberDetailsFetch() {

        // recalled text message 
        const failedSNTextBatch = await this.failedSNBatch.getText();
        await timeoutWait.setTimeoutWait(2);
        await this.failedSNLearnMore.click();
        await timeoutWait.setTimeoutWait(3);
        await this.failedSNPopUpMsg.getText();
        await timeoutWait.setTimeoutWait(3);
        await this.closeFailedSNPopUpMsg.click();
        await timeoutWait.setTimeoutWait(3);
        // product info message
        const productInfoMsg = await this.prodInfoMsg.getText();
        await timeoutWait.setTimeoutWait(2);
        const prodDescMsg = await this.productDescription.getText();
        await timeoutWait.setTimeoutWait(2);

        console.log(productInfoMsg);
        expect(productInfoMsg).includes(configData.prodName);
        console.log(prodDescMsg);
        expect(prodDescMsg).to.equal(configData.prodDesc);
        console.log(failedSNTextBatch);
        expect(failedSNTextBatch).to.equal(configData.invalidSerialNumberLabelMessage);

    }

    async updateBatchToResetSerialNumberLeafletDetailsFetch() {


        // click on leaflet shield button
        await this.leafletShieldInfoBtn.click();
        await timeoutWait.setTimeoutWait(2);
        // btach info text message 
        const batchInfoText = await this.batchInfoTxtMsg.getText();
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

        console.log(batchInfoText);
        expect(batchInfoText).to.equal(configData.batchInfoMessage)

    }

}
module.exports = new UpdateBatchToResetSN();