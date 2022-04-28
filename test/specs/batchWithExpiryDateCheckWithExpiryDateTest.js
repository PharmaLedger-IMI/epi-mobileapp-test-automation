const editBatchWithExpiryDateCheckWithExpiryDate=require('../pageObjectsNativeApp/batchWithExpiryDateCheckWithExpiryDate')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait=require('../utils/setTimeout')
// const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('023_Edit batch to select expired date', () => {
    allureReporter.addFeature("Edit batch to select expired date");
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('BatchRecallAndBatchMessage_12_2')
    allureReporter.addDescription('Check that Leaflet is displayed for batch with Expired Date, Valid Details')
    allureReporter.startStep("Leaflet Details are Populated with Expired Date on pack Message Displayed")
 
    
    it('Mobile App-should set Patient Setting and Scan 2D Matrix', async() => {
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

    it('Mobile App-should display LeafLet with Expired Date on Pack Message', async () => {
        allureReporter.addFeature('Recalled Batch Leaflet display Info Data');
        //Wait timeout for Leaflet to be displayed 
        await editBatchWithExpiryDateCheckWithExpiryDate.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await editBatchWithExpiryDateCheckWithExpiryDate.batchWithExpiredDateCheckWithExpiryDateFetch();
        await timeoutWait.setTimeoutWait(4);
       
});

});
