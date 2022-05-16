const enableSnCheckSnInValidTest = require('../pageObjectsNativeApp/enableSnCheckSnIsInvalid')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')


describe('008_Edit batch and enable serial number check with invalid SN', () => {

        allureReporter.addFeature('Enable SN and Check with InvalidSN details')
        allureReporter.addSeverity('Critical');
        allureReporter.addTestId('BasicAuthFeatureTest_1_2')
        allureReporter.addDescription('Check that Leaflet details are displayed when SN is Enabled and with SN is Invalid')
        allureReporter.startStep("leaflet Details are Populated and should populate leaflet details as failed to vaildate SN")

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

        it('Mobile App-should open LeafLet after enable serial number check with invalid SN', async () => {
                allureReporter.addFeature('LeafLet Recalled Batch Info Data');
                //wait timeout for Leaflet to be displayed
                await enableSnCheckSnInValidTest.waitTimeout();
                await timeoutWait.setTimeoutWait(3);
                //display details on Add_productBatch Leaflet when Add_productBatch Leaflet for batch scenario created
                await enableSnCheckSnInValidTest.enableSnCheckSnInvalidDetailsFetch();
                await timeoutWait.setTimeoutWait(4);
                await enableSnCheckSnInValidTest.enableSnCheckSnInvalidLeafletDetailsFetch();
                await timeoutWait.setTimeoutWait(4);


        });

});