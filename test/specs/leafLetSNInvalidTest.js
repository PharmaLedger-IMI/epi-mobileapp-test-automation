const leafletSNInvalidBatch=require('../pageObjectsNativeApp/leafletSNInvalidPage')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')

describe('ePI Native App Mobile Leaflet Automation Testing', () => {

    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('SerialNumberInvalid_LeafletDisplayed_Setup')
    allureReporter.addDescription('Check that SerialNumberInvalid Leaflet displayed')
    allureReporter.startStep("SerialNumberInvalid leaflet Details are Populated when Batch is created")
    
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

    it('should open Invalid Serial Number LeafLet Batch Info Page', async () => {
        allureReporter.addFeature('LeafLet Invlalid Serail Number Batch Info Data');
          //Wait timeout for Leaflet to be displayed
        await leafletSNInvalidBatch.waitTimeout;
        await browser.pause(4000);
         //display details on Invalid Serail Number Leaflet for Invalid Serial Number batch scenario
        await leafletSNInvalidBatch.leafletSNInvalidDetailsFetch();
        await browser.pause(4500); 
        allureReporter.endStep("End Test step for Invalid Serial Number Batch leaflet Details")


});

});
