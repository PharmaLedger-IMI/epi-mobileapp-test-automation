const leafletEPIUpload=require('../pageObjectsNativeApp/leafletEpiUploadPage')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')


describe('ePI Native App Mobile Leaflet Automation Testing', () => {
    
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('EPI_LeafletDisplayed_Setup')
    allureReporter.addDescription('Check that EPI Leaflet displayed')
    allureReporter.startStep("EPI leaflet Details are Populated when EPI Leaflets for Batch is created")

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

    it('should open EPI LeafLet Batch Info Page', async () => {
        allureReporter.addFeature('EPI LeafLet for Batch Info Data');
         //Wait timeout for Leaflet to be displayed
        await leafletEPIUpload.waitTimeout;
        await browser.pause(4000);
         //display details on EPI Leaflet when EPI Leaflet for batch scenario created
        await leafletEPIUpload.leafletEPIUploadDetailsFetch();
        await browser.pause(4500); 
        allureReporter.endStep("End Test step for EPI leaflet is displayed")


});

});