const enableExpiryDateCheckInValidExpiryDate = require('../pageObjectsNativeApp/enableIncorrectExpiryDateWithInvalidExpiryDate')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')


describe('013_Edit batch and enable expiry date check with invalid expiry date', () => {

        allureReporter.addFeature('Enable Expiry Date with Invalid Data')
        allureReporter.addSeverity('Critical');
        allureReporter.addTestId('BasicAuthFeatureTest_2_2')
        allureReporter.addDescription('Check that Add_productBatch Leaflet displayed')
        allureReporter.startStep("leaflet Details are Populated as Expired Date on Pack for Batch")

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

        it('Mobile App - should open LeafLet after enable expiry date check with invalid expiry date', async () => {
                allureReporter.addFeature('LeafLet dsiplayed for enable expiry date check with invalid expiry date');
                //wait timeout for Leaflet to be displayed
                await enableExpiryDateCheckInValidExpiryDate.waitTimeout();
                await timeoutWait.setTimeoutWait(3);
                //display details on Add_productBatch Leaflet when Add_productBatch Leaflet for batch scenario created
                await enableExpiryDateCheckInValidExpiryDate.enableExpiryDateCheckInvalidExpiryDateDetailsFetch();
                await timeoutWait.setTimeoutWait(2);
                await enableExpiryDateCheckInValidExpiryDate.enableExpiryDateCheckInvalidExpiryDateLeafletDetailsFetch();
                await timeoutWait.setTimeoutWait(2);

        });

});