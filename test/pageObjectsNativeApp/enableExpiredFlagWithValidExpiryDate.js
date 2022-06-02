const testData = require('../testdata/testExpectations.json')
const configData = require('../testdata/config.json')
const expect = require('chai').expect
const timeoutWait = require('../utils/setTimeout')
const moment = require('moment')

const expiryDatePattern = /(?<=Expiry:)(.*)(?=Serial)/g
const serialNumberPattern = /(?<=Serial number:)(.*)(?=Product)/g
const gtinPattern = /(?<=Product code:)(.*)(?=Batch)/g
const batchNumberPattern = /(?<=Batch number:).*/g


class EnableExpiredFlagWithExpiredDate {

    get productExpiredTextBatch() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.widget.TextView)[2]")
    }

    get productExpiredLearnMore() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.widget.TextView)[3]")
    }

    get productExpiredPopUpMsg() {
        return $("(//android.app.Dialog/descendant::android.view.View[5]/child::android.widget.TextView)")
    }

    get closeProductExpiredPopUpMsg() {
        return $("(//android.app.Dialog/descendant::android.view.View)[3]/child::android.widget.Button")
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
        await timeoutWait.waitForElement(this.prodInfoMsg);

    }


    async enableExpiredFlagWithExpiredDateDetailsFetch() {

        const productExpiredTxtBatch = await this.productExpiredTextBatch.getText();
        await timeoutWait.setTimeoutWait(2);
        await this.productExpiredLearnMore.click();
        await timeoutWait.setTimeoutWait(3);
        await this.productExpiredPopUpMsg.getText();
        await timeoutWait.setTimeoutWait(3);
        await this.closeProductExpiredPopUpMsg.click();
        await timeoutWait.setTimeoutWait(3);

        const prodInfo = await this.prodInfoMsg.getText();
        await timeoutWait.setTimeoutWait(3);
        //get text of product information description
        const prodDesc = await this.productDescription.getText();
        await timeoutWait.setTimeoutWait(3);
        //click on leaflet Shieled Button
        await this.leafletShieldInfoBtn.click();
        await timeoutWait.setTimeoutWait(3);
        // get batch info text
        const batchInfoTxt = await this.batchInfoTxtMsg.getText();
        await timeoutWait.setTimeoutWait(3);

        //get prod info text and assert 
        console.log(prodInfo);
        expect(prodInfo).includes(configData.prodName);
        //get prod Desc text and assert 
        console.log(prodDesc);
        expect(prodDesc).to.equal(configData.prodDesc);
        //get batch Info text and assert 
        console.log(batchInfoTxt);
        expect(batchInfoTxt).to.equal(configData.batchInfoMessage);
        console.log(productExpiredTxtBatch);
        expect(productExpiredTxtBatch).to.equal(configData.expiredProductLabelMessage);

    }

    async enableExpiredFlagWithExpiredDateLeafletDataFetch() {

        // get leaflet product details information
        await this.productLeafletInfoDetails.getText();
        await timeoutWait.setTimeoutWait(3);
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

    }

}
module.exports = new EnableExpiredFlagWithExpiredDate();