const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect
const timeoutWait=require('../utils/setTimeout')
const moment = require('moment')

const expiryDatePattern = /(?<=Expiry:)(.*)(?=Serial)/g
const serialNumberPattern = /(?<=Serial number:)(.*)(?=Product)/g
const gtinPattern = /(?<=Product code:)(.*)(?=Batch)/g
const batchNumberPattern = /(?<=Batch number:).*/g

const CONTEXT_REF = {
    NATIVE: 'native',
    WEBVIEW: 'webview',
};
const DOCUMENT_READY_STATE = {
    COMPLETE: 'complete',
    INTERACTIVE: 'interactive',
    LOADING: 'loading',
};

class UncheckExpirationDateInProductAndBatchWithCorrectExpiryDate{


    get recalledTxtMsg(){
        return $("(//android.app.Dialog/descendant::android.view.View)[5]/child::android.widget.TextView")
    }

    get closeBtnMsg(){
        return $("//android.widget.Button[@text='Close']")
    }

    //recalled Batch 
    get recalledTextBatch(){
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.widget.TextView)[2]")
    }

    get recalledBatchLearnMore(){
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.widget.TextView)[3]")
    }

    get recalledPopUpMsg(){
        return $("(//android.app.Dialog/descendant::android.view.View[5]/child::android.widget.TextView)")
    }

    get closeRecalledPopUpMsg(){
        return $("(//android.app.Dialog/descendant::android.view.View)[3]/child::android.widget.Button")
    }

    get prodInfoMsg(){
        return $("(//android.view.View[@resource-id='leaflet-header']/descendant::android.widget.TextView)[1]")
    }

    get productDescription(){
        return $("(//android.view.View[@resource-id='leaflet-header']/descendant::android.widget.TextView)[2]");
    }

    get leafletShieldInfoBtn(){
        return $("(//android.view.View[@resource-id='leaflet-header']/descendant::android.widget.Image)[1]")
    }

    get batchInfoTxtMsg(){
        return $("(//android.app.Dialog/descendant::android.view.View/child::android.widget.TextView)[1]")
    }

    get productLeafletInfoDetails(){
        return $("(//android.app.Dialog/descendant::android.view.View)[5]/child::android.view.View")
    }

    get closeLeafletBtn() {
        return $("(//android.app.Dialog/descendant::android.view.View)[4]/following::android.widget.Button")
    }

    get smpcDocType() {
        return $("//h6[contains(text(),'SmPC')]")
    }

    get leafletType() {
        return $("//android.view.View[@resource-id='ion-sel-1']")
    }

    get leafletTypeEpi(){
        return $("(//android.app.Dialog[@resource-id='ion-overlay-1']/descendant::android.view.View)[1]/child::android.widget.Button[2]")
    }

    get leafletProdDescriptionType(){
        return $("(//android.view.View[@resource-id='leaflet-content']/descendant::android.view.View)[2]/child::android.widget.TextView[2]")
    }

    waitForWebViewContextLoaded() {
        browser.waitUntil(
            () => {
                const currentContexts = this.getCurrentContexts();

                return currentContexts.length > 1 &&
                    currentContexts.find(context => context.toLowerCase().includes(CONTEXT_REF.WEBVIEW));
            },
            10000,
            'Webview context not loaded',
            100
        );
    }

    switchToContext(context) {
        browser.switchContext(this.getCurrentContexts()[context === CONTEXT_REF.WEBVIEW ? 1 : 0]);
    }

    getCurrentContexts() {
        return browser.getContexts();
    }

    waitForDocumentFullyLoaded() {
        browser.waitUntil(
            () => driver.execute(() => document.readyState) === DOCUMENT_READY_STATE.COMPLETE,
            15000,
            'Website not loaded',
            100
        );
    }

    waitForWebsiteLoaded() {
        this.waitForWebViewContextLoaded();
        this.switchToContext(CONTEXT_REF.WEBVIEW);
        this.waitForDocumentFullyLoaded();
        this.switchToContext(CONTEXT_REF.NATIVE);
    }

    async waitTimeout() {
        await timeout.setTimeoutWait(38);
        await timeout.waitForElement(this.smpcDocType);

    }

    
    async uncheckExpirationDateInProductAndBatchWithCorrectExpiryDateFetch(){
       
        await this.getCurrentContexts();
        await timeout.setTimeoutTime(5);
      //  await this.waitForWebViewContextLoaded();
        await this.switchToContext("WEBVIEW_eu.pharmaledger.epi");
        await browser.getContexts();
        await timeout.setTimeoutTime(10);
        await this.smpcDocType.click();
        await timeout.setTimeoutTime(6);

     //   await this.waitForDocumentFullyLoaded();
        await this.switchToContext("NATIVE_eu.pharmaledger.epi");
        await timeout.setTimeoutTime(5);

        const recalledMsg=await this.recalledTxtMsg.getText();
        console.log(recalledMsg);
        await timeoutWait.setTimeoutTime(2);
       // close button click
        await this.closeBtnMsg.click();
        await timeoutWait.setTimeoutTime(3);
        // recalled text message 
        await this.recalledTextBatch.getText();
        await timeoutWait.setTimeoutTime(3);
        // product info message
        await this.recalledBatchLearnMore.click();
        await timeoutWait.setTimeoutTime(3);
        await this.recalledPopUpMsg.getText();
        await timeoutWait.setTimeoutTime(3);
        await this.closeRecalledPopUpMsg.click();
        await timeoutWait.setTimeoutTime(3);
        await this.prodInfoMsg.getText();
        await timeoutWait.setTimeoutTime(2);
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
        console.log("Prod Info Details of Leaflet is:"+" "+leafletInfoDetailsFetch)
        const leafletInfoFetch = leafletInfoDetailsFetch.replace(':',"=");
        console.log("Batch Info Details of Leaflet is: "+ leafletInfoFetch);

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

         const datebefore=leafletInfoDetailsFetch.match(expiryDatePattern)[0];
         const dateafter=moment(datebefore, "DD-MMM-YYYY").format("YYMMDD")
         console.log(dateafter);

         // chai assertions on expiry date, serial number, gtin number and batch Number pattern
         expect(leafletInfoDetailsFetch.match(gtinPattern)[0]).to.equal(testData.prodCode);
         expect(leafletInfoDetailsFetch.match(batchNumberPattern)[0]).to.equal(testData.batchValue);
         expect(leafletInfoDetailsFetch.match(serialNumberPattern)[0]).to.equal(testData.batchSerialNumber);
         expect(dateafter).to.equal(testData.expiry);
        //  expect(this.LeafletInfo().match(gtinPattern)[0]).to.equal(testData.prodCode);
        //  expect(this.LeafletInfo().match(batchNumberPattern)[0]).to.equal(testData.batchValue);
         // expect(this.LeafletInfo().match(serialNumberPattern)[0]).to.equal(testData.batchSerialNumber);
         // expect(this.LeafletInfo().match(expiryDatePattern)[0]).to.equal(testData.expiryDate);
        
        //  await this.closeLeafletBtn.click();
        //  await timeout.setTimeoutTime(3);
 
        //  await this.leafletType.click();
        //  await this.setTimeoutWait(3);
 
        //  await this.leafletTypeEpi.click();
        //  await this.setTimeoutWait(4);
 
        //  await this.leafletProdDescriptionType.scrollIntoView();
        //  await this.setTimeoutWait(4);
 
        //  const prodLeafletDescription=await this.leafletProdDescriptionType.getText();
        //  console.log(prodLeafletDescription);
    
    }

}
module.exports=new UncheckExpirationDateInProductAndBatchWithCorrectExpiryDate();