const updateBatchDecommissionedRecalledSNTest = require('../pageObjectsNativeApp/updateBatchWithDecommissionedAndRecalledSN')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout');
const { all } = require('deepmerge');
// const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('054_Edit batch to update with decommissioned and recalled serial number', () => {

    allureReporter.addFeature('Edit batch to update with decommissioned and recalled serial number')
    allureReporter.addTestId("SerialNumberChecks_11_4");
    allureReporter.addSeverity('Critical');
    allureReporter.addDescription('Check that Leaflet is displayed for to update with decommissioned and recalled serial number')
    allureReporter.startStep("Recalled Leaflet Details are Populated after to update with decommissioned and recalled serial number")


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

    it('Mobile App - should open LeafLet to update with decommissioned and recalled serial number', async () => {
        allureReporter.addFeature('Leaflet displayed for update with decommissioned and recalled serial number');
        //Wait timeout for Leaflet to be displayed
        await updateBatchDecommissionedRecalledSNTest.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await updateBatchDecommissionedRecalledSNTest.updateBatchWithDecommissionedAndRecalledSNDetailsFetch();
        await timeoutWait.setTimeoutWait(3);
        await updateBatchDecommissionedRecalledSNTest.updateBatchWithDecommissionedAndRecalledSNLeafletDetailsFetch();
        await timeoutWait.setTimeoutWait(3);

    });

});
