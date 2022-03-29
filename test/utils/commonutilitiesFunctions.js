// let expiryDatePattern;
// let serialNumberPattern;
// let gtinPattern;
// let batchNumberPattern;
const nativePatientPage=require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait=require('../utils/setTimeout')
const testData = require('../testdata/testExpectations.json')
const configData=require('../testdata/configTest.json')
const allureReporter = require('@wdio/allure-reporter').default


const expiryDatePattern = /(?<=Expiry:)(.*)(?=Serial)/g
const serialNumberPattern = /(?<=Serial number:)(.*)(?=Product)/g
const gtinPattern = /(?<=Product code:)(.*)(?=Batch)/g
const batchNumberPattern = /(?<=Batch number:).*/g

class UtilitiesReusableFunctions{


    async LeafletInfo(){

        const expiryDatePattern = /(?<=Expiry:)(.*)(?=Serial)/g
        const serialNumberPattern = /(?<=Serial number:)(.*)(?=Product)/g
        const gtinPattern = /(?<=Product code:)(.*)(?=Batch)/g
        const batchNumberPattern = /(?<=Batch number:).*/g

    }

   getLeafletDetails(isLeafletDisplayed){

    if(isLeafletDisplayed){
        console.log("Epi Leaflet is displayed")
        console.log("Epi is displayed" + configData[1]['epiDisplayedDetails'].recalledTextBatch) 
        console.log("Epi is displayed" + configData[1]['epiDisplayedDetails'].leafletShieldInfoBtn)
        return configData[1]['epiDisplayedDetails'].leafletShieldInfoBtn 
 }
    else 
    {       

        console.log("Epi Not displayed")
        console.log("Epi is Not displayed" + configData[2]['epiNotDisplayedDetails'].leafletFailedMsgText) 
        console.log("Epi is Not displayed" + configData[2]['epiNotDisplayedDetails'].leafletNotDisplayedText) 
        return configData[2]['epiNotDisplayedDetails'].leafletNotDisplayedText

    }
   }


     
}
module.exports=new UtilitiesReusableFunctions();