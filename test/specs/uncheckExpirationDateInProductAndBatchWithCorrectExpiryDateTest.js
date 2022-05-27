const uncheckExpirationDateInProductAndBatchWithCorrectExpirydateTest = require('../pageObjectsNativeApp/uncheckExpirationDateInProductAndBatchWithCorrectExpiryDate')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')


describe('071_Edit product to uncheck expiration date in incorrect and edit batch to have valid expiry date', () => {

    allureReporter.addFeature('Edit product to uncheck expiration date in incorrect and edit batch to have valid expiry date')
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('ProductDisplayEpiFlag_2_5')
    allureReporter.addDescription('Check that Leaflet are displayed for uncheck expiration date in incorrect and edit batch to have valid expiry date')
    allureReporter.startStep("Leaflet Details are Populated for uncheck expiration date in incorrect and edit batch to have valid expiry date")


    it('Mobile App-should set Patient Setting and Scan 2D Matrix', async () => {
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

    it('Mobile App-should display LeafLet for uncheck expiration date in incorrect and edit batch to have valid expiry date', async () => {
        allureReporter.addFeature('Recalled Batch Leaflet display Info Data');
        //Wait timeout for Leaflet to be displayed 
        await uncheckExpirationDateInProductAndBatchWithCorrectExpirydateTest.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await uncheckExpirationDateInProductAndBatchWithCorrectExpirydateTest.unCheckExpirationDateInProductAndBatchWithCorrectExpiryDateDetailsFetch();
        await timeoutWait.setTimeoutWait(3);
        await uncheckExpirationDateInProductAndBatchWithCorrectExpirydateTest.unCheckExpirationDateInProductAndBatchWithCorrectExpiryDateLeafletDetailsFetch();
        await timeoutWait.setTimeoutWait(3);
        await uncheckExpirationDateInProductAndBatchWithCorrectExpirydateTest.getLeafletTypesAndLevel();
        await timeoutWait.setTimeoutWait(3);

    });

});
