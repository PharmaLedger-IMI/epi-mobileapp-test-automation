const createBatchWithNoBatchMsg=require('../pageObjectsNativeApp/createBatchWithNoBatchMsg')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait=require('../utils/setTimeout')
// const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('018_Create a batch with no batch message', () => {

    allureReporter.addFeature('Create Batch without Any Batch Message')
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('BatchRecall&Msg_1')
    allureReporter.addDescription('Check that batch is created and Leaflet are displayed Without Batch Message')
    allureReporter.startStep("Leaflet Details are Populated without Batch Message Displayed")
 
    
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

    it('Mobile App-should dsiplay LeafLet details without Batch Message', async () => {
        allureReporter.addFeature('All Combination No Batch Msg Leaflet display Info Data');
        //Wait timeout for Leaflet to be displayed 
        await createBatchWithNoBatchMsg.waitTimeout();
        await timeoutWait.setTimeoutWait(3);
        //display details on Leaflet for recalled batch scenario
        await createBatchWithNoBatchMsg.createBatchWithNoBatchMsgFetch();
        await timeoutWait.setTimeoutWait(3);

});

});
