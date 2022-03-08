const leafletSNDecommisonedBatch=require('../pageObjectsNativeApp/leafletSNDecomissionedPage')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')

describe('ePI Native App Mobile Leaflet Automation Testing', () => {

    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('SerialNumberDecomissioned_LeafletDisplayed_Setup')
    allureReporter.addDescription('Check that SerialNumberDecomissioned Leaflet displayed')
    allureReporter.startStep("SerialNumberDecomissioned leaflet Details are Populated when Batch is created")
    
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

    it('should open Serial Number Decommisoned LeafLet Batch Info Page', async () => {
        allureReporter.addFeature('Decommisoned LeafLet for Batch with Decommisoned Data');
        await leafletSNDecommisonedBatch.waitTimeout;
        //Wait timeout for Leaflet to be displayed
        await browser.pause(4000);
        //display details on Decommisoned Serail Number Leaflet for Decommisoned Serial Number batch scenario
        await leafletSNDecommisonedBatch.leafletSNDecommisonedDetailsFetch();
        await browser.pause(4500); 
        allureReporter.endStep("End Test step for Decommisoned Serial Number Batch leaflet Details")


});

});
