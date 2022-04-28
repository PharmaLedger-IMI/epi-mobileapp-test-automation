const updateBatchWithoutDecommissionedRecalledSNTest=require('../pageObjectsNativeApp/updateBatchWithoutDecommissionedRecalledSN')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait=require('../utils/setTimeout')
// const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('051_Edit batch to update without decommissioned and recalled serial number', () => {

    allureReporter.addFeature('Edit batch to update without decommissioned and recalled serial number')
    allureReporter.addTestId("SerialNumberChecks_11_5");
    allureReporter.addSeverity('Critical');
    allureReporter.addDescription('Check that Leaflet is displayed to update without decommissioned and recalled serial number')
    allureReporter.startStep("Recalled Leaflet Details are Populated after to update without decommissioned and recalled serial number")
 
    
    it('Mobile App-should open Patient Settings and Scan 2D Matrix', async() => {
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

    it('Mobile App-should open LeafLet to update without decommissioned and recalled serial number', async () => {
        allureReporter.addFeature('Recalled Batch Leaflet display Info Data');
        //Wait timeout for Leaflet to be displayed 
        await updateBatchWithoutDecommissionedRecalledSNTest.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await updateBatchWithoutDecommissionedRecalledSNTest.updateBatchWithoutDecommissionedRecalledSNFetch();
        await timeoutWait.setTimeoutWait(4);
       
});

});
