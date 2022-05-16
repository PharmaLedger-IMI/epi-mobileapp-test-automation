const editBatchRecallMsg = require('../pageObjectsNativeApp/editBatchCheckRecallMsg')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')


describe('005_Edit batch to set recall message', () => {

    allureReporter.addFeature('Edit Batch with Batch is Recalled')
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('ProdAndBatchSetup_4')
    allureReporter.addDescription('Check that batch is recalled and Leaflet details are displayed')
    allureReporter.startStep("Recalled Leaflet Details are Populated after batch is recalled in edit batch")


    it('Mobile App-should set Patient Setting and Scan 2D Matrix', async () => {
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

    it('Mobile App-should display LeafLet for edit Batch Recall Message', async () => {
        allureReporter.addFeature('Edit Batch Recall Msg Leaflet display Info Data');
        //Wait timeout for Leaflet to be displayed 
        await editBatchRecallMsg.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await editBatchRecallMsg.editBatchRecallMsgDetailsFetch();
        await timeoutWait.setTimeoutWait(2);
        await editBatchRecallMsg.editBatchRecallMsgLeafletDetailsFetch();
        await timeoutWait.setTimeoutWait(2);

    });

});
