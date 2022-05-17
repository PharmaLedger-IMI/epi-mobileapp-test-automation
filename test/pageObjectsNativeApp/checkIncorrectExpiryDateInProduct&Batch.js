const testData = require('../testdata/testExpectations.json')
const configData = require('../testdata/config.json')
const expect = require('chai').expect
const timeout = require('../utils/setTimeout')
const moment = require('moment')


const expiryDatePattern = /(?<=Expiry:)(.*)(?=Serial)/g
const serialNumberPattern = /(?<=Serial number:)(.*)(?=Product)/g
const gtinPattern = /(?<=Product code:)(.*)(?=Batch)/g
const batchNumberPattern = /(?<=Batch number:).*/g


class CheckIncorrectDateInProductAndBatch {

    get recalledTxtMsg() {
        return $("(//android.app.Dialog/descendant::android.view.View)[5]/child::android.widget.TextView")
    }

    get closeBtnMsg() {
        return $("//android.widget.Button[@text='Close']")
    }

    get recalledTextBatch() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.widget.TextView)[2]")
    }

    get recalledBatchLearnMore() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.widget.TextView)[3]")
    }

    get recalledPopUpMsg() {
        return $("(//android.app.Dialog/descendant::android.view.View[5]/child::android.widget.TextView)")
    }

    get closeRecalledPopUpMsg() {
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

    get leafletType() {
        return $("//android.view.View[@resource-id='ion-sel-1']")
    }

    get leafletTypeEpi() {
        return $("(//android.app.Dialog[@resource-id='ion-overlay-1']/descendant::android.view.View)[1]/child::android.widget.Button[2]")
    }

    get leafletProdDescriptionType() {
        return $("(//android.view.View[@resource-id='leaflet-content']/descendant::android.view.View)[2]/child::android.widget.TextView[2]")
    }


    async waitTimeout() {
        await timeout.setTimeoutWait(38);
        await timeout.waitForElement(this.recalledTxtMsg);

    }


    async checkIncorrectExpiryDateInProductAndBatchDetailsFetch() {
        // recalled text message
        const recalledMsg = await this.recalledTxtMsg.getText();
        console.log(recalledMsg);
        await timeoutWait.setTimeoutTime(2);
        // close button click
        await this.closeBtnMsg.click();
        await timeoutWait.setTimeoutTime(2);
        // recalled text message 
        const recalledTxtBatch = await this.recalledTextBatch.getText();
        await timeoutWait.setTimeoutTime(2);
        await this.recalledBatchLearnMore.click();
        await timeoutWait.setTimeoutTime(3);
        await this.recalledPopUpMsg.getText();
        await timeoutWait.setTimeoutTime(3);
        await this.closeRecalledPopUpMsg.click();
        await timeoutWait.setTimeoutTime(3);
        // product info message
        const prodInfoMsg = await this.productInfo.getText();
        await timeoutWait.setTimeoutTime(2);
        await this.productDescription.getText();
        await timeoutWait.setTimeoutTime(2);

        console.log(prodInfoMsg);
        expect(prodInfoMsg).includes(configData.prodName);
        console.log(recalledMsg);
        expect(recalledMsg).to.equal(configData.recalledMessage);
        console.log(recalledTxtBatch);
        expect(recalledTxtBatch).to.equal(configData.recalledBatch)

    }

    async checkIncorrectExpiryDateInProductAndBatchLeafletDetailsFetch() {


        // click on leaflet shield button
        await this.leafletShieldInfoBtn.click();
        await timeoutWait.setTimeoutTime(2);
        // btach info text message 
        await this.batchInfoTxtMsg.getText();
        await timeoutWait.setTimeoutTime(2);
        // leaflet product information details
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
        // console.log(this.LeafletInfo().expiryDatePattern[0].match(expiryDatePattern)[0]);
        // console.log(this.LeafletInfo().match(serialNumberPattern)[0]);
        // console.log(this.LeafletInfo().match(gtinPattern)[0]);
        // console.log(this.LeafletInfo().match(batchNumberPattern)[0]);

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

    async checkIncorrectExpiryDateInProductAndBatchLeafletDetailsFetch() {


        // click on leaflet shield button
        await this.leafletShieldInfoBtn.click();
        await timeoutWait.setTimeoutTime(2);
        // btach info text message 
        await this.batchInfoTxtMsg.getText();
        await timeoutWait.setTimeoutTime(2);
        // leaflet product information details
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
        // console.log(this.LeafletInfo().expiryDatePattern[0].match(expiryDatePattern)[0]);
        // console.log(this.LeafletInfo().match(serialNumberPattern)[0]);
        // console.log(this.LeafletInfo().match(gtinPattern)[0]);
        // console.log(this.LeafletInfo().match(batchNumberPattern)[0]);

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

module.exports = new CheckIncorrectDateInProductAndBatch();