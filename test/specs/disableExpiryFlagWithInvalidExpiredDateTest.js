const disableExpiredDateFlagWithIncorrectExpiryDateTest = require('../pageObjectsNativeApp/disableExpiredFlagWithInvalidExpiredDate')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')

describe('017_Create a batch with MonthYear as expiry date and disable day selection, enable incorrect and disable expired date flag', () => {

    allureReporter.addFeature('Create a batch with MonthYear as expiry date and disable day selection, enable incorrect and disable expired date flag')
    allureReporter.addTestId("ExpiryDateChecks_3_4");
    allureReporter.addSeverity('Critical');
    allureReporter.addDescription('Check that Leaflet is displayed for with MonthYear as expiry date and disable day selection, enable incorrect and disable expired date flag')
    allureReporter.startStep("Leaflet Details are Populated after with MonthYear as expiry date and disable day selection, enable incorrect and disable expired date flag")


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

    it('Mobile App - should open LeafLet for with MonthYear as expiry date and disable day selection, enable incorrect and disable expired date flag', async () => {
        allureReporter.addFeature('Leaflet displayed for Create a batch with MonthYear as expiry date and disable day selection, enable incorrect and disable expired date flag');
        //Wait timeout for Leaflet to be displayed
        await disableExpiredDateFlagWithIncorrectExpiryDateTest.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await disableExpiredDateFlagWithIncorrectExpiryDateTest.disableExpiredFlagWithInvalidExpiredDateDetailsFetch();
        await timeoutWait.setTimeoutWait(3);
        await disableExpiredDateFlagWithIncorrectExpiryDateTest.disableExpiredFlagWithInvalidExpiredDateLeafletDataFetch();
        await timeoutWait.setTimeoutWait(3);

    });

});
