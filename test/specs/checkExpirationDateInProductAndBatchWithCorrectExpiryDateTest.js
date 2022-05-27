const checkExpirationDateInProductAndBatchWithCorrectExpiryDateTest = require('../pageObjectsNativeApp/checkExpirationDateInProductAndBatchWithCorrectExpiryDate')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')


describe('067_Edit product to check expiration date is incorrect and edit batch to have correct expiry date', () => {

        allureReporter.addFeature('Edit product to check expiration date is incorrect and edit batch to have correct expiry date')
        allureReporter.addSeverity('Critical');
        allureReporter.addTestId('ProductDisplayEpiFlag_2_1')
        allureReporter.addDescription('Check that Leaflet details are displayed for to check expiration date is incorrect and edit batch to have correct expiry date')
        allureReporter.startStep("leaflet Details are Populated when batch is recalled to check expiration date is incorrect and edit batch to have correct expiry date")

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

        it('Mobile App-should display LeafLet details to check expiration date is incorrect and edit batch to have correct expiry date', async () => {
                allureReporter.addFeature('LeafLet Recalled Batch Info Data');
                //wait timeout for Leaflet to be displayed
                await checkExpirationDateInProductAndBatchWithCorrectExpiryDateTest.waitTimeout();
                await timeoutWait.setTimeoutWait(3);
                //display details on Add_productBatch Leaflet when Add_productBatch Leaflet for batch scenario created
                await checkExpirationDateInProductAndBatchWithCorrectExpiryDateTest.checkExpirationDateInProductWithCorrectExpiryDateDetailsFetch();
                await timeoutWait.setTimeoutWait(3);
                await checkExpirationDateInProductAndBatchWithCorrectExpiryDateTest.checkExpirationDateInProductWithCorrectExpiryDateLeafletDetailsFetch();
                await timeoutWait.setTimeoutWait(3);
                await checkExpirationDateInProductAndBatchWithCorrectExpiryDateTest.getLeafletTypesAndLevel();
                await timeoutWait.setTimeoutWait(3);

        });

});