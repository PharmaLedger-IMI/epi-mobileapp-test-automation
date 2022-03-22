const leafletSNDecommisonedBatch=require('../pageObjectsNativeApp/checkSnUpdateSNDecomissioned')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeWait=require('../utils/setTimeout')
const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('ePI Native App Mobile Leaflet Automation Testing', () => {

    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('SerialNumberDecomissioned_LeafletDisplayed_Setup')
    allureReporter.addDescription('Check that SerialNumberDecomissioned Leaflet displayed')
    allureReporter.startStep("SerialNumberDecomissioned leaflet Details are Populated when Batch is created")
    
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

    it('should open Serial Number Decommisoned LeafLet Batch Info Page', async () => {
        allureReporter.addFeature('Decommisoned LeafLet for Batch with Decommisoned Data');
        await leafletSNDecommisonedBatch.waitTimeout;
        //Wait timeout for Leaflet to be displayed
        await timeWait.setTimeoutwait(4);
        //display details on Decommisoned Serail Number Leaflet for Decommisoned Serial Number batch scenario
        await leafletSNDecommisonedBatch.leafletSNDecommisonedDetailsFetch();
        await timeWait.setTimeoutwait(4);

});

});
