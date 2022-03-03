const leafletSMPCUpload=require('../pageObjectsNativeApp/leafletSMPCUploadPage')
const allureReporter = require('@wdio/allure-reporter').default
const LeafletFetchData = require('../utils/utilitiesReuseFunctions')
const testData = require('../testdata/testExpectations.json')
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const expect = require('chai').expect

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

    it('should open Recalled LeafLet Batch Info Page', async () => {
        allureReporter.addFeature('LeafLet Recalled Batch Info Data');
        await leafletSMPCUpload.waitTimeout;
        await browser.pause(4000);
        await leafletSMPCUpload.leafletSMPCUploadDetailsFetch();
        await browser.pause(4500); 

});

});
