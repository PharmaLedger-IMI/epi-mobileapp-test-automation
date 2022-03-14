const leafLetRecalled=require('../pageObjectsNativeApp/leafLetNotDisplayedRecalled')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeWait=require('../utils/setTimeout')
const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('ePI Native Leaflet Valid Testing', () => {

    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('RecalledBatch_LeafletNotDisplayed_Setup')
    allureReporter.addDescription('Check that Recalled Batch Leaflet Not displayed')
    allureReporter.startStep("Recalled Batch leaflet Details are Not Populated when Recalled Batch is Unchecked")

    it('should open Patient Setting Scan Page', async() => {
        commonFunctions.patientSettingsScanTest();
    });

    it('should open Recalled Batch Leaflet not displayed', async() => {
        
        allureReporter.addFeature('LeafLet Recalled Batch Leaflet not displayed Data');
        //Wait timeout for Leaflet to be displayed
        await leafLetRecalled.waitTimeout;
        await timeWait.setTimeoutwait(4);
        //display details on Recalled Batch Leaflet Not displayed when Recalled batch scenario Unchecked
        await leafLetRecalled.leafletRecalledDetailsFetch();
        await timeWait.setTimeoutwait(4);

    });

});