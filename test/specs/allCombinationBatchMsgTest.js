const allCombinationBatchMsg=require('../pageObjectsNativeApp/allCombinationBatchMsg')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeWait=require('../utils/setTimeout')
const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('ePI Native App Mobile Leaflet Automation Testing', () => {

    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('recalledBatch_LeafletDisplayed_Setup')
    allureReporter.addDescription('Check that batch is recalled and Leaflet is displayed')
    allureReporter.startStep("Recalled Leaflet Details are Populated after Recalled Message Displayed")
 
    
    it('should open Patient Setting Scan Page', async() => {
        commonFunctions.patientSettingsScanTest();
    });

    it('should open LeafLet for edit Batch Recall Msg Info Page', async () => {
        allureReporter.addFeature('Edit Batch Recall Msg Leaflet display Info Data');
        //Wait timeout for Leaflet to be displayed 
        await allCombinationBatchMsg.waitTimeout;
        await timeWait.setTimeoutwait(3);
        //display details on Leaflet for recalled batch scenario
        await allCombinationBatchMsg.allCombinationBatchMsgFetch();
        await timeWait.setTimeoutwait(3);

});

});
