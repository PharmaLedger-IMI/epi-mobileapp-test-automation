
const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect
const timeoutWait = require('../utils/setTimeout')

const expiryDatePattern = /(?<=Expiry:)(.*)(?=Serial)/g
const serialNumberPattern = /(?<=Serial number:)(.*)(?=Product)/g
const gtinPattern = /(?<=Product code:)(.*)(?=Batch)/g
const batchNumberPattern = /(?<=Batch number:).*/g

class UpdateProductSNRecallFlag {


    get recalledTxtMsg() {
        return $("(//android.app.Dialog/descendant::android.view.View)[5]")
    }

    get closeBtnMsg() {
        return $("//android.widget.Button[@text='Close']")
    }

    get recalledTextBatch() {
        return $("(//android.view.View/child::android.widget.TextView)[5]")
    }

    get recalledBatchLearnMore() {
        return $("(//android.view.View/child::android.widget.TextView)[6]")
    }

    get recalledPopUpMsg() {
        return $("(//android.app.Dialog/descendant::android.view.View[5]/child::android.widget.TextView)")
    }

    get closeRecalledPopUpMsg() {
        return $("(//android.view.View/child::android.widget.Button)[7]")
    }

    get prodInfoMsg() {
        return $("(//android.view.View[@resource-id='leaflet-header']/descendant::android.widget.TextView)[1]")
    }

    get leafletShieldInfoBtn() {
        return $("(//android.view.View/child::android.widget.Image)[2]")
    }

    get productDescription() {
        return $("(//android.view.View[@resource-id='leaflet-header']/descendant::android.widget.TextView)[2]");
    }

    get batchInfoTxtMsg() {
        return $("(//android.app.Dialog/descendant::android.view.View/child::android.widget.TextView)[1]")
    }

    get productLeafletInfoDetails() {
        return $("(//android.app.Dialog/descendant::android.view.View)[6]")
    }

    async waitTimeout() {
        await timeoutWait.setTimeoutWait(30);
        await timeoutWait.waitForElement(this.recalledTxtMsg);
    }

    async productUpdateLeafletRecalledBatchFetch() {
        // recalled text message
        const recalledMsg = await this.recalledTxtMsg.getText();
        console.log(recalledMsg);
        await timeoutWait.setTimeoutTime(2);
        // close button click
        await this.closeBtnMsg.click();
        await timeoutWait.setTimeoutTime(2);
        // recalled text message 
        await this.recalledTextBatch.getText();
        await timeoutWait.setTimeoutTime(2);
        await this.recalledBatchLearnMore.click();
        await timeoutWait.setTimeoutTime(3);
        await this.recalledPopUpMsg.getText();
        await timeoutWait.setTimeoutTime(3);
        await this.closeRecalledPopUpMsg.click();
        await timeoutWait.setTimeoutTime(3);
        // product info message
        await this.prodInfoMsg.getText();
        await timeoutWait.setTimeoutTime(2);
        // get product description text
        await this.productDescription.getText();
        await timeoutWait.setTimeoutTime(2);
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

        // chai assertions on expiry date, serial number, gtin number and batch Number pattern
        expect(leafletInfoDetailsFetch.match(gtinPattern)[0]).to.equal(testData.prodCode);
        expect(leafletInfoDetailsFetch.match(batchNumberPattern)[0]).to.equal(testData.batchValue);
        expect(leafletInfoDetailsFetch.match(serialNumberPattern)[0]).to.equal(testData.batchSerialNumber);
        //  expect(expectedExpirydate.match(expiryDatePattern)[0]).to.equal(testData.expiryDate);
        //  expect(this.LeafletInfo().match(gtinPattern)[0]).to.equal(testData.prodCode);
        //  expect(this.LeafletInfo().match(batchNumberPattern)[0]).to.equal(testData.batchValue);
        // expect(this.LeafletInfo().match(serialNumberPattern)[0]).to.equal(testData.batchSerialNumber);
        // expect(this.LeafletInfo().match(expiryDatePattern)[0]).to.equal(testData.expiryDate);


    }
}
module.exports = new UpdateProductSNRecallFlag();