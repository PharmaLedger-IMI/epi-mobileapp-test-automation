const leafletEPISMPCUpload=require('../pageObjectsNativeApp/leafletEPISPMCUploadPage')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')


describe('ePI Native App Mobile Leaflet Automation Testing', () => {

    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('EPI_SMPC_LeafletDisplayed_Setup')
    allureReporter.addDescription('Check that EPI_SMPC Leaflet displayed')
    allureReporter.startStep("EPI_SMPC leaflet Details are Populated when EPI_SMPC Leaflets for Batch is created")
    
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

    it('should open Recalled LeafLet Batch Info Page', async () => {
        allureReporter.addFeature('LeafLet Recalled Batch Info Data');
       //Wait timeout for Leaflet to be displayed
        await leafletEPISMPCUpload.waitTimeout;
        await browser.pause(4000);
         //display details on EPI_SMPC Leaflet when EPI_SMPC Leaflet for batch scenario created
        await leafletEPISMPCUpload.leafletEPIAndSMPCUploadDetailsFetch();
        await browser.pause(4500); 

});

});