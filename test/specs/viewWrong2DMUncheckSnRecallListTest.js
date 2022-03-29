const nativeLeafLetWrong= require('../pageObjectsNativeApp/viewWrong2DMUncheckSnRecallList')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeWait=require('../utils/setTimeout')
const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('ePI Native App Mobile Leaflet Automation Testing', () => {
    
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('Wrong_LeafletDisplayed_Setup')
    allureReporter.addDescription('Check that Wrong Leaflet displayed')
    allureReporter.startStep("Wrong leaflet Details are Populated when Batch is created")

    it('should open Patient Setting Scan Page', async() => {
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

    it('should open Wrong LeafLet Batch Info Page', async() => {
        allureReporter.addFeature('LeafLet Wrong Batch Info Data');
        await nativeLeafLetWrong.waitTimeout();
        //Wait timeout for Leaflet to be displayed
        await timeWait.setTimeoutwait(4);
         //display details on wrong Leaflet for create batch scenario
        await nativeLeafLetWrong.leafletWrongDetailsFetch();
        await timeWait.setTimeoutwait(4);
        allureReporter.endStep("End Test step for Wrong leaflet Details when Batch is created")
    });

});