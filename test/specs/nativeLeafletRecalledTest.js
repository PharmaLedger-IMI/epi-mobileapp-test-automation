const leafLetRecalled=require('../pageObjectsNativeApp/nativeLeafLetRecalled')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')

describe('ePI Native Leaflet Valid Testing', () => {


    it('should open Patient Setting Scan Page', async() => {
        allureReporter.addFeature('Patient Setting Scan Page');
        await nativePatientPage.waitLaunchURL();
        await browser.pause(3500);
        await nativePatientPage.patientsettingsScan(patientSettingPage.blockchainval());
        await browser.pause(4000);
        await nativePatientPage.scan2DImageProcess();
        await browser.pause(5000);

    });

    it('should open Recalled LeafLet Batch Info Page', async() => {
        
        allureReporter.addFeature('LeafLet Recalled Batch Info Data');
        await leafLetRecalled.waitTimeout;
        await browser.pause(4000);
        await leafLetRecalled.leafletRecalledDetailsFetch();
        await browser.pause(4500); 

    });

});