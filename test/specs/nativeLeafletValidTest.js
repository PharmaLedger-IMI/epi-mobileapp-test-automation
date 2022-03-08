const leafletVaildBatch=require('../pageObjectsNativeApp/nativeLeafLetPage')
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const allureReporter = require('@wdio/allure-reporter').default

describe('ePI Automation Testing', () => {

    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('Valid_LeafletDisplayed_Setup')
    allureReporter.addDescription('Check that Valid Leaflet displayed')
    allureReporter.startStep("Valid leaflet Details are Populated when Batch is created")

    it('should open Patient Setting Scan Page', async () => {
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

    it('should open Valid LeafLet Batch Info Page', async () => {
        allureReporter.addFeature('LeafLet Batch Info Data');
         //Wait timeout for Leaflet to be displayed
        await leafletVaildBatch.waitTimeout();
        await browser.pause(4000);
         //display details on Valid Leaflet for create batch scenario
        await leafletVaildBatch.leafletDetailsFetch();
        await browser.pause(4500);
        allureReporter.endStep("End Test step for Valid leaflet Details when Batch is created")
    });

})