const editBatchUncheckRecallSerailized=require('../pageObjectsNativeApp/batchUncheckRecallFlagWithSerialized')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait=require('../utils/setTimeout')
// const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('ePI Native App Mobile Leaflet Automation Testing', () => {

    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('Batch_Uncheck_Recall_Flag_LeafletDisplayed_Setup')
    allureReporter.addDescription('Uncheck the Recall Flag in batch and Leaflet is displayed')
    allureReporter.startStep("Leaflet Details are Populated after Uncheck Recalled Message")
 
    
    it('should open Patient Setting Scan Page', async() => {
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

    it('should open LeafLet for Recalled Batch Info Page', async () => {
        allureReporter.addFeature('Recalled Batch Leaflet display Info Data');
        //Wait timeout for Leaflet to be displayed 
        await editBatchUncheckRecallSerailized.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await editBatchUncheckRecallSerailized.editBatchUncheckRecallWithSerialzedFetch();
        await timeoutWait.setTimeoutWait(4);
       
});

});
