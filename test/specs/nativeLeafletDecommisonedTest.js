const leafLetDecommissioned= require('../pageObjectsNativeApp/nativeLeafLetDecommisioned')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')

describe('ePI Native App Mobile Leaflet Automation Testing', () => {
    
    it('should open Patient Setting Scan Page', async() => {
        allureReporter.addFeature('Patient Setting Scan Page');
        await nativePatientPage.waitLaunchURL();
        await browser.pause(3500);
        await nativePatientPage.patientsettingsScan(patientSettingPage.blockchainval());
        await browser.pause(4000);
        await nativePatientPage.scan2DImageProcess();
        await browser.pause(5000);

    });

    it('should open Decomissioned LeafLet Batch Info Page', async() => {
        allureReporter.addFeature('LeafLet Decommisioned Batch Info Data');
        await leafLetDecommissioned.waitTimeoutTime;
        await browser.pause(4000);
        await leafLetDecommissioned.leafletDecommisonedDetailsFetch();
        await browser.pause(4500);

    });

});