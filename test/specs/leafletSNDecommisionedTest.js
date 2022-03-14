const leafletSNDecommisonedBatch=require('../pageObjectsNativeApp/leafletSNDecomissionedPage')
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
        commonFunctions.patientSettingsScanTest();
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
