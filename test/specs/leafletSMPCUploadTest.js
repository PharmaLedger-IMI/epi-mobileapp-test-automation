const leafletSMPCUpload=require('../pageObjectsNativeApp/leafletSMPCUploadPage')
const allureReporter = require('@wdio/allure-reporter').default
const LeafletFetchData = require('../utils/utilitiesReuseFunctions')
const testData = require('../testdata/testExpectations.json')
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const expect = require('chai').expect

describe('ePI Native App Mobile Leaflet Automation Testing', () => {

    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('SMPC_LeafletDisplayed_Setup')
    allureReporter.addDescription('Check that SMPC Leaflet displayed')
    allureReporter.startStep("SMPC leaflet Details are Populated when SMPC Leaflets for Batch is created")
    
    
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

    it('should open SMPC LeafLet Batch Info Page', async () => {
        allureReporter.addFeature('LeafLet SMPC Info Data');
        await leafletSMPCUpload.waitTimeout;
       //Wait timeout for Leaflet to be displayed
        await browser.pause(4000);
         //display details on Leaflet Type SMPC Leaflet when SMPC Leaflet for batch scenario created
        await leafletSMPCUpload.leafletSMPCUploadDetailsFetch();
        await browser.pause(4500); 
        allureReporter.endStep("End Test step for SMPC leaflet Details")

});

});
