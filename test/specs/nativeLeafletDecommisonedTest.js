const leafLetDecommissioned= require('../pageObjectsNativeApp/nativeLeafLetDecommisioned')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')

describe('ePI Native App Mobile Leaflet Automation Testing', () => {
    
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('Decommisoned_LeafletDisplayed_Setup')
    allureReporter.addDescription('Check that Decommisioned Leaflet displayed')
    allureReporter.startStep("Decommisioned leaflet Details are Populated when Batch is created")

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

    it('should open Decomissioned LeafLet Batch Info Page', async() => {
        allureReporter.addFeature('LeafLet Decommisioned Batch Info Data');
          //Wait timeout for Leaflet to be displayed
        await leafLetDecommissioned.waitTimeoutTime;
        await browser.pause(4000);
         //display details on Decommisoned Leaflet for create batch scenario
        await leafLetDecommissioned.leafletDecommisonedDetailsFetch();
        await browser.pause(4500);
        allureReporter.endStep("End Test step for Decommisioned leaflet Details when Batch is created")

    });

});