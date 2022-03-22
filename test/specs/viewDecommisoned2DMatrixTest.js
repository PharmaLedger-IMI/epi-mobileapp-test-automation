const leafLetDecommissioned= require('../pageObjectsNativeApp/viewDecommisioned2DMatrix')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeWait=require('../utils/setTimeout')
const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('ePI Native App Mobile Leaflet Automation Testing', () => {
    
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('Decommisoned_LeafletDisplayed_Setup')
    allureReporter.addDescription('Check that Decommisioned Leaflet displayed')
    allureReporter.startStep("Decommisioned leaflet Details are Populated when Batch is created")

    it('should open Patient Setting Scan Page', async() => {
        commonFunctions.patientSettingsScanTest();

    });

    it('should open Decomissioned LeafLet Batch Info Page', async() => {
        allureReporter.addFeature('LeafLet Decommisioned Batch Info Data');
          //Wait timeout for Leaflet to be displayed
        await leafLetDecommissioned.waitTimeoutTime;
        await timeWait.setTimeoutwait(4);
         //display details on Decommisoned Leaflet for create batch scenario
        await leafLetDecommissioned.leafletDecommisonedDetailsFetch();
        await timeWait.setTimeoutwait(4);

    });

});