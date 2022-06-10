const update10SNInDecommssionedSNTest = require('../pageObjectsNativeApp/update10SNInDecommissionedSN')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')
// const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('050_Edit batch to remove 10 serial numbers from valid and upload 10 in decommissioned serial numbers', () => {

    allureReporter.addFeature('Edit batch to remove 10 serial numbers from valid and upload 10 in decommissioned serial numbers')
    allureReporter.addTestId("SerialNumberChecks_11");
    allureReporter.addSeverity('Critical');
    allureReporter.addDescription('Check that Leaflet is displayed for to remove 10 serial numbers from valid and upload 10 in decommissioned serial numbers')
    allureReporter.startStep("Recalled Leaflet Details are Populated after to remove 10 serial numbers from valid and upload 10 in decommissioned serial numbers")


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

    it('Mobile App - should open LeafLet for to remove 10 serial numbers from valid and upload 10 in decommissioned serial numbers', async () => {
        allureReporter.addFeature('Leaflet displayed for to remove 10 serial numbers from valid and upload 10 in decommissioned serial numbers');
        //Wait timeout for Leaflet to be displayed
        await update10SNInDecommssionedSNTest.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await update10SNInDecommssionedSNTest.update10SNDecommissionedSNDetailsFetch();
        await timeoutWait.setTimeoutWait(3);
        await update10SNInDecommssionedSNTest.update10SNDecommissionedSNLeafletDetailsFetch();
        await timeoutWait.setTimeoutWait(3);

    });

});
