const testData = require('../testdata/testExpectations.json')
const configData = require('../testdata/config.json')
const expect = require('chai').expect
const timeoutWait = require('../utils/setTimeout')
const moment = require('moment')

const expiryDatePattern = /(?<=Expiry:)(.*)(?=Serial)/g
const serialNumberPattern = /(?<=Serial number:)(.*)(?=Product)/g
const gtinPattern = /(?<=Product code:)(.*)(?=Batch)/g
const batchNumberPattern = /(?<=Batch number:).*/g


class DisableExpiryDateCheckInvalidExpiryDate {

    get incorrectExpiryText() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.widget.TextView)[2]")
    }

    get incorrectExpiryLearnMore() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.widget.TextView)[3]")
    }

    get incorrectExpiryPopUpMsg() {
        return $("(//android.app.Dialog/descendant::android.view.View[5]/child::android.widget.TextView)")
    }

    get closeIncorrectPopUpMsg() {
        return $("(//android.app.Dialog/descendant::android.view.View)[3]/child::android.widget.Button")
    }

    get productInfo() {
        return $("(//android.view.View[@resource-id='leaflet-header']/descendant::android.widget.TextView)[1]")
    }
    get productDescription() {
        return $("(//android.view.View[@resource-id='leaflet-header']/descendant::android.widget.TextView)[2]");
    }

    get leafletShieldBtn() {
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
        await timeoutWait.waitForElement(this.incorrectExpiryText);
    }

    async disableExpiryDateCheckInvalidExpiryDateDetailsFetch() {

        // invalid leaflet text
        const incorrectExpiryDateText = await this.incorrectExpiryText.getText();
        await timeoutWait.setTimeoutWait(2);
        await this.incorrectExpiryLearnMore.click();
        await timeoutWait.setTimeoutWait(3);
        await this.incorrectExpiryPopUpMsg.getText();
        await timeoutWait.setTimeoutWait(3);
        await this.closeIncorrectPopUpMsg.click();
        await timeoutWait.setTimeoutWait(3);
        // get product info text
        const prodInfo = await this.productInfo.getText();
        await timeoutWait.setTimeoutWait(2);

        console.log(prodInfo);
        expect(prodInfo).includes(configData.prodName);
        console.log(incorrectExpiryDateText);
        expect(incorrectExpiryDateText).to.equal(configData.incorrectExpiryDateLabelMessage);

    }

    async disableExpiryDateCheckInvalidExpiryDateLeafletDetailsFetch() {

        // get product info description
        const prodDesc = await this.productDescription.getText();
        await timeoutWait.setTimeoutWait(2);
        // click on leaflet shiled button icon
        await this.leafletVerifiedShiledBtn.click();
        await timeoutWait.setTimeoutWait(2);
        // get text of batch info
        const batchInfoTxt = await this.batchInfo.getText();
        await timeoutWait.setTimeoutWait(2);
        // get leaflet prod info data 
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

        console.log(prodDesc);
        expect(prodDesc).to.equal(configData.prodDesc)
        console.log(batchInfoTxt);
        expect(batchInfoTxt).to.equal(configData.batchInfoMessage)

    }
}
module.exports = new DisableExpiryDateCheckInvalidExpiryDate();