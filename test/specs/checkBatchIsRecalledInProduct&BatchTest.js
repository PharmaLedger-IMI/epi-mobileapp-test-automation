const checkBatchRecallInProductAndBatchTest=require('../pageObjectsNativeApp/checkBatchIsRecalledInProduct&Batch')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait=require('../utils/setTimeout')


describe('062_Edit Product to check batch is recalled and edit batch to set recall message', () => {
    
    allureReporter.addFeature('Edit Product to check batch is recalled and edit batch to set recall message')
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('ProductDisplayEpiFlag_1_2')
    allureReporter.addDescription('Check that Leaflet details are displayed for check batch is recalled and edit batch to set recall message')
    allureReporter.startStep("leaflet Details are Populated when check batch is recalled and edit batch to set recall message")
    
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

    it('Mobile App-should display LeafLet details for check batch is recalled and edit batch to set recall message', async () => {
        allureReporter.addFeature('LeafLet Recalled Batch Info Data');
        //wait timeout for Leaflet to be displayed
        await checkBatchRecallInProductAndBatchTest.waitTimeout();
        await timeoutWait.setTimeoutWait(3);
        //display details on Add_productBatch Leaflet when Add_productBatch Leaflet for batch scenario created
        await checkBatchRecallInProductAndBatchTest.checkBatchRecalledInProductAndBatchFetch();
        await timeoutWait.setTimeoutWait(4);
        // await setTimeout(() => {
        //     console.log("inside timeout");
        // }, 4000);
  
});

});