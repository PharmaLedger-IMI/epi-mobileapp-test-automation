const changeMonthOnDateBatch = require('../pageObjectsNativeApp/changeMonthOnDateBatch')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')
// const commonFunctions=require('../utils/commonutilitiesFunctions')

describe('031_change only the month on the new data matrix', () => {

    allureReporter.addFeature('change only the month on the new date in Batch')
    allureReporter.addTestId("ExpiryDateChecks_1_3");
    allureReporter.addSeverity('Critical');
    allureReporter.addDescription('Check that Leaflet is displayed for change only the month and new Date displayed')
    allureReporter.startStep("Leaflet Details are Populated after change on Month from Date")


    it('Mobile App - should open Patient Settings and Scan 2D Matrix', async () => {
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

    it('Mobile App - should open LeafLet for Change in Month on date and check new Month on Date populated', async () => {
        allureReporter.addFeature('Leaflet displayed for change only the month on the new date in Batch');
        //Wait timeout for Leaflet to be displayed
        await changeMonthOnDateBatch.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await changeMonthOnDateBatch.changeMonthOnDateBatchDetailsFetch();
        await timeoutWait.setTimeoutWait(3);
        await changeMonthOnDateBatch.changeMonthOnDateBatchLeafletDetailsFetch();
        await timeoutWait.setTimeoutWait(3);

    });

});
