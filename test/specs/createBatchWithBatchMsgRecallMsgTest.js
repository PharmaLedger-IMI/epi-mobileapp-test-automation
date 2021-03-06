const createBatchWithBatchMsgRecallMsg = require('../pageObjectsNativeApp/createBatchWithBatchMsgRecallMsg')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')

describe('025_Create a batch to set batch recall and batch message', () => {

    allureReporter.addFeature('Create Batch With Batch Message and Recall Message')
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('BatchRecallAndBatchMessage_11_4')
    allureReporter.addDescription('Check that Leaflet are displayed for batch is recalled and Batch Message')
    allureReporter.startStep("Recalled Leaflet Details are Populated With batch is recalled and Batch Message")


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

    it('Mobile App - should display LeafLet with Batch Message and Recall Message Info Page', async () => {
        allureReporter.addFeature('Leaflet displayed for Create Batch With Batch Message and Recall Message');
        //Wait timeout for Leaflet to be displayed
        await createBatchWithBatchMsgRecallMsg.waitTimeout();
        await timeoutWait.setTimeoutWait(3);
        //display details on Leaflet for recalled batch scenario
        await createBatchWithBatchMsgRecallMsg.createBatchWithBatchRecallMsgDetailsFetch();
        await timeoutWait.setTimeoutWait(3);
        await createBatchWithBatchMsgRecallMsg.createBatchWithBatchRecallMsgLeafletDetailsFetch();
        await timeoutWait.setTimeoutWait(3);

    });

});
