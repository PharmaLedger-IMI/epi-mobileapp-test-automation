const updateBatchToResetSNTest = require('../pageObjectsNativeApp/updateBatchToResetSerialNumber')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')


describe('049_Edit batch to reset the serial Numbers', () => {

    allureReporter.addFeature('Edit batch to reset the serial Numbers')
    allureReporter.addTestId("SerialNumberChecks_11_3");
    allureReporter.addSeverity('Critical');
    allureReporter.addDescription('Check that batch Leaflet is displayed for to reset the serial Numbers')
    allureReporter.startStep("Recalled Leaflet Details are Populated after to reset the serial Numbers")


    it('Mobile App-should open Patient Settings and Scan 2D Matrix', async () => {
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

    it('Mobile App-should open LeafLet for to reset the serial Numbers', async () => {
        allureReporter.addFeature('Recalled Batch Leaflet display Info Data');
        //Wait timeout for Leaflet to be displayed 
        await updateBatchToResetSNTest.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await updateBatchToResetSNTest.updateBatchToResetSerialNumberDetailsFetch();
        await timeoutWait.setTimeoutWait(3);
        await updateBatchToResetSNTest.updateBatchToResetSerialNumberLeafletDetailsFetch();
        await timeoutWait.setTimeoutWait(3);

    });

});
