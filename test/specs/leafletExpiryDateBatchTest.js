const leafletExpiryDateBatch=require('../pageObjectsNativeApp/leafletExpiryDateBatch')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeWait=require('../utils/setTimeout')
const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('ePI Native App Mobile Leaflet Automation Testing', () => {
    
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('ExpiryDate_LeafletDisplayed_Setup')
    allureReporter.addDescription('Check that Expiry Date Leaflet displayed')
    allureReporter.startStep("Expiry Date leaflet Details are Populated when Leaflets for Batch is created")
    
    it('should open Patient Setting Scan Page', async() => {
        commonFunctions.patientSettingsScanTest();
    });

    it('should open Expiry Date LeafLet Batch Info Page', async () => {
        allureReporter.addFeature('Expiry Date LeafLet Batch Info Data');
         //Wait timeout for Leaflet to be displayed
        await leafletExpiryDateBatch.waitTimeout;
        await timeWait.setTimeoutwait(4);
         //display details on Expiry Date Leaflet when Expired date for batch scenario created
        await leafletExpiryDateBatch.leafletExpiryDateBatchDetailsFetch();
        await timeWait.setTimeoutwait(4);
        allureReporter.endStep("End Test step for Expiry Date Batch leaflet is displayed")


});

});