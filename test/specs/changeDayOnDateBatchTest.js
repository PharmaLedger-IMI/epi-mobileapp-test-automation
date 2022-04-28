const changeDayOnDateBatch=require('../pageObjectsNativeApp/changeDayOnDateBatch')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait=require('../utils/setTimeout')
// const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('025_change only the day on the new data matrix', () => {
    
    allureReporter.addFeature('change only the day on the date in Batch')
    allureReporter.addTestId("ExpiryDateChecks_1_2");
    allureReporter.addSeverity('Critical');
    allureReporter.addDescription('Check that Leaflet is displayed when day on date is changed')
    allureReporter.startStep("Leaflet Details are Populated after day on date new date is displayed")
 
    
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

    it('Mobile App-should open LeafLet for day on Date and New Day on Date Pouplated', async () => {
        allureReporter.addFeature('Recalled Batch Leaflet display Info Data');
        //Wait timeout for Leaflet to be displayed 
        await changeDayOnDateBatch.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await changeDayOnDateBatch.changeDayOnDateBatchFetch();
        await timeoutWait.setTimeoutWait(4);
       
});

});
