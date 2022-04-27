const enableExpiryDateCheckValidExpiryDate=require('../pageObjectsNativeApp/enableExpiryDateCheckValidExpiryDate')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait=require('../utils/setTimeout')


describe('011_Edit batch and enable expiry date check with valid expiry date', () => {

    allureReporter.addFeature('Enable Expiry Date with Valid Data')
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('Basic Auth feature test_2')
    allureReporter.addDescription('Check that Leaflet details are displayed for Enable ExiryDate Valid Data')
    allureReporter.startStep("leaflet Details are Populated as Expired Date on pack for Batch")
    
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

    it('Mobile App-should display LeafLet for Enable ExpiryDate Check Valid ExpiryDate for Batch', async () => {
        allureReporter.addFeature('LeafLet Recalled Batch Info Data');
        //wait timeout for Leaflet to be displayed
        await enableExpiryDateCheckValidExpiryDate.waitTimeout();
        await timeoutWait.setTimeoutWait(3);
        //display details on Add_productBatch Leaflet when Add_productBatch Leaflet for batch scenario created
        await enableExpiryDateCheckValidExpiryDate.enableExpirydateCheckValidExpiryDateFetch();
        await timeoutWait.setTimeoutWait(4);
  
});

});