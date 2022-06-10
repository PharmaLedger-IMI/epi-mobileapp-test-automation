const batchWithExpiryDateRecallMsgInvalidSn = require('../pageObjectsNativeApp/batchWithExpiredDateRecallMsgInvalidSn')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')


describe('028_Edit batch to set expired date and invalid serial number', () => {

    allureReporter.addFeature("Edit batch to set expired date, pass invalid serial number and Recall Message")
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId("BatchRecallAndBatchMessage_12_3");
    allureReporter.addDescription('Check Leaflet are displayed for expired date, pass invalid serial number and Recall Message')
    allureReporter.startStep("Leaflet Details are Populated for expiry date on pack, failed to Validate SN and Recall Message displayed")


    it('Mobile App - should open Patient Settings and Scan 2D Matrix', async () => {
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

    it('Mobile App - should open LeafLet for expired date, pass invalid serial number and Recall Message', async () => {
        allureReporter.addFeature('Leaflet displayed for Edit batch to set expired date, pass invalid serial number and Recall Message');
        //Wait timeout for Leaflet to be displayed
        await batchWithExpiryDateRecallMsgInvalidSn.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await batchWithExpiryDateRecallMsgInvalidSn.batchWithExpiryDateRecallMsgInvalidSNDetailsFetch();
        await timeoutWait.setTimeoutWait(3);
        await batchWithExpiryDateRecallMsgInvalidSn.batchWithExpiryDateRecallMsgInvalidSNLeafletDetailsFetch();
        await timeoutWait.setTimeoutWait(3);

    });

});
