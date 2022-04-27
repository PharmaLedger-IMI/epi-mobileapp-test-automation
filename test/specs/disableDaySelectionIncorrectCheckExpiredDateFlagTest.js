const disableDaySelectionIncorrectCheckExpiredDateFlag=require('../pageObjectsNativeApp/disableDaySelectionIncorrectCheckExpiredDateFlag')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait=require('../utils/setTimeout')
// const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('030_Create a batch with MonthYear as expiry date and disable day selection, incorrect and enable expired date flag', () => {

    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('Create a batch with MonthYear as expiry date and disable day selection, incorrect and enable expired date flag')
    allureReporter.addDescription('Check that Leaflet is displayed for Create a batch with MonthYear as expiry date and disable day selection, incorrect and enable expired date flag')
    allureReporter.startStep("Leaflet Details are Populated after Create a batch with MonthYear as expiry date and disable day selection, incorrect and enable expired date flag")
 
    
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

    it('Mobile App-should open LeafLet with MonthYear as expiry date and disable day selection, incorrect and enable expired date flag', async () => {
        allureReporter.addFeature('Recalled Batch Leaflet display Info Data');
        //Wait timeout for Leaflet to be displayed 
        await disableDaySelectionIncorrectCheckExpiredDateFlag.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await disableDaySelectionIncorrectCheckExpiredDateFlag.disableDaySelectionIncorrectCheckExpiredDateFlagFetch();
        await timeoutWait.setTimeoutWait(4);
       
});

});
