const createBatchWithValidSnExpiryDateRecallMsg = require('../pageObjectsNativeApp/createBatchValidSnExpiryDateRecallMsg')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')

describe('026_Create a batch with valid SN, expiry date and recall message', () => {

    allureReporter.addFeature('Create Batch With Valid SN ExpiryDate and Recall Message')
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('BatchRecallAndBatchMessage_12_1')
    allureReporter.addDescription('Check that Leaflet are displayed for batch is Created with Valid ExpiryDate,SN and Recall Message')
    allureReporter.startStep("Leaflet Details are Populated with Message as Expired Date on pack,SN and Recall Message Displayed")


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

    it('Mobile App - should display LeafLet Details with Valid SN,ExpiryDate and Batch is recalled Message', async () => {
        allureReporter.addFeature('Leaflet displayed for Create Batch With Valid SN ExpiryDate and Recall Message');
        //Wait timeout for Leaflet to be displayed
        await createBatchWithValidSnExpiryDateRecallMsg.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await createBatchWithValidSnExpiryDateRecallMsg.createBatchValidSNExpiryDateRecallMsgDetailsFetch();
        await timeoutWait.setTimeoutWait(3);
        await createBatchWithValidSnExpiryDateRecallMsg.createBatchValidSNExpiryDateRecallMsgLeafletDetailsFetch();
        await timeoutWait.setTimeoutWait(3);

    });

});
