const checkBatchIsUnknownInProductWithinValidMatrix = require('../pageObjectsNativeApp/checkBatchIsUnknownInProductWithInValidBatch')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')


describe('092_Edit Product to check batch is unknown and edit batch to have valid SN and pass unknown batch in matrix', () => {

        allureReporter.addFeature('Edit Product to check batch is unknown and edit batch to have valid SN and pass unknown batch in matrix')
        allureReporter.addSeverity('Critical');
        allureReporter.addTestId('ProductDisplayEpiFlag_7_1')
        allureReporter.addDescription('Check that Leaflet details are displayed to check batch is unknown and edit batch to have valid SN and pass unknown batch in matrix')
        allureReporter.startStep("leaflet Details are Populated to check batch is unknown and edit batch to have valid SN and pass unknown batch in matrix")

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

        it('Mobile App - should display LeafLet details to check batch is unknown and edit batch to have valid SN and pass unknown batch in matrix', async () => {
                allureReporter.addFeature('LeafLet Recalled Batch Info Data');
                //wait timeout for Leaflet to be displayed
                await checkBatchIsUnknownInProductWithinValidMatrix.waitTimeout();
                await timeoutWait.setTimeoutWait(3);
                //display details on Add_productBatch Leaflet when Add_productBatch Leaflet for batch scenario created
                await checkBatchIsUnknownInProductWithinValidMatrix.checkBatchIsUnknownInProductWithInValidBatchDetailsFetch();
                await timeoutWait.setTimeoutWait(3);
                await checkBatchIsUnknownInProductWithinValidMatrix.checkBatchIsUnknownInProductWithInValidBatchLeafletDetailsFetch();
                await timeoutWait.setTimeoutWait(3);
               // await checkBatchIsUnknownInProductWithinValidMatrix.getLeafletTypesAndLevel();
               // await timeoutWait.setTimeoutWait(3);


        });

});