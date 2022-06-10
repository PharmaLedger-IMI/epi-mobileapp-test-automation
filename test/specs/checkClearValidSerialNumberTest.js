const checkClearValidSerialNumberTest = require('../pageObjectsNativeApp/checkClearValidSerialNumber')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')


describe('041_Edit batch to reset serial number and scan with valid serial number', () => {

    allureReporter.addFeature('Edit batch to reset serial number and scan with valid serial number')
    allureReporter.addTestId("SerialNumberChecks_2");
    allureReporter.addSeverity('Critical');
    allureReporter.addDescription('Check that Leaflet is displayed for reset serial number and scan with valid serial number')
    allureReporter.startStep("Leaflet Details are Populated after reset serial number and scan with valid serial number")


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

    it('Mobile App - should open LeafLet for reset serial number and scan with valid serial number', async () => {
        allureReporter.addFeature('Leaflet displayed for Edit batch to reset serial number and scan with valid serial number');
        //Wait timeout for Leaflet to be displayed
        await checkClearValidSerialNumberTest.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await checkClearValidSerialNumberTest.checkClearValidSerialNumberDetailsFetch();
        await timeoutWait.setTimeoutWait(3);
        await checkClearValidSerialNumberTest.checkClearValidSerialNumberLeafletDetailsFetch();
        await timeoutWait.setTimeoutWait(3);

    });

});
