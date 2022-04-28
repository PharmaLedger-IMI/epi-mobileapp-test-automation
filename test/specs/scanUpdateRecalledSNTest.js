const batchUpdateRecalledSNTest=require('../pageObjectsNativeApp/scanUpdateRecalledSN')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait=require('../utils/setTimeout')
// const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('042_Edit a batch to update recalled SN and scan with recalled serial numbers', () => {

    allureReporter.addFeature('Edit a batch to update recalled SN and scan with recalled serial numbers')
    allureReporter.addTestId("SerialNumberChecks_8");
    allureReporter.addSeverity('Critical');
    allureReporter.addDescription('Check that Leaflet is displayed for to update recalled SN and scan with recalled serial numbers')
    allureReporter.startStep("Recalled Leaflet Details are Populated after to update recalled SN and scan with recalled serial numbers")
 
    
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

    it('Mobile App-should open LeafLet for to update recalled SN and scan with recalled serial numbers', async () => {
        allureReporter.addFeature('Recalled Batch Leaflet display Info Data');
        //Wait timeout for Leaflet to be displayed 
        await batchUpdateRecalledSNTest.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await batchUpdateRecalledSNTest.batchClearValidSNUpdateRecalledSNFetch();
        await timeoutWait.setTimeoutWait(4);
       
});

});
