const uncheckSNRecallInProductAndNotRecalledInBatch = require('../pageObjectsNativeApp/uncheckSNRecallInProductAndNotRecalledInBatch')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')


describe('085_Edit product to uncheck SN is in recall and edit batch to reset recalled serial number', () => {

    allureReporter.addFeature('Edit product to uncheck SN is in recall and edit batch to reset recalled serial number')
    allureReporter.addTestId("ProductDisplayEpiFlag_4_5");
    allureReporter.addSeverity('Critical');
    allureReporter.addDescription('Check that Leaflet is displayed for to uncheck SN is in recall and edit batch to reset recalled serial number')
    allureReporter.startStep("Recalled Leaflet Details are Populated after to uncheck SN is in recall and edit batch to reset recalled serial number")


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

    it('Mobile App - should open LeafLet to uncheck SN is in recall and edit batch to reset recalled serial number', async () => {
        allureReporter.addFeature('Leaflet displayed for uncheck SN is in recall and edit batch to reset recalled serial number');
        //Wait timeout for Leaflet to be displayed
        await uncheckSNRecallInProductAndNotRecalledInBatch.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await uncheckSNRecallInProductAndNotRecalledInBatch.unCheckSNRecallInProductAndNotRecalledInBatchDetailsFetch();
        await timeoutWait.setTimeoutWait(3);
        await uncheckSNRecallInProductAndNotRecalledInBatch.unCheckSNRecallInProductAndNotRecalledInBatchLeafletDetailsFetch();
        await timeoutWait.setTimeoutWait(3);
        await uncheckSNRecallInProductAndNotRecalledInBatch.getLeafletTypesAndLevel();
        await timeoutWait.setTimeoutWait(3);

    });

});
