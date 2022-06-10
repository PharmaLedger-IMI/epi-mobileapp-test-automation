const checkDecommissionedSerialNumberTest = require('../pageObjectsNativeApp/decommissionedSerialNumber')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')
// const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('045_Create a batch and enable serial number verification and set decommissioned serial numbers and reason code', () => {

    allureReporter.addFeature('Create a batch and enable serial number verification and set decommissioned serial numbers and reason code')
    allureReporter.addTestId("SerialNumberChecks_6");
    allureReporter.addSeverity('Critical');
    allureReporter.addDescription('Check that Leaflet is displayed for enable serial number verification and set decommissioned serial numbers and reason code')
    allureReporter.startStep("Recalled Leaflet Details are Populated after Recalled Message Displayed")


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

    it('Mobile App - should open LeafLet for enable serial number verification and set decommissioned serial numbers and reason code', async () => {
        allureReporter.addFeature('Leaflet displayed for Create a batch and enable serial number verification and set decommissioned serial numbers and reason code');
        //Wait timeout for Leaflet to be displayed
        await checkDecommissionedSerialNumberTest.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await checkDecommissionedSerialNumberTest.decommissionedSerialNumberDetailsFetch();
        await timeoutWait.setTimeoutWait(3);
        await checkDecommissionedSerialNumberTest.decommissionedSerialNumberLeafletDetailsFetch();
        await timeoutWait.setTimeoutWait(3);

    });

});
