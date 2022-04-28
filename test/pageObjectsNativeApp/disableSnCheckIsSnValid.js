const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect
const timeout=require('../utils/setTimeout')
const moment = require('moment')
const commonFunctions=require('../utils/commonutilitiesFunctions')

const expiryDatePattern = /(?<=Expiry:)(.*)(?=Serial)/g
const serialNumberPattern = /(?<=Serial number:)(.*)(?=Product)/g
const gtinPattern = /(?<=Product code:)(.*)(?=Batch)/g
const batchNumberPattern = /(?<=Batch number:).*/g

class DisableSnCheckSnIsValid{

    get productInfo(){
        return $("(//android.view.View[@resource-id='leaflet-header']/descendant::android.widget.TextView)[1]")
    }
    get productDescription(){
        return $("(//android.view.View[@resource-id='leaflet-header']/descendant::android.widget.TextView)[2]");
    }

    get leafletVerifiedShiledBtn(){
        return $("(//android.view.View[@resource-id='leaflet-header']/descendant::android.widget.Image)[1]")
    }

    get batchInfo(){
        return $("(//android.app.Dialog/descendant::android.view.View/child::android.widget.TextView)[1]")
    }

    get productLeafletInfoDetails(){
        return $("(//android.app.Dialog/descendant::android.view.View)[5]/child::android.view.View")
    }

    async waitTimeout(){
        await timeout.setTimeoutWait(30);
        await timeout.waitForElement(this.productInfo);
      // await browser.pause(30000);
    }

 
    async disableSnCheckSnIsValidDetailsFetch(){

        // commonFunctions.getLeafletDetails(true);
        // await timeout.setTimeoutTime(3);
        await this.productInfo.getText();
       // expect(this.productInfo.getText()).to.not.equal(null);
        await timeout.setTimeoutTime(3);
        //get text of product information description
        await this.productDescription.getText();
        await timeout.setTimeoutTime(3);
        //click on leaflet Shieled Button
        await this.leafletVerifiedShiledBtn.click();
        await timeout.setTimeoutTime(3);
        // get batch info text
        await this.batchInfo.getText();
        await timeout.setTimeoutTime(3);
        // get leaflet product details information
        await this.productLeafletInfoDetails.getText();
        await timeout.setTimeoutTime(3);  
        const leafletInfoDetailsFetch = await this.productLeafletInfoDetails.getText();
        console.log("Prod Info Details of Leaflet is:"+" "+leafletInfoDetailsFetch)
        const leafletInfoFetch = leafletInfoDetailsFetch.replace(':',"=");
        console.log("Batch Info Details of Leaflet is: "+ leafletInfoFetch);

         // log output for expiry date, serial number, gtin number and batch Number pattern
         console.log(leafletInfoDetailsFetch.match(expiryDatePattern)[0]);
         console.log(leafletInfoDetailsFetch.match(serialNumberPattern)[0]);
         console.log(leafletInfoDetailsFetch.match(gtinPattern)[0]);
         console.log(leafletInfoDetailsFetch.match(batchNumberPattern)[0]);
 
         await timeout.setTimeoutTime(3);

         const datebefore=leafletInfoDetailsFetch.match(expiryDatePattern)[0];
         const dateafter=moment(datebefore, "DD-MMM-YYYY").format("YYMMDD")
         console.log(dateafter);

         // chai assertions on expiry date, serial number, gtin number and batch Number pattern
         expect(leafletInfoDetailsFetch.match(gtinPattern)[0]).to.equal(testData.prodCode);
         expect(leafletInfoDetailsFetch.match(batchNumberPattern)[0]).to.equal(testData.batchValue);
         expect(leafletInfoDetailsFetch.match(serialNumberPattern)[0]).to.equal(testData.batchSerialNumber);
         expect(dateafter).to.equal(testData.expiry);
           
    }
}

module.exports=new DisableSnCheckSnIsValid();