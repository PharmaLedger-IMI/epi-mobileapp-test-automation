const checkBatchIsExpiredInProductNotExpiredInBatchTest = require('../pageObjectsNativeApp/checkBatchIsExpiredInProduct&NotExpiredInBatch')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')


describe('073_Edit Product to check batch is expired and edit batch to check batch is not expired', () => {

        allureReporter.addFeature('Edit Product to check batch is expired and edit batch to check batch is not expired')
        allureReporter.addSeverity('Critical');
        allureReporter.addTestId('ProductDisplayEpiFlag_3_2')
        allureReporter.addDescription('Check that Leaflet details are displayed to check batch is expired and edit batch to check batch is not expired')
        allureReporter.startStep("leaflet Details are Populated when batch is recalled to to check batch is expired and edit batch to check batch is not expired")

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

        it('Mobile App-should display LeafLet details to check batch is expired and edit batch to check batch is not expired', async () => {
                allureReporter.addFeature('LeafLet Recalled Batch Info Data');
                //wait timeout for Leaflet to be displayed
                await checkBatchIsExpiredInProductNotExpiredInBatchTest.waitTimeout();
                await timeoutWait.setTimeoutWait(3);
                //display details on Add_productBatch Leaflet when Add_productBatch Leaflet for batch scenario created
                await checkBatchIsExpiredInProductNotExpiredInBatchTest.checkBatchIsExpiredInProductNotExpiredInBatchFetch();
                await timeoutWait.setTimeoutWait(4);
                // await setTimeout(() => {
                //     console.log("inside timeout");
                // }, 4000);

        });

});