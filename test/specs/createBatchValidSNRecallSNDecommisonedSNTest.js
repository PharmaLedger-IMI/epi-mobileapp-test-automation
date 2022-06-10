const createBatchValidSNRecallSNDecommisonedSN = require('../pageObjectsNativeApp/createBatchValidSNRecalledSNDecommissionedSN')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')


describe('046_Create a batch and enable serial number verification and set valid, recalled and decommissioned serial numbers', () => {

    allureReporter.addFeature('Create a batch and enable serial number verification and set valid, recalled and decommissioned serial numbers')
    allureReporter.addTestId("SerialNumberChecks_7");
    allureReporter.addSeverity('Critical');
    allureReporter.addDescription('Check that Leaflet is displayed for enable serial number verification and set valid, recalled and decommissioned serial numbers')
    allureReporter.startStep("Leaflet Details are Populated after enable serial number verification and set valid, recalled and decommissioned serial numbers")


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

    it('Mobile App - should open LeafLet for enable serial number verification and set valid, recalled and decommissioned serial numbers', async () => {
        allureReporter.addFeature('Leaflet displayed for Create a batch and enable serial number verification and set valid, recalled and decommissioned serial numbers');
        //Wait timeout for Leaflet to be displayed
        await createBatchValidSNRecallSNDecommisonedSN.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await createBatchValidSNRecallSNDecommisonedSN.createBatchValidSNRecalledSNDecommissionedSNDetailsFetch();
        await timeoutWait.setTimeoutWait(3);
        await createBatchValidSNRecallSNDecommisonedSN.createBatchValidSNRecalledSNDecommissionedSNLeafletDetailsFetch();
        await timeoutWait.setTimeoutWait(3);

    });

});
