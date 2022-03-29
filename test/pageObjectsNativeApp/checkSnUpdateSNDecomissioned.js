const LeafletFetchData = require('../utils/utilitiesReuseFunctions')
const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect
const timeoutWait=require('../utils/setTimeout')

const expiryDatePattern = /(?<=Expiry:)(.*)(?=Serial)/g
const serialNumberPattern = /(?<=Serial number:)(.*)(?=Product)/g
const gtinPattern = /(?<=Product code:)(.*)(?=Batch)/g
const batchNumberPattern = /(?<=Batch number:).*/g


class LeafletSNDecomissioned{

    get decommisonedText(){
        return $("//android.widget.TextView[@text='Decommissioned']")
    }

    get productInfo(){
        return $("//android.widget.TextView[@text='Cosentyx']")
    }
    get ProductInfoDescription(){
        return $("//android.widget.TextView[@text='Cosentyx 150mg/ml 2x1 PFS AT']")
    }

    get leafletShieldBtn(){
        return $("//android.widget.Image[@text='leaflet-verified']")
    }

    get batchInfo(){
        return $("//android.widget.TextView[@text='Batch Info']")
    }

    get leafletProdInfoDetails(){
        return $("(//android.view.View[@text='Expiry:26 - Sep - 2023Serial number:654321Product code:09088884204609Batch number:WL6190'])[3]")
    }

    async waitTimeout(){
        await timeoutWait.setTimeoutwait(30);
    }

    async sNUpdateSnDecommisonedDetailsFetch(){

        //get decommisoned text 
        await this.decommisonedText.getText();
        await timeoutWait.setTimeoutTime(2);
        // get product info text
        await this.productInfo.getText();
        await timeoutWait.setTimeoutTime(2);
        // get product information description
        await this.ProductInfoDescription.getText();
        await timeoutWait.setTimeoutTime(2);
        // click on leaflet shield button icon
        await this.leafletShieldBtn.click();
        await timeoutWait.setTimeoutTime(2);
        // get batch info text
        await this.batchInfo.getText();
        await timeoutWait.setTimeoutTime(2);
        // get leaflet prod info data
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
module.exports=new LeafletSNDecomissioned();