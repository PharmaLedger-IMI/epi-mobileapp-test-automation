const createBatchWithoutEpiUpdateValidSNTest = require('../pageObjectsNativeApp/createBatchWithoutEpiUpdateValidSN')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')

describe('056_Update product information', () => {

        allureReporter.addFeature('Update product information')
        allureReporter.addSeverity('Critical');
        allureReporter.addTestId('ProductInfoUpdate_1_1')
        allureReporter.addDescription('Check that Leaflet details are displayed without Epi Leaflet and with Valid SN')
        allureReporter.startStep("leaflet Details are Populated when without Epi Leaflet and with Valid SN")

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

        it('Mobile App - should display LeafLet details without Epi Leaflet and with Valid SN', async () => {
                allureReporter.addFeature('LeafLet displayed Update product information');
                //wait timeout for Leaflet to be displayed
                await createBatchWithoutEpiUpdateValidSNTest.waitTimeout();
                await timeoutWait.setTimeoutWait(3);
                //display details on Add_productBatch Leaflet when Add_productBatch Leaflet for batch scenario created
                await createBatchWithoutEpiUpdateValidSNTest.createBatchWithoutEpiUpdateValidSNDetailsFetch();
                await timeoutWait.setTimeoutWait(3);
                await createBatchWithoutEpiUpdateValidSNTest.createBatchWithoutEpiUpdateValidSNLeafletDataFetch();
                await timeoutWait.setTimeoutWait(3);

        });

});