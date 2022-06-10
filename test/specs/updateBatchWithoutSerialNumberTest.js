const updateBatchWithoutSNTest = require('../pageObjectsNativeApp/updateBatchWithoutSerialNumber')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')


describe('051_Edit batch to update without serial number', () => {

    allureReporter.addFeature('Edit batch to update without serial number')
    allureReporter.addTestId("SerialNumberChecks_11_1");
    allureReporter.addSeverity('Critical');
    allureReporter.addDescription('Check that Leaflet is displayed for to update without serial number')
    allureReporter.startStep("Recalled Leaflet Details are Populated after to update without serial number")


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

    it('Mobile App - should open LeafLet for Recalled Batch Info Page', async () => {
        allureReporter.addFeature('Leaflet displayed for Edit batch to update without serial number');
        //Wait timeout for Leaflet to be displayed
        await updateBatchWithoutSNTest.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await updateBatchWithoutSNTest.updateBatchWithoutSerialNumberDetailsFetch();
        await timeoutWait.setTimeoutWait(3);
        await updateBatchWithoutSNTest.updateBatchWithoutSerialNumberLeafletDetailsFetch();
        await timeoutWait.setTimeoutWait(3);

    });

});
