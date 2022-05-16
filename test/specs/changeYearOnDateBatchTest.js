const changeYearOnDateBatch = require('../pageObjectsNativeApp/changeYearOnDateBatch')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')
// const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('027_change only the year on the new data matrix', () => {

    allureReporter.addFeature('change only the year on the new data matrix')
    allureReporter.addTestId("ExpiryDateChecks_1_4");
    allureReporter.addSeverity('Critical');
    allureReporter.addDescription('Check that Leaflet is displayed for change the year on the new date')
    allureReporter.startStep("Leaflet Details are Populated after change the year on the new date")


    it('Mobile App-should open Patient Setting Scan Page', async () => {
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

    it('Mobile App-should open LeafLet for change in Year on date check New date Year populated', async () => {
        allureReporter.addFeature('Recalled Batch Leaflet display Info Data');
        //Wait timeout for Leaflet to be displayed 
        await changeYearOnDateBatch.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await changeYearOnDateBatch.changeYearOnDateBatchDetailsFetch();
        await timeoutWait.setTimeoutWait(3);
        await changeYearOnDateBatch.changeYearOnDateBatchLeafletDetailsFetch();
        await timeoutWait.setTimeoutWait(3);

    });

});
