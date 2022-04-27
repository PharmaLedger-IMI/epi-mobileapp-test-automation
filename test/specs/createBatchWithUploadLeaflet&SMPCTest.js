const createBatchWithUploadLeafletSMPCTest=require('../pageObjectsNativeApp/createBatchWithUploadLeaflet&SMPC')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait=require('../utils/setTimeout')


describe('058_Leaflet updates on the product Batch specific version', () => {
    allureReporter.addFeature('Leaflet updates on the product Batch specific version')
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('ProductInfoUpdate_4_1')
    allureReporter.addDescription('Check that Leaflet details are displayed for Leaflet updates on the product Batch specific version')
    allureReporter.startStep("leaflet Details are Populated when Leaflet updates on the product Batch specific version")
    
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

    it('Mobile App-should display LeafLet details for Leaflet updates on the product Batch specific version', async () => {
        allureReporter.addFeature('LeafLet Recalled Batch Info Data');
        //wait timeout for Leaflet to be displayed
        await createBatchWithUploadLeafletSMPCTest.waitTimeout();
        await timeoutWait.setTimeoutWait(3);
        //display details on Add_productBatch Leaflet when Add_productBatch Leaflet for batch scenario created
        await createBatchWithUploadLeafletSMPCTest.createBatchWithLeafletSMPCDetailsFetch();
        await timeoutWait.setTimeoutWait(4);
        // await setTimeout(() => {
        //     console.log("inside timeout");
        // }, 4000);
  
});

});