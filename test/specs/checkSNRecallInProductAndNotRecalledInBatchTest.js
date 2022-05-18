const createSnRecallInProductAndNotRecalledInBatch = require('../pageObjectsNativeApp/checkSNRecallInProductAndNotRecalledInBatch')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')


describe('078_Edit product to check SN is recalled and edit batch to reset valid SN', () => {

    allureReporter.addFeature('Edit product to check SN is recalled and edit batch to reset valid SN')
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('ProductDisplayEpiFlag_4_2')
    allureReporter.addDescription('Check that Leaflet are displayed for to check SN is recalled and edit batch to reset valid SN')
    allureReporter.startStep("Leaflet Details are Populated to check SN is recalled and edit batch to reset valid SN")


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

    it('Mobile App-should display LeafLet Details to check SN is recalled and edit batch to reset valid SN', async () => {
        allureReporter.addFeature('Recalled Batch Leaflet display Info Data');
        //Wait timeout for Leaflet to be displayed 
        await createSnRecallInProductAndNotRecalledInBatch.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await createSnRecallInProductAndNotRecalledInBatch.checkSNRecallInProductNotRecalledInBatchDetailsFetch();
        await timeoutWait.setTimeoutWait(3);
        await createSnRecallInProductAndNotRecalledInBatch.checkSNRecallInProductNotRecalledInBatchLeafletDetailsFetch();
        await timeoutWait.setTimeoutWait(3);
        await createSnRecallInProductAndNotRecalledInBatch.getLeafletTypesAndLevel();
        await timeoutWait.setTimeoutWait(3);

    });

});
