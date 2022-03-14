const editBatchNRecallNonSerailized=require('../pageObjectsNativeApp/editBatchRecallNonSerialized')
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

    it('should open LeafLet for Edit Batch Recall Non Serialized Info Page', async () => {
        allureReporter.addFeature('Edit Batch Recall Non Serialized Leaflet display Info Data');
        //Wait timeout for Leaflet to be displayed 
        await editBatchNRecallNonSerailized.waitTimeout;
        await timeWait.setTimeoutwait(4);
        //display details on Leaflet for recalled batch scenario
        await editBatchNRecallNonSerailized.editBatchRecallNonSerailzedFetch();
        await timeWait.setTimeoutwait(4);

});

});
