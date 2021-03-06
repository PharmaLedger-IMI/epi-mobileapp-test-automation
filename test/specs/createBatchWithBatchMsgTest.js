const createBatchWithBatchMsg = require('../pageObjectsNativeApp/createBatchWithBatchMsg')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')


describe('023_Create a batch with batch message', () => {

    allureReporter.addFeature('Create Batch with Batch Message')
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('BatchRecallAndBatchMessage_11_2')
    allureReporter.addDescription('Check that Leaflet are displayed with Batch Message')
    allureReporter.startStep("Leaflet Details are Populated with Batch Message Displayed")


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

    it('Mobile App - should display LeafLet details with Batch Message', async () => {
        allureReporter.addFeature('Leaflet displayed for Create Batch with Batch Message');
        //Wait timeout for Leaflet to be displayed
        await createBatchWithBatchMsg.waitTimeout();
        await timeoutWait.setTimeoutWait(3);
        //display details on Leaflet for recalled batch scenario
        await createBatchWithBatchMsg.createBatchWithBatchMsgDetailsFetch();
        await timeoutWait.setTimeoutWait(3);
        await createBatchWithBatchMsg.createBatchWithBatchMsgLeafletDetailsFetch();
        await timeoutWait.setTimeoutWait(3);

    });

});
