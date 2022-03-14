const addProductBatchLeafletValid=require('../pageObjectsNativeApp/addProductBatchLeaflet')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeWait=require('../utils/setTimeout')
const commonFunctions=require('../utils/commonutilitiesFunctions')


const expiryDatePattern = /(?<=Expiry:)(.*)(?=Serial)/g
const serialNumberPattern = /(?<=Serial number:)(.*)(?=Product)/g
const gtinPattern = /(?<=Product code:)(.*)(?=Batch)/g
const batchNumberPattern = /(?<=Batch number:).*/g


describe('ePI Native App Mobile Leaflet Automation Testing', () => {

    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('Add_productBatch_LeafletDisplayed_Setup')
    allureReporter.addDescription('Check that Add_productBatch Leaflet displayed')
    allureReporter.startStep("Add_productBatch leaflet Details are Populated when EPI_SMPC Leaflets for Batch is created")
    
    it('should open Patient Setting Scan Page', async() => {
        
        commonFunctions.patientSettingsScanTest();

    });

    it('should open Recalled LeafLet Batch Info Page', async () => {
        allureReporter.addFeature('LeafLet Recalled Batch Info Data');
        //wait timeout for Leaflet to be displayed
        await addProductBatchLeafletValid.waitTimeout;
        await timeWait.setTimeoutwait(3);
        //display details on Add_productBatch Leaflet when Add_productBatch Leaflet for batch scenario created
        await addProductBatchLeafletValid.addProductBatchLeafletDetailsFetch();
        await timeWait.setTimeoutwait(4);
  
});

});