const uploadNewVersionEpiInProductTest = require('../pageObjectsNativeApp/uploadNewVersionEpiInProduct')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')



describe('053_Edit product to upload a new version of the ePI', () => {
        allureReporter.addFeature('Edit product to upload a new version of the ePI')
        allureReporter.addSeverity('Critical');
        allureReporter.addTestId('ProductInfoUpdate_1_2')
        allureReporter.addDescription('Check that Leaflet details are displayed as upload a new version of the ePI')
        allureReporter.startStep("leaflet Details are Populated to upload a new version of the ePI")

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

        it('Mobile App-should display LeafLet details for to upload a new version of the ePI', async () => {
                allureReporter.addFeature('LeafLet Recalled Batch Info Data');
                //wait timeout for Leaflet to be displayed
                await uploadNewVersionEpiInProductTest.waitTimeout();
                await timeoutWait.setTimeoutWait(3);
                //display details on Add_productBatch Leaflet when Add_productBatch Leaflet for batch scenario created
                await uploadNewVersionEpiInProductTest.uploadNewVersionEPIInProductDetailsFetch();
                await timeoutWait.setTimeoutWait(3);
                await uploadNewVersionEpiInProductTest.uploadNewVersionEPIInProductLeafletDataFetch();
                await timeoutWait.setTimeoutWait(3);


        });

});