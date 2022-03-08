const leafLetRecalled=require('../pageObjectsNativeApp/leafLetNotDisplayedRecalled')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')

describe('ePI Native Leaflet Valid Testing', () => {

    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('RecalledBatch_LeafletNotDisplayed_Setup')
    allureReporter.addDescription('Check that Recalled Batch Leaflet Not displayed')
    allureReporter.startStep("Recalled Batch leaflet Details are Not Populated when Recalled Batch is Unchecked")

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

    it('should open Recalled Batch Leaflet not displayed', async() => {
        
        allureReporter.addFeature('LeafLet Recalled Batch Leaflet not displayed Data');
        //Wait timeout for Leaflet to be displayed
        await leafLetRecalled.waitTimeout;
        await browser.pause(4000);
        //display details on Recalled Batch Leaflet Not displayed when Recalled batch scenario Unchecked
        await leafLetRecalled.leafletRecalledDetailsFetch();
        await browser.pause(4500); 
        allureReporter.endStep("End Test step for Recalled Batch leaflet not displayed")

    });

});