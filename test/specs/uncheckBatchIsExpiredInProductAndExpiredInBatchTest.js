const uncheckBatchExpiredInProductAndExpiredInBatchTest = require('../pageObjectsNativeApp/uncheckBatchIsExpiredInProductAndExpiredInBatch')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')
// const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('079_Edit product to uncheck batch is expired and edit batch to set expired date', () => {

    allureReporter.addFeature('Edit product to uncheck batch is expired and edit batch to set expired date')
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('ProductDisplayEpiFlag_3_4')
    allureReporter.addDescription('Check that Leaflet are displayed for to uncheck batch is expired and edit batch to set expired date')
    allureReporter.startStep("Leaflet Details are Populated to uncheck batch is expired and edit batch to set expired date")


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

    it('Mobile App - should display LeafLet to uncheck batch is expired and edit batch to set expired date', async () => {
        allureReporter.addFeature('Leaflet displayed for uncheck batch is expired and edit batch to set expired date');
        //Wait timeout for Leaflet to be displayed
        await uncheckBatchExpiredInProductAndExpiredInBatchTest.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await uncheckBatchExpiredInProductAndExpiredInBatchTest.uncheckBatchIsExpiredInProductAndExpiredInBatchFetch();
        await timeoutWait.setTimeoutWait(3);


    });

});
