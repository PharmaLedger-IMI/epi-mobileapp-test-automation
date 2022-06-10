const checkSmpcDeletedFromProductWithRecalledBatchTest = require('../pageObjectsNativeApp/checkSmpcDeletedFromProductWithRecalledBatch')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')


describe('067_Edit product to check batch is recalled and delete smpc. Edit batch to have recall message', () => {

    allureReporter.addFeature('Edit product to check batch is recalled and delete smpc. Edit batch to have recall message')
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('ProductDisplayEpiFlag_1_3')
    allureReporter.addDescription('Check that Leaflet are displayed for check batch is recalled and delete smpc. Edit batch to have recall message')
    allureReporter.startStep("Leaflet Details are Populated as check batch is recalled and delete smpc. Edit batch to have recall message")


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

    it('Mobile App - should display LeafLet for check batch is recalled and delete smpc. Edit batch to have recall message', async () => {
        allureReporter.addFeature('Leaflet displayed for Edit product to check batch is recalled and delete smpc. Edit batch to have recall message');
        //Wait timeout for Leaflet to be displayed
        await checkSmpcDeletedFromProductWithRecalledBatchTest.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await checkSmpcDeletedFromProductWithRecalledBatchTest.checkSmpcDeletedFromProductWithRecalledBatchDetailsFetch();
        await timeoutWait.setTimeoutWait(3);
        await checkSmpcDeletedFromProductWithRecalledBatchTest.checkSmpcDeletedFromProductWithRecalledBatchLeafletDetailsFetch();
        await timeoutWait.setTimeoutWait(3);
        await checkSmpcDeletedFromProductWithRecalledBatchTest.getLeafletTypesAndLevel();
        await timeoutWait.setTimeoutWait(3);

    });

});
