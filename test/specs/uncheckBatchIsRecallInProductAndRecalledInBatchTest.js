const uncheckBatchIsRecallInProductAndRecalledInBatchTest = require('../pageObjectsNativeApp/uncheckBatchIsRecallInProductAndRecalledInBatch')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')
// const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('064_Edit product to uncheck batch is recalled and edit batch to set recall message', () => {

    allureReporter.addFeature('Edit product to uncheck batch is recalled and edit batch to set recall message')
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('ProductDisplayEpiFlag_1_4')
    allureReporter.addDescription('Check that Leaflet are displayed for uncheck batch is recalled and edit batch to set recall message')
    allureReporter.startStep("Leaflet Details are Populated as uncheck batch is recalled and edit batch to set recall message")


    it('Mobile App-should set Patient Setting and Scan 2D Matrix', async () => {
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

    it('Mobile App-should display LeafLet for uncheck batch is recalled and edit batch to set recall message', async () => {
        allureReporter.addFeature('Recalled Batch Leaflet display Info Data');
        //Wait timeout for Leaflet to be displayed 
        await uncheckBatchIsRecallInProductAndRecalledInBatchTest.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await uncheckBatchIsRecallInProductAndRecalledInBatchTest.uncheckBatchIsRecallInProductAndRecalledInBatchFetch();
        await timeoutWait.setTimeoutWait(4);

    });

});
