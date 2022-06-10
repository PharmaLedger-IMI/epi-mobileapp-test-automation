const scanThePreviousBatchTest = require('../pageObjectsNativeApp/scanPreviousBatch')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')

describe('064_Scan previous batch to see the leaflet at product level', () => {

        allureReporter.addFeature('Create Batch')
        allureReporter.addSeverity('Critical');
        allureReporter.addTestId('ProductInfoUpdate_4_3')
        allureReporter.addDescription('Check that Leaflet details are displayed for batch to see the leaflet at product level')
        allureReporter.startStep("leaflet Details are Populated when batch to see the leaflet at product level")

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

        it('Mobile App - should display LeafLet details for batch to see the leaflet at product level', async () => {
                allureReporter.addFeature('LeafLet displayed for batch to see the leaflet at product level');
                //wait timeout for Leaflet to be displayed
                await scanThePreviousBatchTest.waitTimeout();
                await timeoutWait.setTimeoutWait(3);
                //display details on Add_productBatch Leaflet when Add_productBatch Leaflet for batch scenario created
                await scanThePreviousBatchTest.scanPreviousBatchDetailsFetch();
                await timeoutWait.setTimeoutWait(3);
                await scanThePreviousBatchTest.scanPreviousBatchLeafletDetailsFetch();
                await timeoutWait.setTimeoutWait(3);
                await scanThePreviousBatchTest.getLeafletTypesAndLevel();
                await timeoutWait.setTimeoutWait(3);

        });

});