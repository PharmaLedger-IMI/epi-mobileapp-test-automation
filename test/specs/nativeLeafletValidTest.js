const leafletVaildBatch=require('../pageObjectsNativeApp/nativeLeafLetValid')
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const allureReporter = require('@wdio/allure-reporter').default
const timeWait=require('../utils/setTimeout')
const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('ePI Automation Testing', () => {

    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('Valid_LeafletDisplayed_Setup')
    allureReporter.addDescription('Check that Valid Leaflet displayed')
    allureReporter.startStep("Valid leaflet Details are Populated when Batch is created")

    it('should open Patient Setting Scan Page', async () => {
        commonFunctions.patientSettingsScanTest();

    });

    it('should open Valid LeafLet Batch Info Page', async () => {
        allureReporter.addFeature('Valid LeafLet Batch Info Data');
         //Wait timeout for Leaflet to be displayed
        await leafletVaildBatch.waitTimeout();
        await timeWait.setTimeoutwait(4);
         //display details on Valid Leaflet for create batch scenario
        await leafletVaildBatch.leafletDetailsFetch();
        await timeWait.setTimeoutwait(4);
       
    });

})