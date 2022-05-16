const deleteBatchUploadLeafletSMPCTest = require('../pageObjectsNativeApp/deleteLeafletAndSMPCInBatch')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')

describe('059_Edit batch to delete ePI and SMPC file.', () => {

        allureReporter.addFeature('Edit batch to delete ePI and SMPC file.')
        allureReporter.addSeverity('Critical');
        allureReporter.addTestId('ProductInfoUpdate_4_2')
        allureReporter.addDescription('Check that Leaflet details are displayed for batch to delete ePI and SMPC file.')
        allureReporter.startStep("leaflet Details are Populated when batch to delete ePI and SMPC file.")

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

        it('Mobile App - should display LeafLet details for batch to delete ePI and SMPC file.', async () => {
                allureReporter.addFeature('LeafLet Recalled Batch Info Data');
                //wait timeout for Leaflet to be displayed
                await deleteBatchUploadLeafletSMPCTest.waitTimeout();
                await timeoutWait.setTimeoutWait(3);
                //display details on Add_productBatch Leaflet when Add_productBatch Leaflet for batch scenario created
                await deleteBatchUploadLeafletSMPCTest.deleteLeafletandSMPCInBatchDetailsFetch();
                await timeoutWait.setTimeoutWait(4);
                // await setTimeout(() => {
                //     console.log("inside timeout");
                // }, 4000);

        });

});