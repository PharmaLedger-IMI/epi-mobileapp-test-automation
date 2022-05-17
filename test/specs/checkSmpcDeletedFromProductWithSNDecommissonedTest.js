const checkSmpcDeletedInProductWithSNDecommissioned = require('../pageObjectsNativeApp/checkSmpcDeletedFromProductWithSNDecommissioned')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const timeoutWait = require('../utils/setTimeout')


describe('084_Edit product to check SN is decommissioned and delete smpc. Edit batch to set decommissioned serial number', () => {

    allureReporter.addFeature('Edit product to check SN is decommissioned and delete smpc. Edit batch to set decommissioned serial number')
    allureReporter.addSeverity('Critical');
    allureReporter.addTestId('ProductDisplayEpiFlag_5_3')
    allureReporter.addDescription('Check that Leaflet are displayed to check SN is decommissioned and delete smpc. Edit batch to set decommissioned serial number')
    allureReporter.startStep("Leaflet Details are Populated to check SN is decommissioned and delete smpc. Edit batch to set decommissioned serial number")


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

    it('Mobile App-should display LeafLet to check SN is decommissioned and delete smpc. Edit batch to set decommissioned serial number', async () => {
        allureReporter.addFeature('Recalled Batch Leaflet display Info Data');
        //Wait timeout for Leaflet to be displayed 
        await checkSmpcDeletedInProductWithSNDecommissioned.waitTimeout();
        await timeoutWait.setTimeoutWait(4);
        //display details on Leaflet for recalled batch scenario
        await checkSmpcDeletedInProductWithSNDecommissioned.checkSmpcDeletedFromProductWithSNdecommissionedDetailsFetch();
        await timeoutWait.setTimeoutWait(3);
        await checkSmpcDeletedInProductWithSNDecommissioned.checkSmpcDeletedFromProductWithSNdecommissionedLeafletDetailsFetch();
        await timeoutWait.setTimeoutWait(3);

    });

});
