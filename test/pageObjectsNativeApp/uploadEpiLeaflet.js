const LeafletFetchData = require('../utils/utilitiesReuseFunctions')
const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect
const timeoutWait=require('../utils/setTimeout')
const moment = require('moment')

class LeafletEPIUpload{
    

    get productInfo(){
        return $("(//android.view.View[@resource-id='leaflet-header']/descendant::android.widget.TextView)[1]")
    }
    get ProductInfoDescription(){
        return $("(//android.view.View/child::android.widget.TextView)[8]");
    }

    get leafletShieldBtn(){
        return $("(//android.view.View/child::android.widget.Image)[2]")
    }

    get batchInfo(){
        return $("(//android.app.Dialog/descendant::android.view.View/child::android.widget.TextView)[1]")
    }

    get leafletProdInfoDetails(){
        return $("(//android.app.Dialog/descendant::android.view.View)[6]")
    }

    async waitTimeout(){
        await timeoutWait.setTimeoutWait(30);
        await timeoutWait.waitForElement(this.productInfo);
    }

    async uploadEPILeafletDetailsFetch(){
    
        // get text of product info
        await this.productInfo.getText();
        await timeoutWait.setTimeoutTime(2);
        // get text of product info description
        await this.ProductInfoDescription.getText();
        await timeoutWait.setTimeoutTime(2);
        // click on leaflet shiled button icon
        await this.leafletShieldBtn.click();
        await timeoutWait.setTimeoutTime(2);
        // get text of batch info
        await this.batchInfo.getText();
        await timeoutWait.setTimeoutTime(2);
        //get leaflet details
        await this.leafletProdInfoDetails.getText();
        await timeoutWait.setTimeoutTime(2);

        const leafletInfoDetailsFetch = await this.leafletProdInfoDetails.getText();
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
module.exports=new LeafletEPIUpload();