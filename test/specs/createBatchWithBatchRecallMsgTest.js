const createBatchWithBatchRecallMsg=require('../pageObjectsNativeApp/createBatchWithBatchRecallMsg')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait=require('../utils/setTimeout')
// const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('ePI Native App Mobile Leaflet Automation Testing', () => {

    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('recalledBatch_LeafletDisplayed_Setup')
    allureReporter.addDescription('Check that batch is recalled and Leaflet is displayed')
    allureReporter.startStep("Recalled Leaflet Details are Populated after Recalled Message Displayed")
 
    
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

    it('should open LeafLet for edit Batch Recall Msg Info Page', async () => {
        allureReporter.addFeature('Edit Batch Recall Msg Leaflet display Info Data');
        //Wait timeout for Leaflet to be displayed 
        await createBatchWithBatchRecallMsg.waitTimeout();
        await timeoutWait.setTimeoutWait(3);
        //display details on Leaflet for recalled batch scenario
        await createBatchWithBatchRecallMsg.createBatchWithBatchMsgRecallMsgFetch();
        await timeoutWait.setTimeoutWait(3);

});

});
