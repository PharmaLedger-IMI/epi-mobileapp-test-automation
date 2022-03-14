const leafletSNRecalledBatch=require('../pageObjectsNativeApp/leafletSNRecalledPage')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeWait=require('../utils/setTimeout')
const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('ePI Native App Mobile Leaflet Automation Testing', () => {

    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('SerialNumberRecalled_LeafletDisplayed_Setup')
    allureReporter.addDescription('Check that SerialNumberRecalled Leaflet displayed')
    allureReporter.startStep("SerialNumberRecalled leaflet Details are Populated when Batch is created")
    
    it('should open Patient Setting Scan Page', async() => {
        commonFunctions.patientSettingsScanTest();

    });

    it('should open Serila Number Recalled LeafLet Batch Info Page', async() => {
        allureReporter.addFeature('LeafLet Serial Number Recalled Batch Info Data');
         //Wait timeout for Leaflet to be displayed
        await leafletSNRecalledBatch.waitTimeout();
        await timeWait.setTimeoutwait(4);
         //display details on Serail Number Recalled Leaflet for Serial Number batch scenario
        await leafletSNRecalledBatch.leafletSNRecalledDetailsFetch();
        await timeWait.setTimeoutwait(4);
});

});