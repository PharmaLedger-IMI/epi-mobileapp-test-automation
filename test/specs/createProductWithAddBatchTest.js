const addProductBatchLeaflet=require('../pageObjectsNativeApp/createProductWithAddBatch')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait=require('../utils/setTimeout')



describe('004_Create Batch', () => {
    allureReporter.addFeature('Create Batch')
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('ProdAndBatchSetup_1')
    allureReporter.addDescription('Check that Add_productBatch Leaflet details are displayed')
    allureReporter.startStep("Add_productBatch leaflet Details are Populated when batch is created with specified details")
    
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

    it('Mobile App-should display LeafLet details for product and batch created', async () => {
        allureReporter.addFeature('LeafLet Recalled Batch Info Data');
        //wait timeout for Leaflet to be displayed
        await addProductBatchLeaflet.waitTimeout();
        await timeoutWait.setTimeoutWait(3);
        //display details on Add_productBatch Leaflet when Add_productBatch Leaflet for batch scenario created
        await addProductBatchLeaflet.addProductBatchLeafletDetailsFetch();
        await timeoutWait.setTimeoutWait(4);
        // await setTimeout(() => {
        //     console.log("inside timeout");
        // }, 4000);
  
});

});