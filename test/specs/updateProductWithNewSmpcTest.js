const updateProductWithNewLeafletTest = require('../pageObjectsNativeApp/updateProductWithNewSmpc')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')


describe('059_Edit product to upload SMPC with another leaflet', () => {
        allureReporter.addFeature('Edit product to upload SMPC with another leaflet')
        allureReporter.addSeverity('Critical');
        allureReporter.addTestId('ProductInfoUpdate_3_2')
        allureReporter.addDescription('Check that Leaflet details are displayed for Edit product to upload SMPC with another leaflet')
        allureReporter.startStep("leaflet Details are Populated for Edit product to upload SMPC with another leaflet")

        it('Mobile App - should set Patient Setting and Scan 2D Matrix', async () => {

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

        it('Mobile App - should display LeafLet details for Edit product to upload SMPC with another leaflet', async () => {
                allureReporter.addFeature('LeafLet displayed for Edit product to upload SMPC with another leaflet');
                //wait timeout for Leaflet to be displayed
                await updateProductWithNewLeafletTest.waitTimeout();
                await timeoutWait.setTimeoutWait(3);
                //display details on Add_productBatch Leaflet when Add_productBatch Leaflet for batch scenario created
                await updateProductWithNewLeafletTest.updateProductWithNewLeafletDetailsFetch();
                await timeoutWait.setTimeoutWait(3);
                await updateProductWithNewLeafletTest.updateProductWithNewLeafletWithLeafletDetailsFetch();
                await timeoutWait.setTimeoutWait(3);
                await updateProductWithNewLeafletTest.getLeafletTypesAndLevel();
                await timeoutWait.setTimeoutWait(3);


        });

});