const uncheckSNDecommissionedInProductAndNotDecommissionedInBatch = require('../pageObjectsNativeApp/unCheckSnDecommissionedInProduct&NotDecommissionedInBatch')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')
// const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('086_Edit product to uncheck SN is decommissioned and edit batch to reset decommissioned SN', () => {

    allureReporter.addFeature('Edit product to uncheck SN is decommissioned and edit batch to reset decommissioned SN')
    allureReporter.addTestId("ProductDisplayEpiFlag_5_5");
    allureReporter.addSeverity('Critical');
    allureReporter.addDescription('Check that Leaflet is displayed to uncheck SN is decommissioned and edit batch to reset decommissioned SN')
    allureReporter.startStep("Recalled Leaflet Details are Populated after to uncheck SN is decommissioned and edit batch to reset decommissioned SN")


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

    it('Mobile App-should open LeafLet to uncheck SN is decommissioned and edit batch to reset decommissioned SN', async () => {
        allureReporter.addFeature('Recalled Batch Leaflet display Info Data');
        //Wait timeout for Leaflet to be displayed 
        await uncheckSNDecommissionedInProductAndNotDecommissionedInBatch.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await uncheckSNDecommissionedInProductAndNotDecommissionedInBatch.unCheckSNDecommissionedInProductAndNotDecommissionedInBatchDetailsFetch();
        await timeoutWait.setTimeoutWait(3);
        await uncheckSNDecommissionedInProductAndNotDecommissionedInBatch.unCheckSNDecommissionedInProductAndNotDecommissionedInBatchLeafletDetailsFetch();
        await timeoutWait.setTimeoutWait(3);
        await uncheckSNDecommissionedInProductAndNotDecommissionedInBatch.getLeafletTypesAndLevel();
        await timeoutWait.setTimeoutWait(3);

    });

});
