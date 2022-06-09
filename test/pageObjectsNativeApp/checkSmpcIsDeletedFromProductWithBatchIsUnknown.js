const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect
const timeoutWait = require('../utils/setTimeout')
const moment = require('moment')
const configData = require('../testdata/config.json')


class checkSmpcIsDeletedInProductWithBatchIsUnknown {

    get batchUnknownTxtMsg() {
        return $("(//android.app.Dialog/descendant::android.view.View)[5]/child::android.widget.TextView")
    }

    get closeBtnMsg() {
        return $("//android.widget.Button[@text='Close']")
    }

    //unableToValiddate Batch 
    get unableToValidateTextBatch() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.widget.TextView)[2]")
    }

    get unableToValidateLearnMore() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.widget.TextView)[3]")
    }

    get unableToValidatePopUpMsg() {
        return $("(//android.app.Dialog/descendant::android.view.View[5]/child::android.widget.TextView)")
    }

    get closeUnableToValidatePopUpMsg() {
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

    get leafletType() {
        return $("(//android.view.View[@resource-id='leaflet-header']/descendant::android.view.View)[3]/child::android.view.View[@resource-id='ion-sel-1']")
    }

    get leafletTypeEpi() {
        return $("(//android.app.Dialog[@resource-id='ion-overlay-1']/descendant::android.view.View)[1]/child::android.widget.Button[2]")
    }

    get closeLeafletBtn() {
        return $("(//android.app.Dialog/descendant::android.view.View)[4]/following-sibling::android.widget.Button")
    }

    get aboutBtn() {
        return $("(//android.view.View[@resource-id='leaflet-header']/child::android.view.View[3]/descendant::android.view.View)[2]/child::android.widget.Button")
    }

    get leafletLevelDescriptionType() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.view.View[@resource-id='leaflet-content']/descendant::android.view.View)[2]/child::android.widget.TextView[2]")
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
        await timeoutWait.setTimeoutWait(33);
    }

    async checkSmpcIsDeletedFromProductWithBatchIsUnknownDetailsFetch() {

        const batchUnknownTextMessage = await this.batchUnknownTxtMsg.getText();
        await timeoutWait.setTimeoutWait(3);
        await this.closeBtnMsg.click();
        await timeoutWait.setTimeoutWait(3);
        const unableToValidateTxtBatch = await this.unableToValidateTextBatch.getText();
        await timeoutWait.setTimeoutWait(2);
        await this.unableToValidateLearnMore.click();
        await timeoutWait.setTimeoutWait(3);
        await this.unableToValidatePopUpMsg.getText();
        await timeoutWait.setTimeoutWait(3);
        await this.closeUnableToValidatePopUpMsg.click();
        await timeoutWait.setTimeoutWait(3);

        const prodInfoMsg = await this.prodInfoMsg.getText();
        await timeoutWait.setTimeoutWait(2);
        const prodDescMsg = await this.productDescription.getText();
        await timeoutWait.setTimeoutWait(2);
        await this.leafletShieldInfoBtn.click();
        await timeoutWait.setTimeoutWait(3);
        // get batch info text
        const batchInfoTxt = await this.batchInfoTxtMsg.getText();
        await timeoutWait.setTimeoutWait(3);

        console.log(prodInfoMsg);
        expect(prodInfoMsg).includes(configData.prodName);
        console.log(prodDescMsg);
        expect(prodDescMsg).to.equal(configData.prodDesc);
        console.log(unableToValidateTxtBatch);
        expect(unableToValidateTxtBatch).to.equal(configData.batchUnknownValidateMessage);
        console.log(batchUnknownTextMessage);
        expect(batchUnknownTextMessage).to.equal(configData.batchUnknownBarcodeMessage);
        //get batch Info text and assert 
        console.log(batchInfoTxt);
        expect(batchInfoTxt).to.equal(configData.batchInfoMessage);

        // const productNotFound= await this.productNotFound.getText();
        // await timeoutWait.setTimeoutWait(3);
        // const prodCodeTxt= await this.prodCodeText.getText();
        // await timeoutWait.setTimeoutWait(3);

        // console.log(productNotFound);
        // expect(productNotFound).to.equal(configData.productNotFoundMessage);
        // console.log(prodCodeTxt);
        // expect(prodCodeTxt).to.equal(configData.productCodeCombinationMessage);

    }

    async checkSmpcIsDeletedFromProductWithBatchIsUnknownLeafletDetailsFetch() {

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

        await timeoutWait.setTimeoutWait(6);

        await this.closeBtnMsg.click();
        await timeoutWait.setTimeoutWait(5);

        await this.aboutBtn.click();
        await timeoutWait.setTimeoutWait(8);

        const leafletLevelDescription = await this.leafletLevelDescriptionType.getText();
        console.log(leafletLevelDescription);
        expect(leafletLevelDescription).includes(configData.leafletProductLevelDescription)

        // const datebefore =await this.expiryDateText.getText();
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
module.exports = new checkSmpcIsDeletedInProductWithBatchIsUnknown();