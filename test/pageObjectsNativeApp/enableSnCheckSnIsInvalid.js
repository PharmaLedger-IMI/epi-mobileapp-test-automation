const testData = require('../testdata/testExpectations.json')
const configData = require('../testdata/config.json');
const expect = require('chai').expect
const timeoutWait = require('../utils/setTimeout')
const moment = require('moment')

const expiryDatePattern = /(?<=Expiry:)(.*)(?=Serial)/g
const serialNumberPattern = /(?<=Serial number:)(.*)(?=Product)/g
const gtinPattern = /(?<=Product code:)(.*)(?=Batch)/g
const batchNumberPattern = /(?<=Batch number:).*/g


class EnableSnCheckSnIsInvalid {

    get inValidText() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.widget.TextView)[2]")
    }

    get inValidSNLearnMore() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.widget.TextView)[3]")
    }

    get inValidSNPopUpMsg() {
        return $("(//android.app.Dialog/descendant::android.view.View[5]/child::android.widget.TextView)")
    }

    get closeInValidSNPopUpMsg() {
        return $("(//android.app.Dialog/descendant::android.view.View)[3]/child::android.widget.Button")
    }

    get productInfo() {
        return $("(//android.view.View[@resource-id='leaflet-header']/descendant::android.widget.TextView)[1]")
    }
    get productDescription() {
        return $("(//android.view.View[@resource-id='leaflet-header']/descendant::android.widget.TextView)[2]");
    }

    get leafletVerifiedShiledBtn() {
        return $("(//android.view.View[@resource-id='leaflet-header']/descendant::android.widget.Image)[1]")
    }

    get batchInfo() {
        return $("(//android.app.Dialog/descendant::android.view.View/child::android.widget.TextView)[1]")
    }

    get productLeafletInfoDetails() {
        return $("(//android.app.Dialog/descendant::android.view.View)[5]/child::android.view.View")
    }

    async waitTimeout() {
        await timeoutWait.setTimeoutWait(30);
        await timeoutWait.waitForElement(this.inValidText);

    }

    async enableSnCheckSnInvalidDetailsFetch() {

        // invalid leaflet text
        const invalidSNText = await this.inValidText.getText();
        await timeoutWait.setTimeoutTime(2);
        await this.inValidSNLearnMore.click();
        await timeoutWait.setTimeoutTime(3);
        await this.inValidSNPopUpMsg.getText();
        await timeoutWait.setTimeoutTime(3);
        await this.closeInValidSNPopUpMsg.click();
        await timeoutWait.setTimeoutTime(3);
        // get product info text
        const prodInfo = await this.productInfo.getText();
        await timeoutWait.setTimeoutTime(2);

        console.log(prodInfo);
        expect(prodInfo).includes(configData.prodName);
        console.log(invalidSNText);
        expect(invalidSNText).to.equal(configData.invalidSNTextBatch);

    }

    async enableSnCheckSnInvalidLeafletDetailsFetch() {
        // get product info description
        await this.productDescription.getText();
        await timeoutWait.setTimeoutTime(2);
        // click on leaflet shiled button icon
        await this.leafletVerifiedShiledBtn.click();
        await timeoutWait.setTimeoutTime(2);
        // get text of batch info
        await this.batchInfo.getText();
        await timeoutWait.setTimeoutTime(2);
        // get leaflet prod info data 
        await this.productLeafletInfoDetails.getText();
        await timeoutWait.setTimeoutTime(2);

        const leafletInfoDetailsFetch = await this.productLeafletInfoDetails.getText();
        console.log("Prod Info Details of Leaflet is:" + " " + leafletInfoDetailsFetch)
        const leafletInfoFetch = leafletInfoDetailsFetch.replace(':', "=");
        console.log("Batch Info Details of Leaflet is: " + leafletInfoFetch);

        // log output for expiry date, serial number, gtin number and batch Number pattern
        console.log(leafletInfoDetailsFetch.match(expiryDatePattern)[0]);
        console.log(leafletInfoDetailsFetch.match(serialNumberPattern)[0]);
        console.log(leafletInfoDetailsFetch.match(gtinPattern)[0]);
        console.log(leafletInfoDetailsFetch.match(batchNumberPattern)[0]);


        await timeoutWait.setTimeoutTime(3);

        const datebefore = leafletInfoDetailsFetch.match(expiryDatePattern)[0];
        const dateafter = moment(datebefore, "DD-MMM-YYYY").format("YYMMDD")
        console.log(dateafter);

        // chai assertions on expiry date, serial number, gtin number and batch Number pattern
        expect(leafletInfoDetailsFetch.match(gtinPattern)[0]).to.equal(testData.prodCode);
        expect(leafletInfoDetailsFetch.match(batchNumberPattern)[0]).to.equal(testData.batchValue);
        expect(leafletInfoDetailsFetch.match(serialNumberPattern)[0]).to.equal(testData.batchSerialNumber);
        expect(dateafter).to.equal(testData.expiry);


    }
}

module.exports = new EnableSnCheckSnIsInvalid();