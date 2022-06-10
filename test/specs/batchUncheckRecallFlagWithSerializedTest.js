const editBatchUncheckRecallSerailized = require('../pageObjectsNativeApp/batchUncheckRecallFlagWithSerialized')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')


describe('019_Edit batch to undo batch recall with valid SN', () => {

    allureReporter.addFeature('Batch Uncheck Recall Flag for Serialized')
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('BatchRecallAndBatchMessage_9_2')
    allureReporter.addDescription('Uncheck the Recall Flag in batch and Leaflet details are displayed')
    allureReporter.startStep("Leaflet Details are Populated for uncheck Recall Flag for serialized")


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

    it('Mobile App - should dsiplay LeafLet details for serialized without Batch Recalled Message', async () => {
        allureReporter.addFeature('Leaflet displayed for Batch Uncheck Recall Flag for Serialized');
        //Wait timeout for Leaflet to be displayed
        await editBatchUncheckRecallSerailized.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await editBatchUncheckRecallSerailized.batchUncheckRecallFlagWithSerializedDetailsFetch();
        await timeoutWait.setTimeoutWait(2);
        await editBatchUncheckRecallSerailized.batchUncheckRecallFlagWithSerializedLeafletDataFetch();
        await timeoutWait.setTimeoutWait(2);

    });

});
