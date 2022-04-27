const updateBatchDecommissionedRecalledSNTest=require('../pageObjectsNativeApp/updateBatchWithDecommissioned&RecalledSN')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait=require('../utils/setTimeout')
// const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('050_Edit batch to update with decommissioned and recalled serial number', () => {

    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('Edit batch to update with decommissioned and recalled serial number')
    allureReporter.addDescription('Check that Leaflet is displayed for to update with decommissioned and recalled serial number')
    allureReporter.startStep("Recalled Leaflet Details are Populated after to update with decommissioned and recalled serial number")
 
    
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

    it('Mobile App-should open LeafLet to update with decommissioned and recalled serial number', async () => {
        allureReporter.addFeature('Recalled Batch Leaflet display Info Data');
        //Wait timeout for Leaflet to be displayed 
        await updateBatchDecommissionedRecalledSNTest.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await updateBatchDecommissionedRecalledSNTest.updateBatchDecommissionedAndRecalledSNFetch();
        await timeoutWait.setTimeoutWait(4);
       
});

});
