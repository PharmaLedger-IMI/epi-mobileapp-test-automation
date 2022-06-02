const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect
const timeoutWait = require('../utils/setTimeout')
const moment = require('moment')
const configData = require('../testdata/config.json')

class scanUnknownGTIN {

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

    async scanUnknownGTINDetailsFetch() {

        const productNotFound = await this.productNotFound.getText();
        await timeoutWait.setTimeoutWait(3);
        const prodCodeTxt = await this.prodCodeText.getText();
        await timeoutWait.setTimeoutWait(3);

        console.log(productNotFound);
        expect(productNotFound).to.equal(configData.productNotFoundMessage);
        console.log(prodCodeTxt);
        expect(prodCodeTxt).to.equal(configData.productCodeCombinationMessage);

        await timeoutWait.setTimeoutWait(3);

        const datebefore = await this.expiryDateText.getText();
        const dateafter = moment(datebefore, "DD-MMM-YYYY").format("YYMMDD")
        console.log(dateafter);

        console.log(await this.productCodeText.getText())
        console.log(await this.batchNumberText.getText())
        console.log(await this.serialNumberText.getText())
        console.log(dateafter);

        await timeoutWait.setTimeoutWait(3);

        expect(await this.productCodeText.getText()).to.equal(testData.prodCode);
        expect(await this.batchNumberText.getText()).to.equal(testData.batchValue);
        expect(await this.serialNumberText.getText()).to.equal(testData.batchSerialNumber);
        expect(dateafter).to.equal(testData.expiry);

    }


}
module.exports = new scanUnknownGTIN();