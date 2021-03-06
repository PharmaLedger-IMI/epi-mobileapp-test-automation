const editBatchRecallSerailizedSN = require('../pageObjectsNativeApp/batchRecallWithSerializedSn')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')


describe('018_Edit batch to set batch recall with valid SN', () => {

    allureReporter.addFeature('BatchRecall with serialized SN Valid Details')
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('BatchRecallAndBatchMessage_9_1')
    allureReporter.addDescription('Check that batch is recalled with serialized Leaflet are displayed')
    allureReporter.startStep("Leaflet Details are Populated as batch is Recalled Message")


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

    it('Mobile App - should display LeafLet as Batch is Recalled Message with valid SN', async () => {
        allureReporter.addFeature('Leaflet displayed for serialized batch to set batch recall with valid SN');
        //Wait timeout for Leaflet to be displayed
        await editBatchRecallSerailizedSN.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await editBatchRecallSerailizedSN.batchRecallWithSerailizedDetailsFetch();
        await timeoutWait.setTimeoutWait(2);
        await editBatchRecallSerailizedSN.batchRecallWithSerailizedLeafletDetailsFetch();
        await timeoutWait.setTimeoutWait(2);

    });

});
