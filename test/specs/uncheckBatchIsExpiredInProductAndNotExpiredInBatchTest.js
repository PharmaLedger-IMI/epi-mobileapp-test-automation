const uncheckBatchExpiredInProductAndNotExpiredInBatchTest = require('../pageObjectsNativeApp/uncheckBatchIsExpiredInProductAndNotExpiredInBatch')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')
// const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('080_Edit product to uncheck batch is expired and edit batch to have valid batch', () => {

    allureReporter.addFeature('Edit product to uncheck batch is expired and edit batch to have valid batch')
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('ProductDisplayEpiFlag_3_5')
    allureReporter.addDescription('Check that Leaflet are displayed for to uncheck batch is expired and edit batch to have valid batch')
    allureReporter.startStep("Leaflet Details are Populated to uncheck batch is expired and edit batch to have valid batch")


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

    it('Mobile App - should display LeafLet to uncheck batch is expired and edit batch to have valid batch', async () => {
        allureReporter.addFeature('Leaflet displayed for uncheck batch is expired and edit batch to have valid batch');
        //Wait timeout for Leaflet to be displayed
        await uncheckBatchExpiredInProductAndNotExpiredInBatchTest.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await uncheckBatchExpiredInProductAndNotExpiredInBatchTest.uncheckBatchIsExpiredInProductAndNotExpiredInBatchDetailsFetch();
        await timeoutWait.setTimeoutWait(3);
        await uncheckBatchExpiredInProductAndNotExpiredInBatchTest.uncheckBatchIsExpiredInProductAndNotExpiredInBatchLeafletDetailsFetch();
        await timeoutWait.setTimeoutWait(3);
        await uncheckBatchExpiredInProductAndNotExpiredInBatchTest.getLeafletTypesAndLevel();
        await timeoutWait.setTimeoutWait(3);

    });

});
