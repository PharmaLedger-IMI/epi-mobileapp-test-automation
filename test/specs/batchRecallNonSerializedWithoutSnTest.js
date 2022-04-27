const editBatchRecallNonSerailizedWithoutSN=require('../pageObjectsNativeApp/batchRecallNonSerializedWithoutSn')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait=require('../utils/setTimeout')
// const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('016_Edit batch to set batch recall without SN', () => {

    allureReporter.addFeature('Batch Recall with Non Serialized Without SN')
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('Batch recall for non-serialized_1')
    allureReporter.addDescription('Check that batch is recalled and Leaflet are displayed for Non Serialized')
    allureReporter.startStep("Leaflet Details are Populated as Batch is Recalled Message Displayed")
 
    
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

    it('Mobile App-should display LeafLet for Serialized as Recalled Batch Message Without SN', async () => {
        allureReporter.addFeature('Recalled Batch Leaflet display Info Data');
        //Wait timeout for Leaflet to be displayed 
        await editBatchRecallNonSerailizedWithoutSN.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await editBatchRecallNonSerailizedWithoutSN.editBatchRecallWithNonSerialzedWithoutSNFetch();
        await timeoutWait.setTimeoutWait(4);
       
});

});
