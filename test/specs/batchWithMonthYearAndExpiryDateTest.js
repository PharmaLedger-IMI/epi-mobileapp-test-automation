const batchWithMonthYearOnDate=require('../pageObjectsNativeApp/batchWithMonthYearAndExpiryDate')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait=require('../utils/setTimeout')
// const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('028_create a batch with only MonthYear as expiry date', () => {

    allureReporter.addTestId("ExpiryDateChecks_3_1")
    allureReporter.addSeverity('Critical');
    allureReporter.addFeature('create a batch with only MonthYear as expiry date')
    allureReporter.addDescription('Check that Leaflet is displayed for MonthYear as expiry date')
    allureReporter.startStep("Leaflet Details are Populated after MonthYear as expiry date")
 
    
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

    it('Mobile App-should open LeafLet for MonthYear and Expiry date in Batch', async () => {
        allureReporter.addFeature('Recalled Batch Leaflet display Info Data');
        //Wait timeout for Leaflet to be displayed 
        await batchWithMonthYearOnDate.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await batchWithMonthYearOnDate.batchWithMonthYearOnDateFetch();
        await timeoutWait.setTimeoutWait(4);
       
});

});
