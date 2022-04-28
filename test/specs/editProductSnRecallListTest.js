const updateProductSnRecalledFlag=require('../pageObjectsNativeApp/editProductSnRecallList')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait=require('../utils/setTimeout')


describe('006_Edit product to check SN is in recalled list', () => {
    
    allureReporter.addFeature('Edit Product and Enable SN is Recall List')
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('ProdAndBatchSetup_2')
    allureReporter.addDescription('Check that Product SN is recall List is enabled and Leaflet details are displayed for product')
    allureReporter.startStep("Product Leaflet Details are Populated after SN is Recall List is enabled in Product")
 
    
    it('Mobile App-should open Patient Setting and Scan 2D Matrix', async() => {
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

    it('Mobile App-should open LeafLet to check SN is Recalled list in Product', async () => {
        allureReporter.addFeature('Recalled Batch Leaflet display Info Data for Product');
        //Wait timeout for Leaflet to be displayed 
        await updateProductSnRecalledFlag.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await updateProductSnRecalledFlag.productUpdateLeafletRecalledBatchFetch();
        await timeoutWait.setTimeoutWait(4);
       

});

});