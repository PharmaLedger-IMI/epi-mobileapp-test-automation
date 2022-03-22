const LeafletFetchData = require('../utils/commonutilitiesFunctions')
const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect
const timeoutWait=require('../utils/setTimeout')

const expiryDatePattern = /(?<=Expiry:)(.*)(?=Serial)/g
const serialNumberPattern = /(?<=Serial number:)(.*)(?=Product)/g
const gtinPattern = /(?<=Product code:)(.*)(?=Batch)/g
const batchNumberPattern = /(?<=Batch number:).*/g

class LeafLetPage{

    get leafletTextName(){
        return $("//android.widget.TextView[@text='JanRel']")
    }

    get leafletshieldBtn(){
        return $("//android.widget.Image[@text='leaflet-verified']")
    }

    get bacthInfoVal(){
        return $("//android.widget.TextView[@text='Batch Info']")
    }

    get leafLetBatchInfoData(){
        return $("//android.view.View[@text='Expiry:31 - Jan - 2023Serial number:123456Product code:04290931025517Batch number:FM7660']")
    }

    async waitTimeout(){
        await timeoutWait.setTimeoutwait(30);
    }

    async leafletDetailsFetch(){
        //get leaflet text info data
       
        await this.leafletTextName.getText();
        await timeoutWait.setTimeoutTime(2);
        // click on leaflet shiled button icon
        await this.leafletshieldBtn.click();
        await timeoutWait.setTimeoutTime(2);
        // get text on batch info 
        await this.bacthInfoVal.getText();
        await timeoutWait.setTimeoutTime(2);
        // get text of leaflet details 
        await this.leafLetBatchInfoData.getText();
        await timeoutWait.setTimeoutTime(2);

       
        const leafletInfoDetailsFetch = await this.leafLetBatchInfoData.getText();
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

module.exports=new LeafLetPage();