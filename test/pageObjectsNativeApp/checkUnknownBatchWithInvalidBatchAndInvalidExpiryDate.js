const testData = require('../testdata/testExpectations.json')
const configData = require('../testdata/config.json')
const expect = require('chai').expect
const timeoutWait = require('../utils/setTimeout')
const moment = require('moment')

const expiryDatePattern = /(?<=Expiry:)(.*)(?=Serial)/g
const serialNumberPattern = /(?<=Serial number:)(.*)(?=Product)/g
const gtinPattern = /(?<=Product code:)(.*)(?=Batch)/g
const batchNumberPattern = /(?<=Batch number:).*/g

class CheckUnkownBatchWithInvalidBatchAndInvalidExpiryDate {

    get batchUnknownTxtMsg() {
        return $("(//android.app.Dialog/descendant::android.view.View)[5]/child::android.widget.TextView")
    }

    get closeBtnMsg() {
        return $("//android.widget.Button[@text='Close']")
    }

    get batchUnknownTextBatch() {
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

    get productInfo() {
        return $("(//android.view.View[@resource-id='leaflet-header']/descendant::android.widget.TextView)[1]")
    }
    get productDescription() {
        return $("(//android.view.View[@resource-id='leaflet-header']/descendant::android.widget.TextView)[2]");
    }

    get leafletVerifiedShiledBtn() {
        return $("(//android.view.View/child::android.widget.Image)[2]")
    }

    get batchInfo() {
        return $("(//android.app.Dialog/descendant::android.view.View/child::android.widget.TextView)[1]")
    }

    get productLeafletInfoDetails() {
        return $("(//android.app.Dialog/descendant::android.view.View)[5]/child::android.view.View")
    }

    get closeLeafletBtn() {
        return $("(//android.app.Dialog/descendant::android.view.View)[4]/following-sibling::android.widget.Button")
    }

    get leafletLevelDescriptionType() {
        return $("(//android.view.View[@resource-id='leaflet-content']/descendant::android.view.View)[2]/child::android.widget.TextView[2]")
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
        await timeoutWait.setTimeoutWait(30);
    }


    async checkUnknownBatchWithInvalidBatchAndInvalidExpiryDateDetailsFetch() {

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

        const batchUnknownTextMessage=await this.batchUnknownTxtMsg.getText();
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

        const prodInfo = await this.productInfo.getText();
        // expect(this.productInfo.getText()).to.not.equal(null);
        await timeoutWait.setTimeoutTime(3);
        //get text of product information description
        const prodDescMsg = await this.productDescription.getText();
        await timeoutWait.setTimeoutTime(3);
        //click on leaflet Shieled Button
        await this.leafletVerifiedShiledBtn.click();
        await timeoutWait.setTimeoutTime(3);
        // get batch info text
        const batchInfoTxt = await this.batchInfo.getText();
        await timeoutWait.setTimeoutTime(3);

        //get prod info text and assert 
        console.log(prodInfo);
        expect(prodInfo).includes(configData.prodName);
        //get prod Desc text and assert 
        console.log(prodDescMsg);
        expect(prodDescMsg).to.equal(configData.prodDesc);
        //get batch Info text and assert 
        console.log(batchInfoTxt);
        expect(batchInfoTxt).to.equal(configData.batchInfoMessage);
        console.log(unableToValidateTxtBatch);
        expect(unableToValidateTxtBatch).to.equal(configData.batchUnknownValidateMessage);
        console.log(batchUnknownTextMessage);
        expect(batchUnknownTextMessage).to.equal(configData.batchUnknownBarcodeMessage);

        // const productNotFound= await this.productNotFound.getText();
        // await timeoutWait.setTimeoutWait(3);
        // const prodCodeTxt= await this.prodCodeText.getText();
        // await timeoutWait.setTimeoutWait(3);

        // console.log(productNotFound);
        // expect(productNotFound).to.equal(configData.productNotFoundMessage);
        // console.log(prodCodeTxt);
        // expect(prodCodeTxt).to.equal(configData.productCodeCombinationMessage);
    
    }

    async checkUnknownBatchWithInvalidBatchAndInvalidExpiryDateLeafletDetailsFetch() {
       // get leaflet product details information
        await this.productLeafletInfoDetails.getText();
        await timeoutWait.setTimeoutTime(3);

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

        // const datebefore =await this.expiryDateText.getText();
        // const dateafter = moment(datebefore, "DD-MMM-YYYY").format("YYMMDD")
        // console.log(dateafter);

        // console.log(await this.productCodeText.getText())
        // console.log(await this.batchNumberText.getText())
        // console.log(await this.serialNumberText.getText())
        // console.log(dateafter);

        // expect(await this.productCodeText.getText()).to.equal(testData.prodCode);
        // expect(await this.batchNumberText.getText()).to.equal(testData.batchValue);
        // expect(await this.serialNumberText.getText()).to.equal(testData.batchSerialNumber);
        // expect(dateafter).to.equal(testData.expiry);

    }

    async getLeafletTypesAndLevel() {

        await this.closeLeafletBtn.click();
        await timeoutWait.setTimeoutWait(5);

        await this.aboutBtn.click();
        await timeoutWait.setTimeoutWait(3);

        const leafletLevelSMPCDescription = await this.leafletLevelDescriptionType.getText();
        console.log(leafletLevelSMPCDescription);
        expect(leafletLevelSMPCDescription).includes(configData.smpcUpdatedAtProductLevelDescription)

        await timeoutWait.setTimeoutWait(4);

        let deviceScreenDimension = await driver.getWindowRect();
        await driver.touchPerform([
            {
                action: 'tap',
                options: {
                    x: Math.floor(deviceScreenDimension.width * 0.49),
                    y: Math.floor(deviceScreenDimension.height * 0.90)
                }
            }
        ]);

        await timeoutWait.setTimeoutWait(8);

        await this.leafletType.click();
        await timeoutWait.setTimeoutWait(8);

        await this.leafletTypeEpi.click();
        await timeoutWait.setTimeoutWait(10);

        await this.aboutBtn.click();
        await timeoutWait.setTimeoutWait(8);

        const leafletLevelDescription = await this.leafletLevelDescriptionType.getText();
        console.log(leafletLevelDescription);
        expect(leafletLevelDescription).includes(configData.leafletUpdatedAtProductLevelDescription);

    }
}

module.exports = new CheckUnkownBatchWithInvalidBatchAndInvalidExpiryDate();