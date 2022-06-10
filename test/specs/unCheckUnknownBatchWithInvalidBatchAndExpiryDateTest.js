const uncheckUnknownBatchWithInvalidBatchAndExpiryDate = require('../pageObjectsNativeApp/unCheckUnknownBatchWithInvalidBatchAndExpiryDate')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')

describe('103_Edit product to uncheck SN is in recall and edit batch to update valid SN', () => {

    allureReporter.addFeature('Edit product to uncheck SN is in recall and edit batch to update valid SN')
    allureReporter.addTestId("ProductDisplayEpiFlag_4_4");
    allureReporter.addSeverity('Critical');
    allureReporter.addDescription('Check that Leaflet is displayed for to uncheck SN is in recall and edit batch to update valid SN')
    allureReporter.startStep("Recalled Leaflet Details are Populated after to uncheck SN is in recall and edit batch to update valid SN")


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

    it('Mobile App - should open LeafLet for to uncheck SN is in recall and edit batch to update valid SN', async () => {
        allureReporter.addFeature('Leaflet displayed for uncheck SN is in recall and edit batch to update valid SN');
        //Wait timeout for Leaflet to be displayed
        await uncheckUnknownBatchWithInvalidBatchAndExpiryDate.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await uncheckUnknownBatchWithInvalidBatchAndExpiryDate.uncheckUnknownBatchWithInvalidBatchAndExpiryDateDetailsFetch();
        await timeoutWait.setTimeoutWait(4);

    });

});
