const leafletExpiryDateBatch=require('../pageObjectsNativeApp/leafleExpiryDatePage')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')


describe('ePI Native App Mobile Leaflet Automation Testing', () => {
    
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('ExpiryDate_LeafletDisplayed_Setup')
    allureReporter.addDescription('Check that Expiry Date Leaflet displayed')
    allureReporter.startStep("Expiry Date leaflet Details are Populated when Leaflets for Batch is created")
    
    it('should open Patient Setting Scan Page', async() => {
        allureReporter.addFeature('Patient Setting Scan Page');
        // wait time for application to launch
        await nativePatientPage.waitLaunchURL();
        await browser.pause(3500);
         // add the block chain value epiqa in settings page
        await nativePatientPage.patientsettingsScan(patientSettingPage.blockchainval());
        await browser.pause(4000);
         // Scan the 2D matrix Data 
        await nativePatientPage.scan2DImageProcess();
        await browser.pause(5000);


    });

    it('should open Expiry Date LeafLet Batch Info Page', async () => {
        allureReporter.addFeature('Expiry Date LeafLet Batch Info Data');
         //Wait timeout for Leaflet to be displayed
        await leafletExpiryDateBatch.waitTimeout;
        await browser.pause(4000);
         //display details on Expiry Date Leaflet when Expired date for batch scenario created
        await leafletExpiryDateBatch.leafletExpiryDateBatchDetailsFetch();
        await browser.pause(4500); 
        allureReporter.endStep("End Test step for Expiry Date Batch leaflet is displayed")


});

});