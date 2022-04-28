const createBatchWithBatchRecallMsg=require('../pageObjectsNativeApp/createBatchWithBatchRecallMsg')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait=require('../utils/setTimeout')
// const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('020_Create a batch to set batch recall and recall message', () => {

    allureReporter.addFeature('Create Batch With Batch Recall Message')
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('BatchRecallAndBatchMessage_11_3')
    allureReporter.addDescription('Check that Leaflet are displayed with Batch Recalled Message')
    allureReporter.startStep("Leaflet Details are Populated with Batch Recalled Message Displayed")
 
    
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

    it('Mobile App-should dispaly LeafLet for Create Batch with Batch Recall Message', async () => {
        allureReporter.addFeature('Edit Batch Recall Msg Leaflet display Info Data');
        //Wait timeout for Leaflet to be displayed 
        await createBatchWithBatchRecallMsg.waitTimeout();
        await timeoutWait.setTimeoutWait(3);
        //display details on Leaflet for recalled batch scenario
        await createBatchWithBatchRecallMsg.createBatchWithBatchMsgRecallMsgFetch();
        await timeoutWait.setTimeoutWait(3);

});

});
