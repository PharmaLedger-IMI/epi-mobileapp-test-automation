const uncheckBatchIsRecallInProductAndBatchTest = require('../pageObjectsNativeApp/unCheckBatchRecallInProduct&Batch')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')


describe('065_Edit product to uncheck batch is recalled and edit batch to uncheck batch recall', () => {

    allureReporter.addFeature('Edit product to uncheck batch is recalled and edit batch to uncheck batch recall')
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('ProductDisplayEpiFlag_1_5')
    allureReporter.addDescription('Check that Leaflet are displayed for to uncheck batch is recalled and edit batch to uncheck batch recall')
    allureReporter.startStep("Leaflet Details are Populated for to uncheck batch is recalled and edit batch to uncheck batch recall")


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

    it('Mobile App-should display LeafLet for to uncheck batch is recalled and edit batch to uncheck batch recall', async () => {
        allureReporter.addFeature('Recalled Batch Leaflet display Info Data');
        //Wait timeout for Leaflet to be displayed 
        await uncheckBatchIsRecallInProductAndBatchTest.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await uncheckBatchIsRecallInProductAndBatchTest.unCheckBatchRecallInProductAndBatchDetailsFetch();
        await timeoutWait.setTimeoutWait(3);
        await uncheckBatchIsRecallInProductAndBatchTest.unCheckBatchRecallInProductAndBatchLeafletDetailsFetch();
        await timeoutWait.setTimeoutWait(3);
        await uncheckBatchIsRecallInProductAndBatchTest.getLeafletTypesAndLevel();
        await timeoutWait.setTimeoutWait(3);

    });

});
