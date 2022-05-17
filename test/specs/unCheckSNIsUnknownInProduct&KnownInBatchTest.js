const unCheckSNIsUnknownInProductAndKnownInBatch = require('../pageObjectsNativeApp/unCheckSNIsUnknownInProduct&knownInBatch')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')

describe('091_Edit product to uncheck SN is unknown and edit batch to have valid SN', () => {

        allureReporter.addFeature('Edit product to uncheck SN is unknown and edit batch to have valid SN')
        allureReporter.addSeverity('Critical');
        allureReporter.addTestId('ProductDisplayEpiFlag_6_5')
        allureReporter.addDescription('Check that Leaflet details are displayed to uncheck SN is unknown and edit batch to have valid SN')
        allureReporter.startStep("Add_productBatch leaflet Details are Populated to uncheck SN is unknown and edit batch to have valid SN")

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

        it('Mobile App-should display LeafLet details to uncheck SN is unknown and edit batch to have valid SN', async () => {
                allureReporter.addFeature('LeafLet Recalled Batch Info Data');
                //wait timeout for Leaflet to be displayed
                await unCheckSNIsUnknownInProductAndKnownInBatch.waitTimeout();
                await timeoutWait.setTimeoutWait(3);
                //display details on Add_productBatch Leaflet when Add_productBatch Leaflet for batch scenario created
                await unCheckSNIsUnknownInProductAndKnownInBatch.unCheckSNIsUnknownInProductAndKnownInBatchDetailsFetch();
                await timeoutWait.setTimeoutWait(3);
                await unCheckSNIsUnknownInProductAndKnownInBatch.unCheckSNIsUnknownInProductAndKnownInBatchLeafletDataFetch();
                await timeoutWait.setTimeoutWait(3);

        });

});