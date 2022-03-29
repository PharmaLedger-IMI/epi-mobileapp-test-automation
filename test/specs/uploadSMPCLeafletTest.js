const leafletSMPCUpload=require('../pageObjectsNativeApp/uploadSMPCLeaflet')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const expect = require('chai').expect
const timeWait=require('../utils/setTimeout')
const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('ePI Native App Mobile Leaflet Automation Testing', () => {

    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('SMPC_LeafletDisplayed_Setup')
    allureReporter.addDescription('Check that SMPC Leaflet displayed')
    allureReporter.startStep("SMPC leaflet Details are Populated when SMPC Leaflets for Batch is created")
    
    
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

    it('should open SMPC LeafLet Batch Info Page', async () => {
        allureReporter.addFeature('LeafLet SMPC Info Data');
        await leafletSMPCUpload.waitTimeout;
       //Wait timeout for Leaflet to be displayed
       await timeWait.setTimeoutwait(4);
       //display details on Leaflet Type SMPC Leaflet when SMPC Leaflet for batch scenario created
        await leafletSMPCUpload.leafletSMPCUploadDetailsFetch();
        await timeWait.setTimeoutwait(4);

});

});
