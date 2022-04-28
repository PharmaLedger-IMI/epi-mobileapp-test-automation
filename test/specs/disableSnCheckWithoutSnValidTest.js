const disableSnCheckWithoutSNIsValidTest=require('../pageObjectsNativeApp/disableSnCheckWithoutSnValid')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait=require('../utils/setTimeout')


describe('010_Edit batch and disable serial number check without SN', () => {

    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('BasicAuthFeatureTest_1_4')
    allureReporter.addDescription('Check that Leaflet is displayed for disable serial number check without SN')
    allureReporter.startStep("leaflet Details are Populated when disable serial number check without SN")
    
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

    it('Mobile App-should display LeafLet details without SN', async () => {
        allureReporter.addFeature('LeafLet Recalled Batch Info Data');
        //wait timeout for Leaflet to be displayed
        await disableSnCheckWithoutSNIsValidTest.waitTimeout();
        await timeoutWait.setTimeoutWait(3);
        //display details on Add_productBatch Leaflet when Add_productBatch Leaflet for batch scenario created
        await disableSnCheckWithoutSNIsValidTest.disableSnCheckWithoutSnIsValidDetailsFetch();
        await timeoutWait.setTimeoutWait(4);
  
});

});