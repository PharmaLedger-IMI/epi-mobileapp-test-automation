const disableExpiryDateCheckInValidExpiryDate = require('../pageObjectsNativeApp/disableIncorrectExpiryDateWithInvalidExpiryDate')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')


describe('013_Edit batch and disable expiry date check with valid expiry date', () => {

        allureReporter.addFeature('Disable Expiry Date Check with Invalid Data')
        allureReporter.addSeverity('Critical');
        allureReporter.addTestId('BasicAuthFeatureTest_2_3')
        allureReporter.addDescription('Check that Leaflet are displayed for Disable Expiry Date with Invalid ExpiredDate')
        allureReporter.startStep("leaflet Details are Populated as Expired Date on pack for Batch")

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

        it('Mobile App-should display LeafLet details for Invalid ExpiryDate Details', async () => {
                allureReporter.addFeature('LeafLet Recalled Batch Info Data');
                //wait timeout for Leaflet to be displayed
                await disableExpiryDateCheckInValidExpiryDate.waitTimeout();
                await timeoutWait.setTimeoutWait(3);
                //display details on Add_productBatch Leaflet when Add_productBatch Leaflet for batch scenario created
                await disableExpiryDateCheckInValidExpiryDate.disableExpiryDateCheckInvalidExpiryDateDetailsFetch();
                await timeoutWait.setTimeoutWait(3);
                await disableExpiryDateCheckInValidExpiryDate.disableExpiryDateCheckInvalidExpiryDateLeafletDetailsFetch();
                await timeoutWait.setTimeoutWait(3);

        });

});