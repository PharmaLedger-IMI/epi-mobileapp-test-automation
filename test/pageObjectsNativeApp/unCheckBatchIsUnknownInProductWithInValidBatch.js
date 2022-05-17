const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect
const timeout = require('../utils/setTimeout')
const moment = require('moment')


class UncheckBatchIsUnknownInProductWithInValidBatch {

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
        await timeout.waitForElement(this.statusMsg);

    }

    async uncheckBatchIsUnknownInProductWithInValidBatchFetch() {

        const statusMessage = await this.statusMsg.getText();
        console.log(statusMessage);
        await timeout.setTimeoutTime(3);
        //get text of product information description
        const learnMoreStatus = await this.learnMore.getText();
        console.log(learnMoreStatus);
        await timeout.setTimeoutTime(3);
        //click on leaflet Shieled Button
        const productTitle = await this.prodTitle.getText();
        console.log(productTitle);
        await timeout.setTimeoutTime(3);
        // get batch info text
        const prodTitleOfText = await this.prodTitleText.getText();
        console.log(prodTitleOfText);
        await timeout.setTimeoutTime(3);

        await expect(statusMessage).to.not.equal("Batch Unknown");
        await expect(learnMoreStatus).to.not.equal("Batch learn more");
        await expect(productTitle).to.not.equal("Unknown Batch");
        await expect(prodTitleOfText).to.not.equal("Batch Unknown");

    }

}
module.exports = new UncheckBatchIsUnknownInProductWithInValidBatch();