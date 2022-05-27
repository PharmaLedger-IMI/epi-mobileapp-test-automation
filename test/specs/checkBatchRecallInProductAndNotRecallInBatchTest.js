const checkBatchRecallInProductAndNotRecallInBatchTest = require('../pageObjectsNativeApp/checkBatchRecallInProductAndNotRecallInBatch')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')


describe('061_Edit product to check batch is recalled and edit batch to uncheck batch recall', () => {

        allureReporter.addFeature('Edit product to check batch is recalled and edit batch to uncheck batch recall')
        allureReporter.addSeverity('Critical');
        allureReporter.addTestId('ProductDisplayEpiFlag_1_1')
        allureReporter.addDescription('Check that Leaflet details are displayed for batch is recalled and edit batch to uncheck batch recall')
        allureReporter.startStep("leaflet Details are Populated when batch is recalled and edit batch to uncheck batch recall")

        it('Mobile App-should set Patient Setting and Scan 2D Matrix', async () => {

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

        it('Mobile App-should display LeafLet details for batch is recalled and edit batch to uncheck batch recall', async () => {
                allureReporter.addFeature('LeafLet Recalled Batch Info Data');
                //wait timeout for Leaflet to be displayed
                await checkBatchRecallInProductAndNotRecallInBatchTest.waitTimeout();
                await timeoutWait.setTimeoutWait(3);
                //display details on Add_productBatch Leaflet when Add_productBatch Leaflet for batch scenario created
                await checkBatchRecallInProductAndNotRecallInBatchTest.checkBatchRecallInProductAndNotRecalledInBatchDetailsFetch();
                await timeoutWait.setTimeoutWait(3);
                await checkBatchRecallInProductAndNotRecallInBatchTest.checkBatchRecallInProductAndNotRecalledInBatchLeafletDetailsFetch();
                await timeoutWait.setTimeoutWait(3);
                await checkBatchRecallInProductAndNotRecallInBatchTest.getLeafletTypesAndLevel();
                await timeoutWait.setTimeoutWait(3);

        });

});