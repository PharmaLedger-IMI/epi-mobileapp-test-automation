const createBatchWithBatchMsg=require('../pageObjectsNativeApp/createBatchWithBatchMsg')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait=require('../utils/setTimeout')
// const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('019_Create a batch with batch message', () => {

    allureReporter.addFeature('Create Batch with Batch Message')
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('BatchRecall&Msg_2')
    allureReporter.addDescription('Check that Leaflet are displayed with Batch Message')
    allureReporter.startStep("Leaflet Details are Populated with Batch Message Displayed")
 
    
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

    it('Mobile App-should display LeafLet details with Batch Message', async () => {
        allureReporter.addFeature('Edit Batch Recall Msg Leaflet display Info Data');
        //Wait timeout for Leaflet to be displayed 
        await createBatchWithBatchMsg.waitTimeout();
        await timeoutWait.setTimeoutWait(3);
        //display details on Leaflet for recalled batch scenario
        await createBatchWithBatchMsg.createBatchWthBatchMsgFetch();
        await timeoutWait.setTimeoutWait(3);

});

});
