const createBatchWithUploadLeafletSMPCTest = require('../pageObjectsNativeApp/createBatchWithUploadLeafletAndSMPC')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')


describe('062_Leaflet updates on the product Batch specific version', () => {
        allureReporter.addFeature('Leaflet updates on the product Batch specific version')
        allureReporter.addSeverity('Critical');
        allureReporter.addTestId('ProductInfoUpdate_4_1')
        allureReporter.addDescription('Check that Leaflet details are displayed for Leaflet updates on the product Batch specific version')
        allureReporter.startStep("leaflet Details are Populated when Leaflet updates on the product Batch specific version")

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

        it('Mobile App - should display LeafLet details for Leaflet updates on the product Batch specific version', async () => {
                allureReporter.addFeature('LeafLet displayed for Leaflet updates on the product Batch specific version');
                //wait timeout for Leaflet to be displayed
                await createBatchWithUploadLeafletSMPCTest.waitTimeout();
                await timeoutWait.setTimeoutWait(3);
                //display details on Add_productBatch Leaflet when Add_productBatch Leaflet for batch scenario created
                await createBatchWithUploadLeafletSMPCTest.createBatchWithUploadLeafletAndSMPCDetailsFetch();
                await timeoutWait.setTimeoutWait(3);
                await createBatchWithUploadLeafletSMPCTest.createBatchWithUploadLeafletAndSMPCLeafletDetailsFetch();
                await timeoutWait.setTimeoutWait(3);
                await createBatchWithUploadLeafletSMPCTest.getLeafletTypesAndLevel();
                await timeoutWait.setTimeoutWait(3);

        });

});