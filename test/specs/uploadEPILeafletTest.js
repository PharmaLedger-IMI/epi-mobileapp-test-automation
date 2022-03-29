const leafletEPIUpload=require('../pageObjectsNativeApp/uploadEpiLeaflet')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeWait=require('../utils/setTimeout')
const commonFunctions=require('../utils/commonutilitiesFunctions')


describe('ePI Native App Mobile Leaflet Automation Testing', () => {
    
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('EPI_LeafletDisplayed_Setup')
    allureReporter.addDescription('Check that EPI Leaflet displayed')
    allureReporter.startStep("EPI leaflet Details are Populated when EPI Leaflets for Batch is created")

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

    it('should open EPI LeafLet Batch Info Page', async () => {
        allureReporter.addFeature('EPI LeafLet for Batch Info Data');
         //Wait timeout for Leaflet to be displayed
        await leafletEPIUpload.waitTimeout;
        await timeWait.setTimeoutwait(4);
         //display details on EPI Leaflet when EPI Leaflet for batch scenario created
        await leafletEPIUpload.uploadEPILeafletDetailsFetch();
        await timeWait.setTimeoutwait(4);
       

});

});