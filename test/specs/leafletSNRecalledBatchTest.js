const leafletSNRecalledBatch=require('../pageObjectsNativeApp/leafletSNRecalledPage')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')

describe('ePI Native App Mobile Leaflet Automation Testing', () => {

    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('SerialNumberRecalled_LeafletDisplayed_Setup')
    allureReporter.addDescription('Check that SerialNumberRecalled Leaflet displayed')
    allureReporter.startStep("SerialNumberRecalled leaflet Details are Populated when Batch is created")
    
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

    it('should open Serila Number Recalled LeafLet Batch Info Page', async() => {
        allureReporter.addFeature('LeafLet Serial Number Recalled Batch Info Data');
         //Wait timeout for Leaflet to be displayed
        await leafletSNRecalledBatch.waitTimeout();
        await browser.pause(4000);
         //display details on Serail Number Recalled Leaflet for Serial Number batch scenario
        await leafletSNRecalledBatch.leafletSNRecalledDetailsFetch();
        await browser.pause(5000);
        allureReporter.endStep("End Test step for Serial Number Recalled Batch leaflet Details")
});

});