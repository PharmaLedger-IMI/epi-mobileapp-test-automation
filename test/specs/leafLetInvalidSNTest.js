const leafletSNInvalidBatch=require('../pageObjectsNativeApp/leafletSNInvalidPage')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeWait=require('../utils/setTimeout')
const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('ePI Native App Mobile Leaflet Automation Testing', () => {

    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('SerialNumberInvalid_LeafletDisplayed_Setup')
    allureReporter.addDescription('Check that SerialNumberInvalid Leaflet displayed')
    allureReporter.startStep("SerialNumberInvalid leaflet Details are Populated when Batch is created")
    
    it('should open Patient Setting Scan Page', async() => {
      commonFunctions.patientSettingsScanTest();

    });

    it('should open Invalid Serial Number LeafLet Batch Info Page', async () => {
        allureReporter.addFeature('LeafLet Invlalid Serail Number Batch Info Data');
          //Wait timeout for Leaflet to be displayed
        await leafletSNInvalidBatch.waitTimeout;
        await timeWait.setTimeoutwait(4);
         //display details on Invalid Serail Number Leaflet for Invalid Serial Number batch scenario
        await leafletSNInvalidBatch.leafletSNInvalidDetailsFetch();
        await timeWait.setTimeoutwait(4);
    
    });

});
