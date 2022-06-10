const uncheckSNDecommissionedInProductAndDecommissionedInBatch = require('../pageObjectsNativeApp/unCheckSnDecommissionedInProductAndDecommssionedInBatch')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')
// const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('089_Edit product to uncheck SN is decommissioned and edit batch to have decommissioned SN', () => {

    allureReporter.addFeature('Edit product to uncheck SN is decommissioned and edit batch to have decommissioned SN')
    allureReporter.addTestId("ProductDisplayEpiFlag_5_4");
    allureReporter.addSeverity('Critical');
    allureReporter.addDescription('Check that Leaflet is displayed to uncheck SN is decommissioned and edit batch to have decommissioned SN')
    allureReporter.startStep("Recalled Leaflet Details are Populated after to uncheck SN is decommissioned and edit batch to have decommissioned SN")


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

    it('Mobile App - should open LeafLet to uncheck SN is decommissioned and edit batch to have decommissioned SN', async () => {
        allureReporter.addFeature('Leaflet displayed for Edit product to uncheck SN is decommissioned and edit batch to have decommissioned SN');
        //Wait timeout for Leaflet to be displayed
        await uncheckSNDecommissionedInProductAndDecommissionedInBatch.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await uncheckSNDecommissionedInProductAndDecommissionedInBatch.uncheckSNDecommissionedInProductAndDecommissonedInBatchFetch();
        await timeoutWait.setTimeoutWait(4);

    });

});
