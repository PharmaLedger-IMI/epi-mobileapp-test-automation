const testData = require('../testdata/testExpectations.json')
const configData = require('../testdata/config.json')
const expect = require('chai').expect
const timeout = require('../utils/setTimeout')
const moment = require('moment')

class checkBatchIsUnknownInProductWithInValidMatrix {

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

    get closeLeafletBtn() {
        return $("(//android.app.Dialog/descendant::android.view.View)[4]/following-sibling::android.widget.Button")
    }

    get leafletType() {
        return $("(//android.view.View[@resource-id='leaflet-header']/descendant::android.view.View)[3]/child::android.view.View[@resource-id='ion-sel-1']")
    }

    get leafletTypeEpi() {
        return $("(//android.app.Dialog[@resource-id='ion-overlay-1']/descendant::android.view.View)[1]/child::android.widget.Button[2]")
    }

    get leafletLevelDescriptionType() {
        return $("(//android.view.View[@resource-id='leaflet-content']/descendant::android.view.View)[2]/child::android.widget.TextView[2]")
    }

    get statusMsg() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.view.View)[1]/child::android.widget.TextView[1]")
    }

    get learnMore() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.view.View)[1]/child::android.widget.TextView[2]")
    }

    get prodTitle() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.view.View)[1]/child::android.widget.TextView[4]")
    }

    get prodTitleText() {
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.view.View)[1]/child::android.widget.TextView[5]")
    }

    async waitTimeout() {
        await timeout.setTimeoutWait(33);
        await timeout.waitForElement(this.batchUnknownTextBatch);

    }

    async checkBatchIsUnknownInProductWithInValidBatchDetailsFetch() {

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

        await timeout.setTimeoutWait(8);

        const batchUnknownTxtBatch = await this.batchUnknownTextBatch.getText();
        await timeoutWait.setTimeoutTime(2);
        await this.batchUnknownLearnMore.click();
        await timeoutWait.setTimeoutTime(3);
        await this.batchUnknownPopUpMsg.getText();
        await timeoutWait.setTimeoutTime(3);
        await this.closeBatchUnknownPopUpMsg.click();
        await timeoutWait.setTimeoutTime(3);

        // const statusMessage = await this.statusMsg.getText();
        // console.log(statusMessage);
        // await timeout.setTimeoutTime(3);
        // //get text of product information description
        // const learnMoreStatus = await this.learnMore.getText();
        // console.log(learnMoreStatus);
        // await timeout.setTimeoutTime(3);
        // //click on leaflet Shieled Button
        // const productTitle = await this.prodTitle.getText();
        // console.log(productTitle);
        // await timeout.setTimeoutTime(3);
        // // get batch info text
        // const prodTitleOfText = await this.prodTitleText.getText();
        // console.log(prodTitleOfText);
        // await timeout.setTimeoutTime(3);

        // await expect(statusMessage).to.not.equal("Batch Unknown");
        // await expect(learnMoreStatus).to.not.equal("Batch learn more");
        // await expect(productTitle).to.not.equal("Unknown Batch");
        // await expect(prodTitleOfText).to.not.equal("Batch Unknown");

        const prodInfoMsg = await this.productInfoMsg.getText();
        await timeoutWait.setTimeoutTime(2);
        const prodDescMsg = await this.productDescription.getText();
        await timeoutWait.setTimeoutTime(2);
        await this.leafletVerifiedShiledBtn.click();
        await timeout.setTimeoutTime(3);
        // get batch info text
        const batchInfoTxt = await this.batchInfo.getText();
        await timeout.setTimeoutTime(3);

        console.log(prodInfoMsg);
        expect(prodInfoMsg).includes(configData.prodName);
        console.log(prodDescMsg);
        expect(prodDescMsg).to.equal(configData.prodDesc);
        console.log(batchUnknownTxtBatch);
        expect(batchUnknownTxtBatch).to.equal(configData.unKnownBatchLabelMessage);
        //get batch Info text and assert 
        console.log(batchInfoTxt);
        expect(batchInfoTxt).to.equal(configData.batchInfoMessage);
    }

    async checkBatchIsUnknownInProductWithInValidBatchLeafletDetailsFetch() {

        // get leaflet product details information
        await this.productLeafletInfoDetails.getText();
        await timeout.setTimeoutTime(3);

        const leafletInfoDetailsFetch = await this.productLeafletInfoDetails.getText();
        console.log("Prod Info Details of Leaflet is:" + " " + leafletInfoDetailsFetch)
        const leafletInfoFetch = leafletInfoDetailsFetch.replace(':', "=");
        console.log("Batch Info Details of Leaflet is: " + leafletInfoFetch);

        // log output for expiry date, serial number, gtin number and batch Number pattern
        console.log(leafletInfoDetailsFetch.match(expiryDatePattern)[0]);
        console.log(leafletInfoDetailsFetch.match(serialNumberPattern)[0]);
        console.log(leafletInfoDetailsFetch.match(gtinPattern)[0]);
        console.log(leafletInfoDetailsFetch.match(batchNumberPattern)[0]);

        await timeout.setTimeoutTime(3);

        const datebefore = leafletInfoDetailsFetch.match(expiryDatePattern)[0];
        const dateafter = moment(datebefore, "DD-MMM-YYYY").format("YYMMDD")
        console.log(dateafter);

        // chai assertions on expiry date, serial number, gtin number and batch Number pattern
        expect(leafletInfoDetailsFetch.match(gtinPattern)[0]).to.equal(testData.prodCode);
        expect(leafletInfoDetailsFetch.match(batchNumberPattern)[0]).to.equal(testData.batchValue);
        expect(leafletInfoDetailsFetch.match(serialNumberPattern)[0]).to.equal(testData.batchSerialNumber);
        expect(dateafter).to.equal(testData.expiry);


    }

    async getLeafletTypesAndLevel() {

        await this.closeLeafletBtn.click();
        await timeout.setTimeoutTime(3);

        let deviceScreenDimensionofSMPCLeafletType = await driver.getWindowRect();
        await driver.touchPerform([
            {
                Element: this.leafletLevelDescriptionType,
                action: 'tap',
                options: {
                    x: Math.floor(deviceScreenDimensionofSMPCLeafletType.width * 0.49),
                    y: Math.floor(deviceScreenDimensionofSMPCLeafletType.height * 0.60)
                }
            }
        ]);

        const leafletLevelSMPCDescription = await this.leafletLevelDescriptionType.getText();
        console.log(leafletLevelSMPCDescription);
        expect(leafletLevelSMPCDescription).includes(configData.leafletProductLevelDescription)

        await this.leafletType.click();
        await timeout.setTimeoutWait(3);

        await this.leafletTypeEpi.click();
        await timeout.setTimeoutWait(4);

        let deviceScreenDimensionofLeafletType = await driver.getWindowRect();
        await driver.touchPerform([
            {
                Element: this.leafletLevelDescriptionType,
                action: 'tap',
                options: {
                    x: Math.floor(deviceScreenDimensionofLeafletType.width * 0.49),
                    y: Math.floor(deviceScreenDimensionofLeafletType.height * 0.60)
                }
            }
        ]);

        const leafletLevelDescription = await this.leafletLevelDescriptionType.getText();
        console.log(leafletLevelDescription);
        expect(leafletLevelDescription).includes(configData.leafletProductLevelDescription)

    }


}
module.exports = new checkBatchIsUnknownInProductWithInValidMatrix();