const checkSNDecommissionedInProductAndNotInBatch = require('../pageObjectsNativeApp/checkSNDecommissionedInProductAndNotInBatch')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')


describe('087_Edit product to check SN is decommssioned and edit batch to reset decommissioned SN', () => {

    allureReporter.addFeature('Edit product to check SN is decommssioned and edit batch to reset decommissioned SN')
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('ProductDisplayEpiFlag_5_2')
    allureReporter.addDescription('Check that Leaflet are displayed to check SN is decommssioned and edit batch to reset decommissioned SN')
    allureReporter.startStep("Leaflet Details are Populated to check SN is decommssioned and edit batch to reset decommissioned SN")


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

    it('Mobile App - should display LeafLet Details to check SN is decommssioned and edit batch to reset decommissioned SN', async () => {
        allureReporter.addFeature('Leaflet displayed for Edit product to check SN is decommssioned and edit batch to reset decommissioned SN');
        //Wait timeout for Leaflet to be displayed
        await checkSNDecommissionedInProductAndNotInBatch.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await checkSNDecommissionedInProductAndNotInBatch.checkSNDecommissionedInProductAndNotInBatchDetailsFetch();
        await timeoutWait.setTimeoutWait(3);
        await checkSNDecommissionedInProductAndNotInBatch.checkSNDecommissionedInProductAndNotInBatchLeafletDetailsFetch();
        await timeoutWait.setTimeoutWait(3);
        await checkSNDecommissionedInProductAndNotInBatch.getLeafletTypesAndLevel();
        await timeoutWait.setTimeoutWait(3);

    });

});
