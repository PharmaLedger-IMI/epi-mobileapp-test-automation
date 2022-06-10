const checkSmpcDeletedFromProductWithExpiredBatchTest = require('../pageObjectsNativeApp/checkSmpcDeletedFromProductWithExpiredBatch')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')


describe('078_Edit product to check batch is expired and delete smpc. Edit batch to have expired date', () => {

    allureReporter.addFeature('Edit product to check batch is expired and delete smpc. Edit batch to have expired date')
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('ProductDisplayEpiFlag_3_3')
    allureReporter.addDescription('Check that Leaflet are displayed for  to check batch is expired and delete smpc. Edit batch to have expired date')
    allureReporter.startStep("Leaflet Details are Populated  to check batch is expired and delete smpc. Edit batch to have expired date")


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

    it('Mobile App - should display LeafLet to check batch is expired and delete smpc. Edit batch to have expired date', async () => {
        allureReporter.addFeature('Leaflet displayed for Edit product to check batch is expired and delete smpc. Edit batch to have expired date');
        //Wait timeout for Leaflet to be displayed
        await checkSmpcDeletedFromProductWithExpiredBatchTest.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await checkSmpcDeletedFromProductWithExpiredBatchTest.checkSmpcDeletedFromProductWithExpiredBatchDetailsFetch();
        await timeoutWait.setTimeoutWait(3);
        await checkSmpcDeletedFromProductWithExpiredBatchTest.checkSmpcDeletedFromProductWithExpiredBatchLeafletDetailsFetch();
        await timeoutWait.setTimeoutWait(3);


    });

});
