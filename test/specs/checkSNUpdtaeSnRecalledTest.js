const leafletSNRecalledBatch=require('../pageObjectsNativeApp/checkSnUpdateSNRecalled')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeWait=require('../utils/setTimeout')
const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('ePI Native App Mobile Leaflet Automation Testing', () => {

    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('SerialNumberRecalled_LeafletDisplayed_Setup')
    allureReporter.addDescription('Check that SerialNumberRecalled Leaflet displayed')
    allureReporter.startStep("SerialNumberRecalled leaflet Details are Populated when Batch is created")
    
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

    it('should open Serila Number Recalled LeafLet Batch Info Page', async() => {
        allureReporter.addFeature('LeafLet Serial Number Recalled Batch Info Data');
         //Wait timeout for Leaflet to be displayed
        await leafletSNRecalledBatch.waitTimeout();
        await timeWait.setTimeoutwait(4);
         //display details on Serail Number Recalled Leaflet for Serial Number batch scenario
        await leafletSNRecalledBatch.leafletSNRecalledDetailsFetch();
        await timeWait.setTimeoutwait(4);
});

});