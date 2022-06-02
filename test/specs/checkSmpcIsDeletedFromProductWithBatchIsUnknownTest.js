const checkSmpcDeletedInProductWithBatchIsUnknown = require('../pageObjectsNativeApp/checkSmpcIsDeletedFromProductWithBatchIsUnknown')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')

describe('094_Edit product to check batch is unknown and delete smpc. Pass unknown batch in matrix', () => {

    allureReporter.addFeature('Edit product to check batch is unknown and delete smpc. Pass unknown batch in matrix')
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('ProductDisplayEpiFlag_7_3')
    allureReporter.addDescription('Check that Leaflet are displayed for to check batch is unknown and delete smpc. Pass unknown batch in matrix')
    allureReporter.startStep("Leaflet Details are Populated to check batch is unknown and delete smpc. Pass unknown batch in matrix")


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

    it('Mobile App - should display LeafLet Details to check batch is unknown and delete smpc. Pass unknown batch in matrix', async () => {
        allureReporter.addFeature('Recalled Batch Leaflet display Info Data');
        //Wait timeout for Leaflet to be displayed 
        await checkSmpcDeletedInProductWithBatchIsUnknown.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await checkSmpcDeletedInProductWithBatchIsUnknown.checkSmpcIsDeletedFromProductWithBatchIsUnknownDetailsFetch();
        await timeoutWait.setTimeoutWait(3);
        await checkSmpcDeletedInProductWithBatchIsUnknown.checkSmpcIsDeletedFromProductWithBatchIsUnknownLeafletDetailsFetch();
        await timeoutWait.setTimeoutWait(3);

    });

});
