const uncheckSmpcDeletedFromProductWithRecalledBatchTest = require('../pageObjectsNativeApp/uncheckSmpcDeletedFromProductWithRecalledBatch')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')


describe('070_Edit product to uncheck batch recall and delete SMPC and edit batch to have batch recall', () => {

    allureReporter.addFeature('Edit product to uncheck batch recall and delete SMPC and edit batch to have batch recall')
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('ProductDisplayEpiFlag_1_6')
    allureReporter.addDescription('Check that Leaflet are displayed for to uncheck batch recall and delete SMPC and edit batch to have batch recall')
    allureReporter.startStep("Leaflet Details are Populated to uncheck batch recall and delete SMPC and edit batch to have batch recall")


    it('Mobile App - should set Patient Setting and Scan 2D Matrix', async () => {
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

    it('Mobile App - should display LeafLet for uncheck batch is recalled and edit batch to set recall message', async () => {
        allureReporter.addFeature('Leaflet displayed for uncheck batch is recalled and edit batch to set recall message');
        //Wait timeout for Leaflet to be displayed
        await uncheckSmpcDeletedFromProductWithRecalledBatchTest.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await uncheckSmpcDeletedFromProductWithRecalledBatchTest.uncheckSmpcDeletedFromProductWithRecalledBatchFetch();
        await timeoutWait.setTimeoutWait(4);

    });

});
