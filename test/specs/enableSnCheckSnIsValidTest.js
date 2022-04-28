const enableSnCheckSnValid=require('../pageObjectsNativeApp/enabelSnCheckSnIsValid')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait=require('../utils/setTimeout')



describe('007_Edit batch and enable serial number check with valid SN', () => {

    allureReporter.addFeature('Enable SN, Check SN is valid details populated')
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('BasicAuthFeatureTest_1_1')
    allureReporter.addDescription('Check that Leaflet are displayed with valid details when SN is enabled')
    allureReporter.startStep("leaflet Details are Populated with Valid SN details")
    
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

    it('Mobile App-should display LeafLet details for Enable SN Check SN is Valid for Batch', async () => {
        allureReporter.addFeature('LeafLet Recalled Batch Info Data');
        //wait timeout for Leaflet to be displayed
        await enableSnCheckSnValid.waitTimeout();
        await timeoutWait.setTimeoutWait(3);
        //display details on Add_productBatch Leaflet when Add_productBatch Leaflet for batch scenario created
        await enableSnCheckSnValid.enableSnCheckSnIsValidDetailsFetch();
        await timeoutWait.setTimeoutWait(4);
        // await setTimeout(() => {
        //     console.log("inside timeout");
        // }, 4000);
  
});

});