const disableSNFlagWithInValidSNTest = require('../pageObjectsNativeApp/disableSNFlagWithInvalidSN')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')


describe('011_Edit batch and disable serial number check with invalid SN', () => {

    allureReporter.addFeature('Disable SN with Valid SN check')
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('BasicAuthFeatureTest_1_3')
    allureReporter.addDescription('disable serial number check with invalid SN and Check with Leaflet details are displayed')
    allureReporter.startStep("leaflet Details are Populated for disable serial number check with invalid SN for Batch")

    it('Mobile App - should set Patient Settings Scan 2D Matrix', async () => {

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

    it('Mobile App - LeafLet details after disable serial number check with invalid SN', async () => {
        allureReporter.addFeature('Display LeafLet details for disable serial number check with invalid SN');
        //wait timeout for Leaflet to be displayed
        await disableSNFlagWithInValidSNTest.waitTimeout();
        await timeoutWait.setTimeoutWait(3);
        //display details on Add_productBatch Leaflet when Add_productBatch Leaflet for batch scenario created
        await disableSNFlagWithInValidSNTest.disableSNFlagWithInvalidSNDetailsFetch();
        await timeoutWait.setTimeoutWait(2);
        await disableSNFlagWithInValidSNTest.disableSNFlagWithInvalidSNLeafletDetailsFetch();
        await timeoutWait.setTimeoutWait(2);

    });

});