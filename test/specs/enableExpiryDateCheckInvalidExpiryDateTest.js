const enableExpiryDateCheckInValidExpiryDate=require('../pageObjectsNativeApp/enableExpiryDateCheckInvalidExpiryDate')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait=require('../utils/setTimeout')


describe('ePI Native App Mobile Leaflet Automation Testing', () => {

    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('Add_productBatch_LeafletDisplayed_Setup')
    allureReporter.addDescription('Check that Add_productBatch Leaflet displayed')
    allureReporter.startStep("Add_productBatch leaflet Details are Populated when EPI_SMPC Leaflets for Batch is created")
    
    it('should open Patient Setting Scan Page', async() => {
       
            allureReporter.addFeature('Patient Setting Scan Page');
            // wait time for application to launch
            await nativePatientPage.waitLaunchURL();
            await timeoutWait.setTimeoutWait(3);
            // add the block chain value epiqa in settings page
            await nativePatientPage.patientsettingsScan();
            await timeoutWait.setTimeoutWait(3);
            // Scan the 2D matrix Data 
            await nativePatientPage.scan2DImageProcess();
            await timeoutWait.setTimeoutWait(4);
    
    });

    it('should open Recalled LeafLet Batch Info Page', async () => {
        allureReporter.addFeature('LeafLet Recalled Batch Info Data');
        //wait timeout for Leaflet to be displayed
        await enableExpiryDateCheckInValidExpiryDate.waitTimeout();
        await timeoutWait.setTimeoutWait(3);
        //display details on Add_productBatch Leaflet when Add_productBatch Leaflet for batch scenario created
        await enableExpiryDateCheckInValidExpiryDate.enableExpiryDateInvalidExpiryDateBatchFetch();
        await timeoutWait.setTimeoutWait(4);
  
});

});