const nativeLeafLetWrong= require('../pageObjectsNativeApp/nativeLeafletWrong')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')

describe('ePI Native App Mobile Leaflet Automation Testing', () => {
    
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('Wrong_LeafletDisplayed_Setup')
    allureReporter.addDescription('Check that Wrong Leaflet displayed')
    allureReporter.startStep("Wrong leaflet Details are Populated when Batch is created")

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

    it('should open Wrong LeafLet Batch Info Page', async() => {
        allureReporter.addFeature('LeafLet Wrong Batch Info Data');
        await nativeLeafLetWrong.waitTimeout();
        //Wait timeout for Leaflet to be displayed
        await browser.pause(4000);
         //display details on wrong Leaflet for create batch scenario
        await nativeLeafLetWrong.leafletWrongDetailsFetch();
        await browser.pause(5000);
        allureReporter.endStep("End Test step for Wrong leaflet Details when Batch is created")
    });

});