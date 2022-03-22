const leafletSNInvalidBatch=require('../pageObjectsNativeApp/editBatchWithInvalidSN')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeWait=require('../utils/setTimeout')
const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('ePI Native App Mobile Leaflet Automation Testing', () => {

    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('SerialNumberInvalid_LeafletDisplayed_Setup')
    allureReporter.addDescription('Check that SerialNumberInvalid Leaflet displayed')
    allureReporter.startStep("SerialNumberInvalid leaflet Details are Populated when Batch is created")
    
  it('should open Patient Setting Scan Page', async () => {
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
