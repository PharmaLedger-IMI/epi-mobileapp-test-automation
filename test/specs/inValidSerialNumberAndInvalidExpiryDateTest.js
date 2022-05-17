const invalidSerialNumberAndInvalidExpiryDate = require('../pageObjectsNativeApp/inValidSerialNumberAndInvalidExpiryDate')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')
const webView = require('../pageObjectsNativeApp/webView')

describe('097_Other tests', () => {

        allureReporter.addFeature('Other tests')
        allureReporter.addSeverity('Critical');
        allureReporter.addTestId('OtherTests_1')
        allureReporter.addDescription('Check that Leaflet details are displayed for Other tests')
        allureReporter.startStep("leaflet Details are Populated for Other tests")

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

        it('Mobile App-should display LeafLet details for Other tests', async () => {
                allureReporter.addFeature('LeafLet Recalled Batch Info Data');
                //wait timeout for Leaflet to be displayed
                await invalidSerialNumberAndInvalidExpiryDate.waitTimeout();
                await timeoutWait.setTimeoutWait(3);
                //display details on Add_productBatch Leaflet when Add_productBatch Leaflet for batch scenario created
                await invalidSerialNumberAndInvalidExpiryDate.invalidSerialNumberAndInvalidExpiryDateFetch();
                await timeoutWait.setTimeoutWait(4);


        });

});