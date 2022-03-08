const leafletRecalledBatch=require('../pageObjectsNativeApp/recalledBatchLeaflet')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')

describe('ePI Native App Mobile Leaflet Automation Testing', () => {

    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('recalledBatch_LeafletDisplayed_Setup')
    allureReporter.addDescription('Check that batch is recalled and Leaflet is displayed')
    allureReporter.startStep("Recalled Leaflet Details are Populated after Recalled Message Displayed")
 
    
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

    it('should open LeafLet for Recalled Batch Info Page', async () => {
        allureReporter.addFeature('Recalled Batch Leaflet display Info Data');
        //Wait timeout for Leaflet to be displayed 
        await leafletRecalledBatch.waitTimeout;
        await browser.pause(4000);
        //display details on Leaflet for recalled batch scenario
        await leafletRecalledBatch.leafletRecalledBatchFetch();
        await browser.pause(4500); 
        allureReporter.endStep("End Recalled Batch leaflet display test")

});

});
