const updateBatchWithSNTest=require('../pageObjectsNativeApp/updateBatchWithSerialNumber')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait=require('../utils/setTimeout')
// const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('048_Edit batch to update valid serial number', () => {

    allureReporter.addFeature('Edit batch to update valid serial number')
    allureReporter.addTestId("SerialNumberChecks_11_2");
    allureReporter.addSeverity('Critical');
    allureReporter.addDescription('Check that Leaflet is displayed for to update valid serial number')
    allureReporter.startStep("Recalled Leaflet Details are Populated after to update valid serial number")
 
    
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

    it('Mobile App-should open LeafLet for to update valid serial number', async () => {
        allureReporter.addFeature('Recalled Batch Leaflet display Info Data');
        //Wait timeout for Leaflet to be displayed 
        await updateBatchWithSNTest.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await updateBatchWithSNTest.updateBatchWithSNFetch();
        await timeoutWait.setTimeoutWait(4);
       
});

});
