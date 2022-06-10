const checkBatchIsExpiredInProductAndBatchTest = require('../pageObjectsNativeApp/checkBatchIsExpiredInProductAndBatch')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')


describe('076_Edit Product to check batch is expired and edit batch to set expired date', () => {

        allureReporter.addFeature('Edit Product to check batch is expired and edit batch to set expired date')
        allureReporter.addSeverity('Critical');
        allureReporter.addTestId('ProductDisplayEpiFlag_3_1')
        allureReporter.addDescription('Check that Leaflet details are displayed to check batch is expired and edit batch to set expired date')
        allureReporter.startStep("leaflet Details are Populated when batch is recalled to check batch is expired and edit batch to set expired date")

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

        it('Mobile App - should display LeafLet details to check batch is expired and edit batch to set expired date', async () => {
                allureReporter.addFeature('LeafLet displayed for Edit Product to check batch is expired and edit batch to set expired date');
                //wait timeout for Leaflet to be displayed
                await checkBatchIsExpiredInProductAndBatchTest.waitTimeout();
                await timeoutWait.setTimeoutWait(3);
                //display details on Add_productBatch Leaflet when Add_productBatch Leaflet for batch scenario created
                await checkBatchIsExpiredInProductAndBatchTest.checkBatchIsExpiredInProductAndBatchDetailsFetch();
                await timeoutWait.setTimeoutWait(4);
                await checkBatchIsExpiredInProductAndBatchTest.checkBatchIsExpiredInProductAndBatchLeafletDetailsFetch();
                await timeoutWait.setTimeoutWait(4);
                await checkBatchIsExpiredInProductAndBatchTest.getLeafletTypesAndLevel();
                await timeoutWait.setTimeoutWait(4);

        });

});