const editBatchUncheckRecallMsgNonSerailizedWithoutSN=require('../pageObjectsNativeApp/batchUncheckRecallMsgNonSerilaizedWithoutSn')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait=require('../utils/setTimeout')
// const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('017_Edit batch to undo batch recall without SN', () => {

    allureReporter.addFeature('Uncheck Recall Message Without SN for Non Seriliazed')
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('BatchRecallAndBatchMessage_10_2')
    allureReporter.addDescription('Check that Leaflet are displayed for Non Serialized Without Batch is Recalled Message')
    allureReporter.startStep("Recalled Leaflet Details are Populated as Non Serialized Batch is Recalled Message Displayed")
 
    
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

    it('Mobile App-should display LeafLet for Non Serialized as Without Recalled Batch Message Without SN', async () => {
        allureReporter.addFeature('Recalled Batch Leaflet display Info Data');
        //Wait timeout for Leaflet to be displayed 
        await editBatchUncheckRecallMsgNonSerailizedWithoutSN.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await editBatchUncheckRecallMsgNonSerailizedWithoutSN.editBatchUncheckRecallMsgNonSerialzedWithoutSNFetch();
        await timeoutWait.setTimeoutWait(4);
       
});

});
