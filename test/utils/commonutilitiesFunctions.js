// let expiryDatePattern;
// let serialNumberPattern;
// let gtinPattern;
// let batchNumberPattern;
const nativePatientPage=require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait=require('../utils/setTimeout')
const testData = require('../testdata/testExpectations.json')
const configData=require('../testdata/configTest.json')
const allureReporter = require('@wdio/allure-reporter').default

class UtilitiesReusableFunctions{


    async LeafletInfo(){

        const expiryDatePattern = /(?<=Expiry:)(.*)(?=Serial)/g
        const serialNumberPattern = /(?<=Serial number:)(.*)(?=Product)/g
        const gtinPattern = /(?<=Product code:)(.*)(?=Batch)/g
        const batchNumberPattern = /(?<=Batch number:).*/g

    }

    async patientSettingsScanTest() {

        allureReporter.addFeature('Patient Setting Scan Page');
        // wait time for application to launch
        await nativePatientPage.waitLaunchURL();
        await timeWait.setTimeoutwait(3);
        // add the block chain value epiqa in settings page
        await nativePatientPage.patientsettingsScan(nativePatientPage.configData.setBlockChainValue.setUserBlockChainValue);
        await timeWait.setTimeoutwait(3);
        // Scan the 2D matrix Data 
        await nativePatientPage.scan2DImageProcess();
        await timeWait.setTimeoutwait(4);

    }

    async leafletDetailsFetchAndValidateData(element){
        const leafletInfoDetailsFetch = await this.element.getText();
        console.log("Prod Info Details of Leaflet is:"+" "+leafletInfoDetailsFetch)
        const leafletInfoFetch = leafletInfoDetailsFetch.replace(':',"=");
        console.log("Batch Info Details of Leaflet is: "+ leafletInfoFetch);

         // log output for expiry date, serial number, gtin number and batch Number pattern
         console.log(leafletInfoDetailsFetch.match(expiryDatePattern)[0]);
         console.log(leafletInfoDetailsFetch.match(serialNumberPattern)[0]);
         console.log(leafletInfoDetailsFetch.match(gtinPattern)[0]);
         console.log(leafletInfoDetailsFetch.match(batchNumberPattern)[0]);
         // console.log(this.LeafletInfo().match(expiryDatePattern)[0]);
         // console.log(this.LeafletInfo().match(serialNumberPattern)[0]);
         // console.log(this.LeafletInfo().match(gtinPattern)[0]);
         // console.log(this.LeafletInfo().match(batchNumberPattern)[0]);
 
         await timeoutWait.setTimeoutTime(3);

         const actualexpiryDate=leafletInfoDetailsFetch.match(expiryDatePattern)[0];
 
         const expectedExpirydate = actualexpiryDate.replace("-","");
         console.log("After expiry date is:"+ expectedExpirydate);

         // chai assertions on expiry date, serial number, gtin number and batch Number pattern
         expect(leafletInfoDetailsFetch.match(gtinPattern)[0]).to.equal(testData.prodCode);
         expect(leafletInfoDetailsFetch.match(batchNumberPattern)[0]).to.equal(testData.batchValue);
         expect(leafletInfoDetailsFetch.match(serialNumberPattern)[0]).to.equal(testData.batchSerialNumber);
          expect(expectedExpirydate.match(expiryDatePattern)[0]).to.equal(testData.expiryDate);
        //  expect(this.LeafletInfo().match(gtinPattern)[0]).to.equal(testData.prodCode);
        //  expect(this.LeafletInfo().match(batchNumberPattern)[0]).to.equal(testData.batchValue);
         // expect(this.LeafletInfo().match(serialNumberPattern)[0]).to.equal(testData.batchSerialNumber);
         // expect(this.LeafletInfo().match(expiryDatePattern)[0]).to.equal(testData.expiryDate);
    
    
    }


     
}
module.exports=new UtilitiesReusableFunctions();