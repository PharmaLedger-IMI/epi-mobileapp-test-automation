const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect
const timeoutWait=require('../utils/setTimeout')
const moment = require('moment')

const expiryDatePattern = /(?<=Expiry:)(.*)(?=Serial)/g
const serialNumberPattern = /(?<=Serial number:)(.*)(?=Product)/g
const gtinPattern = /(?<=Product code:)(.*)(?=Batch)/g
const batchNumberPattern = /(?<=Batch number:).*/g


class EnableExpiryDateCheckInvalidExpiryDate{

    get incorrectExpiryText(){
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.widget.TextView)[2]")
    }

    get incorrectExpiryLearnMore(){
        return $("(//android.view.View[@resource-id='page-ion-content']/descendant::android.widget.TextView)[3]")
    }

    get incorrectExpiryPopUpMsg(){
        return $("(//android.app.Dialog/descendant::android.view.View[5]/child::android.widget.TextView)")
    }

    get closeIncorrectPopUpMsg(){
        return $("(//android.app.Dialog/descendant::android.view.View)[3]/child::android.widget.Button")
    }

    get productInfo(){
        return $("(//android.view.View[@resource-id='leaflet-header']/descendant::android.widget.TextView)[1]")
    }
    get productInfoDescription(){
        return $("(//android.view.View[@resource-id='leaflet-header']/descendant::android.widget.TextView)[2]");
    }

    get leafletShieldBtn(){
        return $("(//android.view.View[@resource-id='leaflet-header']/descendant::android.widget.Image)[1]")
    }

    get batchInfo(){
        return $("(//android.app.Dialog/descendant::android.view.View/child::android.widget.TextView)[1]")
    }

    get productLeafletInfoDetails(){
        return $("(//android.app.Dialog/descendant::android.view.View)[5]/child::android.view.View")
    }

    async waitTimeout(){
        await timeoutWait.setTimeoutWait(30);
        await timeoutWait.waitForElement(this.incorrectExpiryText);
    }

    async enableExpiryDateInvalidExpiryDateBatchFetch(){
        //get text of Incorrect expiry date
        await this.incorrectExpiryText.getText();
        await timeoutWait.setTimeoutTime(2);
        await this.incorrectExpiryLearnMore.click();
        await timeoutWait.setTimeoutTime(3);
        await this.incorrectExpiryPopUpMsg.getText();
        await timeoutWait.setTimeoutTime(3);
        await this.closeIncorrectPopUpMsg.click();
        await timeoutWait.setTimeoutTime(3);
        //get text of product information
        await this.productInfo.getText();
        await timeoutWait.setTimeoutTime(2);
        //get text on product information description
        await this.productInfoDescription.getText();
        await timeoutWait.setTimeoutTime(2);
        // click on leaflet shiled button
        await this.leafletShieldBtn.click();
        await timeoutWait.setTimeoutTime(2);
        // get batch info text
        await this.batchInfo.getText();
        await timeoutWait.setTimeoutTime(2);
        // get leaflet product details information
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


    }
}
module.exports=new EnableExpiryDateCheckInvalidExpiryDate();