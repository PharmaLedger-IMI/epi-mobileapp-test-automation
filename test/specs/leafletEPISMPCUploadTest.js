const leafletEPISMPCUpload=require('../pageObjectsNativeApp/leafletEPISPMCUploadPage')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeWait=require('../utils/setTimeout')
const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('ePI Native App Mobile Leaflet Automation Testing', () => {

    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('EPI_SMPC_LeafletDisplayed_Setup')
    allureReporter.addDescription('Check that EPI_SMPC Leaflet displayed')
    allureReporter.startStep("EPI_SMPC leaflet Details are Populated when EPI_SMPC Leaflets for Batch is created")
    
    it('should open Patient Setting Scan Page', async() => {
        commonFunctions.patientSettingsScanTest();

    });

    it('should open Recalled LeafLet Batch Info Page', async () => {
        allureReporter.addFeature('LeafLet Recalled Batch Info Data');
       //Wait timeout for Leaflet to be displayed
        await leafletEPISMPCUpload.waitTimeout;
        await timeWait.setTimeoutwait(4);
         //display details on EPI_SMPC Leaflet when EPI_SMPC Leaflet for batch scenario created
        await leafletEPISMPCUpload.leafletEPIAndSMPCUploadDetailsFetch();
        await timeWait.setTimeoutwait(4);

});

});