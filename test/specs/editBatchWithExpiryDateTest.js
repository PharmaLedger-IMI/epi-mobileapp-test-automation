const leafletExpiryDateBatch=require('../pageObjectsNativeApp/editBatchWithExpiryDate')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeWait=require('../utils/setTimeout')
const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('ePI Native App Mobile Leaflet Automation Testing', () => {
    
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('ExpiryDate_LeafletDisplayed_Setup')
    allureReporter.addDescription('Check that Expiry Date Leaflet displayed')
    allureReporter.startStep("Expiry Date leaflet Details are Populated when Leaflets for Batch is created")
    
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

    it('should open Expiry Date LeafLet Batch Info Page', async () => {
        allureReporter.addFeature('Expiry Date LeafLet Batch Info Data');
         //Wait timeout for Leaflet to be displayed
        await leafletExpiryDateBatch.waitTimeout;
        await timeWait.setTimeoutwait(4);
         //display details on Expiry Date Leaflet when Expired date for batch scenario created
        await leafletExpiryDateBatch.leafletExpiryDateBatchDetailsFetch();
        await timeWait.setTimeoutwait(4);
       


});

});