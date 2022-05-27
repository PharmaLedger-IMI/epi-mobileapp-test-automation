const createProductWithUploadLeafletSMPCTest = require('../pageObjectsNativeApp/createProductWithUploadLeafletAndSMPC')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')


describe('056_SMPC update on the product Non- batch specific version', () => {
        allureReporter.addFeature('SMPC update on the product Non- batch specific version')
        allureReporter.addSeverity('Critical');
        allureReporter.addTestId('ProductInfoUpdate_3_1')
        allureReporter.addDescription('Check that Leaflet details are displayed for SMPC update on the product Non- batch specific version')
        allureReporter.startStep("leaflet Details are Populated for SMPC update on the product Non- batch specific version")

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

        it('Mobile App-should display LeafLet details for SMPC update on the product Non- batch specific version', async () => {
                allureReporter.addFeature('LeafLet Recalled Batch Info Data');
                //wait timeout for Leaflet to be displayed
                await createProductWithUploadLeafletSMPCTest.waitTimeout();
                await timeoutWait.setTimeoutWait(3);
                //display details on Add_productBatch Leaflet when Add_productBatch Leaflet for batch scenario created
                await createProductWithUploadLeafletSMPCTest.createProductWithLeafletandSMPCDetailsFetch();
                await timeoutWait.setTimeoutWait(3);
                await createProductWithUploadLeafletSMPCTest.createProductWithLeafletandSMPCLeafletDetailsFetch();
                await timeoutWait.setTimeoutWait(3);
                await createProductWithUploadLeafletSMPCTest.getLeafletTypesAndLevel();
                await timeoutWait.setTimeoutWait(3);

        });

});