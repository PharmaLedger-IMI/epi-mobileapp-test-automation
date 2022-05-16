const createBatchWithExpiredDate = require('../pageObjectsNativeApp/createBatchWithExpiredDate')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')
// const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('024_Create a batch with X expiry date and pass different date Y in matrix', () => {

    allureReporter.addFeature('Create a batch with expiry date and pass different date in matrix')
    allureReporter.addTestId("ExpiryDateChecks_1_1")
    allureReporter.addSeverity('Critical');
    allureReporter.addDescription('Check that Leaflet is displayed for expiry date and different date')
    allureReporter.startStep("Recalled Leaflet Details are Populated after expiry date and different date")


    it('Mobile App-should open Patient Settings and Scan 2D Matrix', async () => {
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

    it('Mobile App-should open LeafLet for expiry date and different date', async () => {
        allureReporter.addFeature('Recalled Batch Leaflet display Info Data');
        //Wait timeout for Leaflet to be displayed 
        await createBatchWithExpiredDate.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await createBatchWithExpiredDate.createBatchWithExpiredDateFetch();
        await timeoutWait.setTimeoutWait(4);

    });

});
