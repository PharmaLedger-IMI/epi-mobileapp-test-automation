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
        commonFunctions.patientSettingsScanTest();

    });

    it('should open EPI LeafLet Batch Info Page', async () => {
        allureReporter.addFeature('EPI LeafLet for Batch Info Data');
         //Wait timeout for Leaflet to be displayed
        await leafletEPIUpload.waitTimeout;
        await timeWait.setTimeoutwait(4);
         //display details on EPI Leaflet when EPI Leaflet for batch scenario created
        await leafletEPIUpload.leafletEPIUploadDetailsFetch();
        await timeWait.setTimeoutwait(4);
       

});

});