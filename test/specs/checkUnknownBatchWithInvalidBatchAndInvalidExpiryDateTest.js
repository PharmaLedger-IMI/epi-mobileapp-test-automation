const checkUnknownBatchWithInvalidBatchAndInvalidExpiryDate = require('../pageObjectsNativeApp/checkUnknownBatchWithInvalidBatchAndInvalidExpiryDate')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')

describe('102_Edit product to check batch is unknown and pass invalid batch and invalid expiry date', () => {

    allureReporter.addFeature('Edit product to check batch is unknown and pass invalid batch and invalid expiry date')
    allureReporter.addTestId("OtherTests_2");
    allureReporter.addSeverity('Critical');
    allureReporter.addDescription('Check that Leaflet is displayed to check batch is unknown and pass invalid batch and invalid expiry date')
    allureReporter.startStep("Leaflet Details are Populated after to check batch is unknown and pass invalid batch and invalid expiry date")


    it('Mobile App - should open Patient Settings and Scan 2D Matrix', async () => {
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

    it('Mobile App - should open LeafLet to check batch is unknown and pass invalid batch and invalid expiry date', async () => {
        allureReporter.addFeature('Leaflet displayed for Edit product to check batch is unknown and pass invalid batch and invalid expiry date');
        //Wait timeout for Leaflet to be displayed
        await checkUnknownBatchWithInvalidBatchAndInvalidExpiryDate.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await checkUnknownBatchWithInvalidBatchAndInvalidExpiryDate.checkUnknownBatchWithInvalidBatchAndInvalidExpiryDateDetailsFetch();
        await timeoutWait.setTimeoutWait(3);
        await checkUnknownBatchWithInvalidBatchAndInvalidExpiryDate.checkUnknownBatchWithInvalidBatchAndInvalidExpiryDateLeafletDetailsFetch();
        await timeoutWait.setTimeoutWait(3);
        await checkUnknownBatchWithInvalidBatchAndInvalidExpiryDate.getLeafletTypesAndLevel();
        await timeoutWait.setTimeoutWait(3);

    });

});
